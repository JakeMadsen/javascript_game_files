const races = require("./character_data/races")

class characterCreation {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.xp = 0;
        this.level = 1;
    }

    levelUp(){
        this.level++;
    }

}
module.exports = characterCreation


