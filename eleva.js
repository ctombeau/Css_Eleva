var font1 = document.getElementById("font1");
var font2 = document.getElementById("font2");
var me = document.getElementById("me");
var fc = document.getElementById("fc");

me.style.display=none;
fc.style.display=none;

font2.style.display ="none";

showImage1()
{
    font1.style.display="block";
    font2.style.display="none";
}

showImage2()
{
    font2.style.display="block";
    font1.style.display="none";
}

setInterval(function(){
    font2.style.display="block";
    font1.style.display="none";
}, 5000)