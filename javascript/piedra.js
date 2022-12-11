var piedra = document.getElementById("piedra");
var papel = document.getElementById("papel");
var tijera = document.getElementById("tijera");

piedra.addEventListener("click", maquinap);
papel.addEventListener("click", maquinapa);
tijera.addEventListener("click", maquinati ); 




var jpiedra = 1;
var jpapel = 2;
var jtijera = 3;

function maquinap ()
{
if(jpiedra = 1)
{
    var redactar = document.getElementById("piedra1").innerHTML= "papel";
    jpiedra++
}
}
function maquinapa()
{
    var redactar = document.getElementById("papel1").innerHTML= "tijera";
}
function maquinati()
{
    var redactar = document.getElementById("tijera1").innerHTML= "piedra";
}
