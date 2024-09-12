let a  = 5 
let b = 10
console.log( a + b ) // Suma 
console.log( a * b ) // Multiplicar
console.log( a - b ) // Resta
console.log( a / b ) // Dividir

console.log( a % b ) // Modulo RESTO DE LA DIVISION
console.log(a ** b) // Exponente 

a++ // Incremento 
console.log(a) // Muestar el incremento 
console.log(a) // Se queda incrementado 

b-- // Decremrnto
console.log(b)

// Operadores de asignacion
console.log("Operador de asignacion")
let myVariable = 2 // asignas el operador =
console.log(myVariable)
myVariable += 2
console.log(myVariable)
myVariable -= 2
console.log(myVariable)
myVariable *= 2
console.log(myVariable)
myVariable /= 2
console.log(myVariable)
myVariable %= 2
console.log(myVariable)
myVariable **= 2
console.log(myVariable)

// Operadores de comparación 
console.log("Operacion Comparación")
console.log(a > b )
console.log(a < b )
console.log(a >= b )
console.log(a <= b )
console.log(a == 6) // comprobando la igualdad por valor 
console.log(a == "6") // Cadena de texto 
console.log(a === 6) // Igualdad por identidad (por tipo y valor)
console.log(a === "6") // False por que a si que es igual a numero y 6 al estar entre comillas cadena de texto  
console.log(a != 6) // Es como decir a es distinto de 6 
console.log(a !== "6") 
// console.log(0 = "") // 0 es igual a uan caadena vacia 
// console.log(0 = " ")


// Operador Lógico y = &&
console.log(5 > 10 && 15 > 20 )
console.log(50 > 10 && 150 > 20 )
console.log(5 > 100 && 150 > 20 )
// operador o (||)
// si se cumple minimo una accion seria true ahora 

// not (!)
console.log(!true)

// Operador ternario 
// permite escribir una condición 
// constante 
const estalloviendo = true 
// Si se cumple lo primero si es falso lo segundo 
estalloviendo ?  console.log("Esta lloviendo ") : console.log("No esta lloviendo ") 
