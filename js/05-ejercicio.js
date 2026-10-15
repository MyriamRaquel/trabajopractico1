const numero1 = parseInt(prompt ("Ingrese el primer número"))
const numero2 = parseInt(prompt ("Ingrese el segundo número"))
if (!isNaN(numero1) && (!isNaN(numero2))) {
  const suma = numero1 + numero2
  alert ("La suma de ambos números es: " + suma)
}
else {
  alert ("por favor ingrese solo números")
}