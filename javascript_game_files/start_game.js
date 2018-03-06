const playerCreation = require("./game_files/character_files/character_creation")


var player = new playerCreation(18, "Jake");
console.log(player)
player.levelUp();
