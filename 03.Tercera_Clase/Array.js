// Array 
// Crear un array vacío usando notación literal
let myArray = []

// Crear un array vacío usando el constructor de Array
let myArray2 = new Array()

// Imprimir ambos arrays
console.log(myArray)  // Imprime []
console.log(myArray2) // Imprime []

myArray = [1,2,3,4]
myArray2 = new Array (1,2,3,4)

console.log(myArray)
console.log(myArray2)

myArray = ["CARMEN TMB"]
myArray2 = new Array ("Ruben el guapo")

console.log(myArray)
console.log(myArray2)

MYaRRAY = new Array(3)
MYaRRAY [2]  ="Marín"
MYaRRAY[0] = "Rubén"
MYaRRAY[1] = "Sánchez"
console.log(MYaRRAY)

// Metodos Comunes 
myArray = []

// push y pop meter borrar para los amigos

myArray.push("Ruben")
myArray.push("es")
myArray.push("Guapisimo")

console.log(myArray)
// console.log(myArray.pop()) asi borras del array el ultimo elemnto 
// y lo muestars a aparte 


myArray.pop()
myArray.pop()

console.log(myArray)

// shif y unshift 
console.log(myArray)
myArray.shift() // LO MISMO QUE EL POP PEOR HACE EL PRIMERO EN VEZ DEL ULTIMO


myArray.unshift("Ruben", " SAuper", "Guapo") // agrega desde el principio

// length
let myArray23 = ["pene", "pene", "pene"] 
console.log(myArray23.length) // caunto mide le arry

// clear 

myArray23 = [] // lo declaras a vacio por lo cual esta borrado o 
// vacio y eso es igual a valor 0 
console.log(myArray23)


// splice

let myArray9 = [0, 1, 2, 3, 4, 5 , 6] 
myArray9.splice(2, 4) // Elimina desde el primer numero
// y elimina en total el valor del segunndo numero, si este es un 4
// se eliminaran 4 numeros 
console.log(myArray9)