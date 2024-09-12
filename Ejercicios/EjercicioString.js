/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
let a = "Uriel"  
const b = " come penes "
let carusel = a + b 
console.log(carusel)
// 2. Muestra la longitud de una cadena de texto
console.log(carusel.length) // sin parentesis despues del lenght

// 3. Muestra el primer y último carácter de un string
console.log(carusel[0])
console.log(carusel[16])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(carusel.toUpperCase())
console.log(carusel.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let hola = `hola soy ruben+
y soy extremamente
guapo como mi novia Carmen
que la quiero mucho`
// 6. Interpola el valor de una variable en un string
console.log(`Hola eres ${b}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let reemplazado = carusel.replace(/ /g, "-")
console.log(reemplazado)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(carusel.includes("Uriel"))
// 9. Comprueba si dos strings son iguales
a = b 
console.log(a === b)
// 10. Comprueba si dos strings tienen la misma longitud
let frase  = " Hola soy Wilyrex "
console.log(frase.length == carusel.length) 
