let game = document.getElementById('game');
game.style.height = innerHeight *0.9 + "px";

let arrCard = [
    "img/booba.png",
    "img/darkTrooper.png",
    "img/grogu.png",
    "img/grogu02.png",
    "img/jedi.png",
    "img/manda01.png",
    "img/manda02.png",
    "img/manda03.png",
    "img/manda04.png",
    "img/robot.png"
];

let play = new Cards(game, arrCard);
play.checkArray(20);
play.coverCards();

