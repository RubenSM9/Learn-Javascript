/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/
// 1. Crea una variable para cada operación aritmética
let a  = 5;
let b = 10;
console.log(a + b); // Suma 
console.log(a * b); // Multiplicar
console.log(a - b); // Resta
console.log(a / b); // Dividir

// 2. Crea una variable para cada tipo de operación de asignación,
// que haga uso de las variables utilizadas para las operaciones aritméticas
let suma = a + b;
let multiplicacion = a * b;
let resta = a - b;
let division = a / b;

suma += 5; // suma = suma + 5;
multiplicacion *= 2; // multiplicacion = multiplicacion * 2;
resta -= 3; // resta = resta - 3;
division /= 2; // division = division / 2;

console.log(suma); // 20
console.log(multiplicacion); // 100
console.log(resta); // -8
console.log(division); // 0.25

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a < b); // true
console.log(a <= 5); // true
console.log(b >= 10); // true
console.log(a != b); // true
console.log(a !== 10); // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b); // false
console.log(a >= 10); // false
console.log(b <= 5); // false
console.log(a == b); // false
console.log(a === "5"); // false

// 5. Utiliza el operador lógico and
console.log(a < b && a !== 0); // true

// 6. Utiliza
console.log(a > b || a < b); // true

// 7. Combina ambos operadores lógicos
console.log((a < b && b >= 10) || (a === 5 && b !== 0)); // true

// 8. Añade alguna negación
console.log(!(a > b)); // true cambia le resultado real 
// este seria false por que 5 es menor a 10 pero el ! lo cambia 

// 9. Utiliza el operador ternario
let baloncesto = true
baloncesto ? console.log("Ganara Alemania, Servia, Canada ") : console.log("Soy gay ") 
// 10. Combina operadores aritméticos, de comparación y lógicos
console.log(((a + b) > 10) && ((a * b) < 100) || (a - b) != 0); // true