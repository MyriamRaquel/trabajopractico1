const palabra = prompt("Ingrese la palabra")
let letrassalida = ""
if (isNaN(palabra)) {
    for (let caracter = 0; caracter < palabra.length; caracter++) {
      if ((palabra.charAt(caracter)=="a") || (palabra.charAt(caracter)=="e") || (palabra.charAt(caracter)=="i") || (palabra.charAt(caracter)=="o") || (palabra.charAt(caracter)=="u"))
        {
        letrassalida = letrassalida + palabra.charAt(caracter) + " "
        }
    } 
  alert("vocales en la palabra ingresada " + letrassalida)
}
else {
  alert ("Ingrese una palabra")
}
