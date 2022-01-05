let game = document.getElementById('game');
game.style.height = innerHeight *0.9 + "px";

let themes = document.querySelector('#themes');
let number = document.getElementById('number').getElementsByTagName("div");
let choice = document.getElementsByClassName('choice');

// display themes
for(let i = 0 ; i < arrTheme.length ; i++){
    let img = document.createElement('img');
    img.src = arrTheme[i][1];
    img.classList.add('choice');
    img.dataset.idx = i.toString();
    themes.appendChild(img);
}

// get user choice nbr = nbr of cards, theme = url of theme
let nbr;
let idx;

toggleClass(themes.getElementsByTagName('img'));
toggleClass(number);

let backCard;
let face;

// listen two choices
for(let item of choice){
    item.addEventListener('click', ()=> {
        if(document.getElementsByClassName('select').length === 2){
            nbr = document.getElementsByClassName('select')[0].innerHTML;
            idx =document.getElementsByClassName('select')[1].dataset.idx;
            document.getElementById('first').style.opacity = '0%';

            setTimeout(()=>{
                document.getElementById('first').style.display = "none";
                game.style.display = "flex";
                game.style.transition = "opacity 1s";
                game.style.opacity = '100%';
                // game
                let play = new Cards(game, arrTheme, nbr, idx);
                play.adaptGameboard();
                play.checkArray();
                play.coverCards();

                playing();
                },1000);
        }
    })
}

/**
 *
 */
function playing (){
    // get element
    backCard = game.getElementsByTagName('span');
    face = game.getElementsByClassName('face');
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
                            setTimeout(function (){
                                let win = new ModalWindow(document.body, '#ffffff80', '50%', '60vh',
                                    '#fff', "1px solid #fff");
                                win.screen();
                                win.box('BRAVO !!!', 'Vous avez trouvé toutes les cartes', arrTheme[idx][3]);
                                win.closeBtn('restart', '2vw');
                            }, 1000)
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
}

document.querySelector('#btnFrameId').addEventListener('click', function (){

})

/**
 * listen card, add class and hide
 * @param item
 */
function turnCard (item) {
    // turn card
    backCard[item].style.transform = 'rotateY(90deg)';
    face[item].classList.toggle('test');
    setTimeout(()=>face[item].style.transform = 'rotateY(0deg)', 500);
}

/**
 * give class to user selection
 * @param elements
 */
function toggleClass (elements) {
    for(let item of elements){
        item.addEventListener('click', function (){
            // dataset
            for(let item of elements){
                item.classList.remove('select');
            }
            item.classList.add('select');
        })
    }
}
