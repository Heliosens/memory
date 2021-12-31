function Cards (array) {
    this.arr = array;

    /**
     *
     * @param target
     * @param nbr
     */
    this.checkArray = function (target, nbr){
        let itemArr = [];
        let dblArr = [];

        for(let i = 0 ; i < nbr / 2 ; i++){
            itemArr.push(i);
            itemArr.push(i);
        }
        console.log(itemArr)
        for(let i = 0 ; i < nbr ; i++){
            let x = Math.floor(Math.random() * itemArr.length);
            dblArr.push(itemArr[x]);
            itemArr.splice(x, 1)
        }
        console.log(dblArr);

        for(let i = 0 ; i < nbr ; i++){
            let one = document.createElement('div');
            one.style.backgroundImage = 'url(' + this.arr[dblArr[i]] + ')';
            one.style.backgroundColor = "black";
            one.style.width = 200 / nbr * 1.2 + "%";
            one.style.height = "30%";
            target.append(one);
        }
    }
}
