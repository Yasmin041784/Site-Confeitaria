var slideIndex = 0;         //Slide Inicial
var timechange = 2000;      //Tempo em milisegundos
carrosel();

function carrosel() {
    var i;
    var x = document.getElementsByClassName("slideVeggie");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex-1].style.display = "block";
    setTimeout(carrosel, timechange);
}