function Cards (elem, array) {
    this.place = elem;
    this.arr = array;

    /**
     * take the number of cards, add double,
     * check and display
     * @param nbr
     */
    this.checkArray = function (nbr){
        let itemArr = [];
        let dblArr = [];

        for(let i = 0 ; i < nbr / 2 ; i++){
            itemArr.push(i);
            itemArr.push(i);
        }

        for(let i = 0 ; i < nbr ; i++){
            let x = Math.floor(Math.random() * itemArr.length);
            dblArr.push(itemArr[x]);
            itemArr.splice(x, 1)
        }

        for(let i = 0 ; i < nbr ; i++){
            let one = document.createElement('div');
            one.style.backgroundImage = 'url(' + this.arr[dblArr[i]] + ')';
            one.style.width = 200 / nbr + "%";
            one.style.height = '30%';
            one.style.position = 'relative';
            this.place.appendChild(one);

        }
    }

    /**
     * cover each card
     * @param url
     */
    this.coverCards = function (url){
        let one = game.getElementsByTagName('div');
        for(let i = 0 ; i < 10 ; i++){
            let backCard = document.createElement('span');
            backCard.style.cssText = `
                background-image: ` + url + `;
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            `;
            one[i].appendChild(backCard);
        }
    }

    /**
     *
     */
    this.inGame = function (){
        let backCard = game.getElementsByTagName('span');
        for (let item of backCard){
            item.addEventListener('click', function (){
                item.parentElement.classList.toggle('test');
                item.style.display = 'none';
                let test = game.getElementsByClassName('test');
                // second
                if(test.length === 2){
                    if(test[0].style.backgroundImage === test[1].style.backgroundImage){
                        for(let item of test){
                            item.classList.toggle('find');
                            let find = document.getElementsByClassName('find');
                            if(find.length === game.getElementsByTagName('div').length){

                                let win = new ModalWindow(game, '#00000080', '50%', '50vh', '#fff', "1px solid #fff");
                                win.screen();
                                win.box('You win !!!', 'Bravo, vous avez trouvé toutes les paires de cartes');
                                console.log('you win !');
                            }
                        }

                    }
                    else {

                    }
                    test[0].classList.toggle('test');
                    test[0].classList.toggle('test');
                }
            })
        }
    }
}

