const numero1 = parseInt(prompt ("Ingrese el primer número"))
const numero2 = parseInt(prompt ("Ingrese el segundo número"))
if (!isNaN(numero1) && (!isNaN(numero2))) {
  if (numero1>numero2){
    alert("El primer número ingresado es mayor que el segundo")
  }
  else {
    if (numero1==numero2){
    alert("Los números ingresados son iguales")
    }
    else {
    alert ("El segundo número ingresado es mayor que el primero")
    }
  }
}
else {
  alert ("por favor ingrese solo números")
}