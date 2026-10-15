const palabra = prompt("Ingrese la palabra")
let letrassalida = ""
if (isNaN(palabra)) {
  for (let letra of palabra){
    if ((letra=="a") || (letra=="e") || (letra=="i") || (letra=="o") || (letra=="u"))
      {
      letrassalida = letrassalida + letra + " "
      }
    }
  alert("vocales en la palabra ingresada " + letrassalida)
}
else {
  alert ("Ingrese una palabra")
}
