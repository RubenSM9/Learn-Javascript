// set 

// Declaracion

let mySet = new Set()
let mySet2 = {} // esto no es un SET vacio

// Inicializacion

mySet = new Set("Ruben", "es" , "guapo") // con datos no se inicializa asi 
console.log(mySet)
console.log(mySet2)


mySet = new Set(["Ruben", "es" , "guapo"]) // es con los corchetes 
console.log(mySet)

// Metodos Comunes 

// add y delete 

mySet.add("https.xd")
console.log(mySet)

mySet.delete("es")
console.log(mySet)

// has
// para comprobar si existe un Element

console.log(mySet.has("Ruben"))
console.log(mySet.has("Uriel"))

// size = longitud 

console.log(mySet.size)

// convertir un set en array 
let myArray = Array.from(mySet)
console.log(myArray)

// convertir  array en set 

mySet = new Set(myArray)
console.log(mySet)


// No admite duplicados el set es la diferencia con el array 
// a la hora de hacer el add

mySet.add("https.xd")
mySet.add("https.xd")
mySet.add("https.xd")
mySet.add("https.xd")
console.log(mySet)
// No va a mostarr repetidos 
