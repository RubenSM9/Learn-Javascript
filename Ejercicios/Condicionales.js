/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log("///////////////////////////")
let nombre = "Ruben"
console.log(nombre)
console.log("///////////////////////////")
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Uriel";
let contraseña = 1234;

if (usuario.toLowerCase() === "uriel") {
    if (contraseña === 1234) {
        console.log("Uriel es muy guapo");
    } else {
        console.log("Fallaste imbecil");
    }
}
console.log("///////////////////////////")
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0
if (numero === 0  ) {
    console.log("El numero es 0 ")
} else if (numero > 0 ) {
    console.log("El numero es positivo ")
} else if (numero < 0 ){
    console.log("EL numero es negativo ")
}
console.log("///////////////////////////")
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let persona = 18

if (persona >= 18) {
    console.log("Puede votar")

} else if (persona < 18) {
    console.log("Usted es menor no puede votar")
}
console.log("///////////////////////////")
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad = 18; 
let status = edad >= 18 ? "adulto" : "menor";
console.log(status);
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "agosto"
let estacion

switch (mes.toLowerCase()) {
    case "diciembre":
    case "enero":
    case "febrero":
        estacion = "Invierno"
        break
    case "marzo":
    case "abril":
    case "mayo":
        estacion = "Primavera"
        break;
    case "junio":
    case "julio":
    case "agosto":
        estacion = "Verano"
        break
    case "septiembre":
    case "octubre":
    case "noviembre":
        estacion = "Otoño"
        break
    default:
        estacion = "Mes no válido"
}

console.log(`Nos encontramos en ${estacion}.`)


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dias;

switch (mes.toLowerCase()) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        dias = 31;
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        dias = 30;
        break;
    case "febrero":
        dias = 28; // Considera 29 si es año bisiesto
        break;
    default:
        dias = "Mes no válido";
}

console.log(`El mes de ${mes} tiene ${dias} días.`);


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7