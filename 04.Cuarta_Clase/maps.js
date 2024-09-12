// Map coleccion de elementos doble clabe y valor

let Mapa = new Map()
console.log(Mapa)

// Inicialización 

Mapa = new Map([
["Nombre: " , "Rubén"],
["Edad: ", 18]

])

console.log(Mapa)

// Metodos y Propiedades 

// set 

Mapa.set("Deporte", "Basket") // sirve para añadir y actualizar
console.log(Mapa)

// get (recuperar el valor)

console.log(Mapa.get("Nombre: "))

// has para comprobar si una clave existe o no 

console.log(Mapa.has("Nombre: "))
console.log(Mapa.has("Altura: "))

// delete 

Mapa.delete("Edad: ")
console.log(Mapa)

// Keys, Values y Entries

console.log(Mapa.keys())
console.log(Mapa.values())
console.log(Mapa.entries()) // valores y keys separados mola

// size tamaño 
console.log(Mapa.size)
// clear

Mapa.clear()
console.log(Mapa)