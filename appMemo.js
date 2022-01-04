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
play.checkArray(10);
play.coverCards("url('img/mudhorn.png')");

// get element
let backCard = game.getElementsByTagName('span');
let face = game.getElementsByClassName('face');
// nbr of click
let time = 0;

for(let i = 0 ; i < backCard.length ; i++){
    backCard[i].addEventListener('click', function (){
        time++;
        // allow two click
        if(time === 1){
            turnCard(i);
        }
        if(time === 2){
            turnCard(i);

            // show face
            setTimeout(function (){
                face[i].style.transform = "rotate(0deg)";
            }, 500)

        }

        // get cards to test
        let test = game.getElementsByClassName('test');

        // get hide element
        let hide = document.getElementsByClassName('hide');

        // if background are the same
        if(test.length === 2) {
            if (test[0].style.backgroundImage === test[1].style.backgroundImage) {
                for (let item of test) {
                    // remove class hide
                    item.parentElement.classList.toggle('hide');
                    // if there's no more hide => win
                    if (hide.length === 8) {
                        let win = new ModalWindow(game, '#ffffff80', '50%', '50vh',
                            '#fff', "1px solid #fff");
                        win.screen();
                        win.box('BRAVO !!!', 'Vous avez trouvé toutes les paires de cartes');
                    }
                }
            }
            else {
                console.log(hide)
                for(let item of hide){
                    setTimeout(function (){
                        item.querySelector('span').style.transform = 'rotateY(0deg)';
                        // backCard = game.getElementsByTagName('span');
                        time = 0;
                    }, 1000);
                }
            }

            // suppr class test
            test[0].classList.toggle('test');
            test[0].classList.toggle('test');
            time = test.length;

        }
    })
}

// listen card, add class and hide
function turnCard (item) {
    // turn card
    backCard[item].style.transform = 'rotateY(90deg)';
    face[item].classList.toggle('test');
    setTimeout(()=>face[item].style.transform = 'rotateY(0deg)', 500);
}
