function Cards (array) {
    this.arr = array;

    this.setCard = function (target, nbr){
        for(let i = 0 ; i < nbr ; i++){
            let one = document.createElement('div');
            one.style.backgroundImage = 'url(' + this.arr[i] + ')';
            one.style.backgroundColor = "black";
            target.append(one);
        }

    }

}
