/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea
console.log("Soy Ruben")
// 2. Escribe un comentario en varias líneas

/*
hola
soy el
mejor 
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let hola = "hola"; // string
var hola1 = "hola1"; // string
const hola2 = "hola2"; // string
let num = 42; // number
let isTrue = true; // boolean
let undef; // undefined
let nulo = null; // null
let symbol = Symbol('sym'); // symbol

// 4. Imprime por consola el valor de todas las variables
console.log(hola);
console.log(hola1);
console.log(hola2);
console.log(num);
console.log(isTrue);
console.log(undef);
console.log(nulo);
console.log(symbol);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof hola);
console.log(typeof hola1);
console.log(typeof hola2);
console.log(typeof num);
console.log(typeof isTrue);
console.log(typeof undef);
console.log(typeof nulo); // Note: typeof null is 'object' due to a historical bug in JavaScript
console.log(typeof symbol);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
hola = "adiós";
hola1 = "adiós1";
// hola2 = "adiós2"; // Error: Cannot reassign a constant variable
num = 100;
isTrue = false;
undef = "now defined";
nulo = "not null anymore";
symbol = Symbol('newSym');

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
hola = 123;
hola1 = true;
// hola2 = 456; // Error: Cannot reassign a constant variable
num = "one hundred";
isTrue = 0;
undef = 42;
nulo = undefined;
symbol = "symbol as string";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constString = "constant string";
const constNumber = 3.14;
const constBoolean = false;
const constUndefined = undefined;
const constNull = null;
const constSymbol = Symbol('constSym');

// 9. A continuación, modifica los valores de las constantes
 constString = "new constant string"; // Error: Cannot reassign a constant variable
 constNumber = 2.71; // Error: Cannot reassign a constant variable
 constBoolean = true; // Error: Cannot reassign a constant variable
 constUndefined = "defined"; // Error: Cannot reassign a constant variable
 constNull = "not null"; // Error: Cannot reassign a constant variable
 constSymbol = Symbol('newConstSym'); // Error: Cannot reassign a constant variable

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
