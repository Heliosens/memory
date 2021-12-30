function Cards (array) {
    this.arr = array;

    /**
     * create 2 * cards * nbr on target
     * @param target
     * @param nbr
     */
    this.setCard = function (target, nbr){
        for(let i = 0 ; i < nbr ; i++){
            let one = document.createElement('div');
            one.style.backgroundImage = 'url(' + this.arr[i] + ')';
            one.style.backgroundColor = "black";
            one.style.width = 200 / nbr * 1.2 + "%";
            one.style.height = "30%";
            target.append(one);
        }
    }
}
