function Cards (elem, array, nbr, idx) {
    this.place = elem;
    this.arr = array;
    this.nbr = nbr;
    this.idx = idx;

    /**
     * take the number of cards, add double,
     * check and display
     */
    this.checkArray = function (){
        let newImg = [];
        for(let i = 0 ; i < this.nbr / 2 ; i++){
            newImg.push(this.arr[this.idx][4][i]);
        }

        let itemArr = [];
        let dblArr = [];

        for(let i = 0 ; i < newImg.length ; i++){
            itemArr.push(i);
            itemArr.push(i);
        }


        for(let i = 0 ; i < this.nbr ; i++){
            let x = Math.floor(Math.random() * itemArr.length);
            dblArr.push(itemArr[x]);
            itemArr.splice(x, 1)
        }

        for(let i = 0 ; i < this.nbr ; i++){
            let frame = document.createElement('div');
            frame.style.width = 200 / nbr + "%";
            frame.style.height = '30%';
            frame.style.position = 'relative';
            frame.classList.add('frame');
            frame.classList.add("hide");
            let face = document.createElement('div');
            face.classList.add("face");

            face.style.width = '100%';
            face.style.height = '100%';

            face.style.backgroundImage = 'url(' + newImg[dblArr[i]] + ')';

            frame.appendChild(face);
            this.place.appendChild(frame);
        }
    }

    /**
     * cover each card
     */
    this.coverCards = function (){
        let one = game.getElementsByClassName('frame');
        for(let i = 0 ; i < nbr ; i++){
            let backCard = document.createElement('span');
            backCard.style.cssText = `
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            `;

            backCard.style.backgroundImage = 'url(' + this.arr[idx][1] + ')';

            one[i].appendChild(backCard);
        }
    }
}

