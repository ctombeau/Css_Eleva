var font1 = document.getElementById("font1");
var font2 = document.getElementById("font2");

font2.style.display ="none";

setInterval(function(){
    if(font2.style.display=="none")
        font1.style.display="block";
    else if(font2.style.display=="block")
        font1.style.display="none";
}, 5000)