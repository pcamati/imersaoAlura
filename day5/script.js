var listPlayers = [];

var tableElement = document.getElementById("tabelaJogadores");

displayTable();

function displayTable() {
  tableElement.innerHTML = "";
  listPlayers.forEach(function (player, index) {
    tableElement.innerHTML += `
         <tr>
            <td>${player.name}</td>
            <td>${player.win}</td>
            <td>${player.draw}</td>
            <td>${player.lost}</td>
            <td>${player.score}</td>
            <td><button onClick="addWin(${index})">Win</button></td>
            <td><button onClick="addDraw(${index})">Draw</button></td>
            <td><button onClick="addLost(${index})">Lost</button></td>
          </tr>
    `;
  });
}

function addWin(index) {
  listPlayers[index].win++;
  listPlayers[index].score = listPlayers[index].score + 3;
  displayTable();
}
function addDraw(index) {
  listPlayers[index].draw++;
  listPlayers[index].score++;
  displayTable();
}
function addLost(index) {
  listPlayers[index].lost++;
  displayTable();
}

function addNewPlayer(nameObject) {
  nameObject = document.getElementById("inputNewPlayer").value;
  document.getElementById("inputNewPlayer").value = "";
  var newPlayer = nameObject.toLowerCase();
  newPlayer = {
    name: nameObject,
    win: 0,
    draw: 0,
    lost: 0,
    score: 0
  };
  listPlayers.push(newPlayer);
  displayTable();
}

function reset() {
  listPlayers.forEach(function (player) {
    console.log(player);
    player.win = 0;
    player.draw = 0;
    player.lost = 0;
    player.score = 0;
  });
  displayTable();
}

function erasePlayers() {
  var input = prompt("Are you sure you want to erase all players?");

  if (input.toLowerCase() === "yes") {
    listPlayers = [];
  }
  displayTable();
}