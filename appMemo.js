let game = document.getElementById('game');
game.style.height = innerHeight *0.9 + "px";

let themes = document.querySelector('#themes');
let number = document.getElementById('choice').getElementsByTagName("a");

// get themes
for(let i = 0 ; i < arrTheme.length ; i++){
    let div = document.createElement('div');
    div.style.backgroundImage = arrTheme[i][1];
    div.className = 'theme';
    themes.appendChild(div);
}

// get user choice nbr = nbr of cards, theme = idx of theme
let nbr = 0;
for(let item of number){
    item.addEventListener('click', function (event){
        event.preventDefault();
        nbr = item.innerHTML;
        console.log(nbr);
        // game
        let play = new Cards(game, arrTheme, nbr);
    })
}


play.checkArray();
play.coverCards(arrTheme[0][1]);

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
                    if (hide.length === 0) {
                        let win = new ModalWindow(document.body, '#ffffff80', '50%', '60vh',
                            '#fff', "1px solid #fff");
                        win.screen();
                        win.box('BRAVO !!!', 'Vous avez trouvé toutes les cartes', arrTheme[0][3]);
                    }
                }
            }
            else {
                for(let item of hide){
                    setTimeout(function (){
                        item.querySelector('span').style.transform = 'rotateY(0deg)';
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
