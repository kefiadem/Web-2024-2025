function changecolor(value){
    // i used ai to generate the random color !
    var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    value.style.color = randomColor;
}
