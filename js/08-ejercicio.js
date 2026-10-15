const numero1 = parseInt(prompt("Ingrese el numero para saber si divisible por 2"))
const resultado = numero1 % 2
if (!isNaN(numero1)) {
  if (resultado==0) {
    alert("El número ingresado: " + numero1 + " " + "es divisible por 2")
  }
  else {alert("El número ingresado: " + numero1 + " " + "no es divisible por 2")

  }
}
else {
  alert ("por favor ingrese solo números")
}