var data = new Map([["vimal", 5], ["raj", 32], ["haqeem", 2319], ["vicky", 15], ["francis", 24], ["stranger", 90], ["thahir", 30000], ["naveen", 129030]]);
var currPlayer = ""
var count=0
document.getElementById("click-button").disabled = true;
document.getElementById("submit-button").disabled = true;
constructTable()
function constructTable() {
  var sortedData = new Map([...data.entries()].sort((a, b) => b[1] - a[1]))
  var count = 1;
  var table = document.getElementById('table')
  while (table.firstElementChild) {
    table.removeChild(table.firstElementChild)
  }
  var row = document.createElement('tr')
  var rank = document.createElement('th')
  rank.textContent = "Rank"
  var name = document.createElement('th')
  name.textContent = "Player name"
  var clicks = document.createElement('th')
  clicks.textContent = "Clicks"
  row.appendChild(rank)
  row.appendChild(name)
  row.appendChild(clicks)
  table.appendChild(row)
  for (var player of sortedData.keys()) {
    var row = document.createElement('tr')
    var rank = document.createElement('td')
    rank.textContent = count++
    var name = document.createElement('td')
    name.textContent = player
    var clicks = document.createElement('td')
    clicks.textContent = sortedData.get(player)
    row.appendChild(rank)
    row.appendChild(name)
    row.appendChild(clicks)
    table.appendChild(row)
    if (count == 9) {
      break
    }
  }
}

document.getElementsByName('player')[0].addEventListener('input',() => {
  var input = document.getElementsByName('player')[0].value.trim()
  var div = document.getElementById('error-name')
  var p = document.createElement('p')
  var button = document.getElementById('submit-button')
  if (div.firstElementChild) {
    div.removeChild(div.firstElementChild)
  }
  if (input === "") {
    p.textContent = "Enter a valid name"
    button.classList.add('disabled')
    button.disabled = true
  }
  else if (data.has(input)) {
    p.textContent = "Username already exists"
    button.classList.add('disabled')
    button.disabled = true
  }
  else {
    button.classList.remove('disabled')
    button.disabled = false
  }
  div.appendChild(p)
})

function getName() {
  currPlayer = document.getElementsByName('player')[0].value.trim()
  count = 0
  document.getElementById('success-msg').classList.remove('display-none')
  setTimeout(() => {
    document.getElementById('success-msg').classList.add('display-none')
  }, 5000)
  var clickButton = document.getElementById('click-button')
  clickButton.classList.remove('disabled')
  clickButton.classList.add('abled')
  clickButton.disabled = false
}

function clickGame() {
  count++;
  data.set(currPlayer, count)
  constructTable()
  document.getElementById('click-number').innerHTML = " " + count
}