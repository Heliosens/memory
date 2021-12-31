function Cards (elem, array) {
    this.place = elem;
    this.arr = array;


    /**
     * take the number of cards, add double, check and display
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
            one.style.backgroundColor = 'black';
            one.style.width = 200 / nbr * 1.2 + "%";
            one.style.height = '30%';
            one.style.position = 'relative';
            this.place.appendChild(one);

        }
    }

    this.coverCards = function (){
        let one = game.getElementsByTagName('div');
        for(let i = 0 ; i < 20 ; i++){
            let backCard = document.createElement('span');
            console.log(backCard);
            backCard.style.cssText = `
                background-image: url('img/mudhorn.png');
                background-position: center;
                background-size: contain;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            `;
            one[i].appendChild(backCard);
        }
    }

}
