const btn = document.querySelector("button");
const coin = document.querySelector('.coin');

btn.addEventListener('click', function(){
    coin.innerText = "Head";  
    coin.style.animation="coinFlip 2s 2 ease";

    coin.addEventListener("animationend", function () {

        coin.style.animation="";

        const randomWin = Math.floor(Math.random() * 2);

        if(randomWin === 0){
           coin.innerText = "Head"; 
        }else{
           coin.innerText = "Tails"; 
        }

}); 

});
