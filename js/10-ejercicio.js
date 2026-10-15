const numero1 = parseInt(prompt ("Ingrese un número"))
if (!isNaN(numero1)) {
    if (((numero1 % 2) == 0) && ((numero1 % 5) == 0)) {
      alert ("El numero ingresado: " + numero1 + " es divisible por 2 y por 5")
    }
      else {
        if ((numero1 % 2) == 0) {
            alert ("El numero ingresado: " + numero1 + " es divisible por 2")
        }
        if ((numero1 % 5) == 0) {
            alert ("El numero ingresado: " + numero1 + " es divisible por 5")
        }
      }
      if (((numero1 % 3) == 0) && ((numero1 % 7) == 0)) {
        alert ("El numero ingresado: " + numero1 + " es divisible por 3 y por 7")
         }
      else {
        if ((numero1 % 3) == 0) {
                alert ("El numero ingresado: " + numero1 + " es divisible por 3")
        }
        if ((numero1 % 7) == 0) {
                alert ("El numero ingresado: " + numero1 + " es divisible por 7")
        }
      }
if (((numero1 % 2) != 0) && ((numero1 % 5) != 0) && ((numero1 % 3) != 0) && ((numero1 % 7) != 0)) {
      alert ("El numero ingresado: " + numero1 + " no es divisible ni por 2, 3, 5 y 7")
    }
    }
   
else {
  alert ("por favor ingrese solo números")
}