/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales
let myArray = new Array(5)
myArray [0] = "Perro"
myArray [1] = "Gato"
myArray [2] = "Dragon"
myArray [3] = "Serpiente"
myArray [4] = "Fang Peng"
console.log(myArray)
// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift("Elefante"); // Añade "Elefante" al principio del array
myArray.push("Pedro Sánchez"); // Añade "Pedro Sánchez" al final del array

console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2, 1)// Elimina un elemento en la tercera posición (índice 2)

console.log(myArray)

// 4. Crea un set que almacene cinco libros
let set = new Set(["Harry Poter", "Pokoyo", "Historias de Franco" ,"Historias Corrinetes", "Crazy Time"])
console.log(set)

// Muy importante poner [] en el set si no se imprime letra a letra 

// 5. Añade dos más. Uno de ellos repetido
set.add("Ruben")
set.add("Ruben")
set.add("Carmen")
console.log(set)
// 6. Elimina uno concreto a tu elección
set.delete("Pokoyo")
console.log(set )

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [8,"Agosto"],
    [9,"Septiembre"],
    [10,"Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"]
])

console.log(meses)



// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.get(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set('verano', [6, 7, 8]);

console.log(meses);
console.log(meses.get('verano')); 

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

// Crear un array
let arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Enero", "Febrero"];

// Transformar el array en un Set para eliminar duplicados
let setMeses = new Set(arrayMeses);

// Crear un Map y almacenar el Set dentro de él
let mapa = new Map();
mapa.set('mesesSet', setMeses);

console.log(mapa);
console.log(mapa.get('mesesSet')); // Debería imprimir el Set con los meses sin duplicados
