const heart = document.getElementById('heart');

function heartChange(e) {
    if(e.src === "./assets/img/heart.png"){
        e.src = "./assets/img/heart_fill.png"
        console.log(1);
    }
    else {
        console.log(2);
        e.src = "./assets/img/heart.png";
    }
}