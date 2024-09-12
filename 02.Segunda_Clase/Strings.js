let Nombre = "Ruben"
let myEdad = "18"
let saludo = "Hola, " + Nombre
console.log(saludo )
console.log(typeof saludo)

// Longitud
console.log(saludo.length)
// Acceso caracteres 
console.log(saludo[0])
console.log(saludo[1])
// Metodos Comunes
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())
console.log(saludo.indexOf("Ruben")) // El indice donde se encuentra la palabra Ruben 
console.log(saludo.indexOf("Sánchez")) // Sanchez no se encunetra por eso pone -1
console.log(saludo.includes("Ruben")) // Comprueba si incluye la cadena de texto l,a palabra
console.log(saludo.slice(0, 10)) // Muestra la farse con los 10 primeros elementos de 0 a 10 
console.log(saludo.replace("Ruben", "El guapo")) // Si se encuentra la palabra Ruben de sustituye por EL guapo

// Tempalte literals (plantillas literales)
let mensaje = `Hola, este es mi 
curso de Javascript` // Se peude escribnir en 2 lineas 
// Se ve en dos lienas en la terminal 
console.log(mensaje)


console.log(`Hola, ${Nombre}!`) // Interpolar Variables
console.log("Hola " + Nombre+ "!") // Tmb se puede hacer asi 
let pene = "Enorme"
console.log(`Hola, ${Nombre}! Tu pene es ${pene}. -_- `)
