// if else 

// if 
let age = 37

if(age == 37){
    console.log("La edad es 37")

} else if (age < 18){
    console.log("La edad del usuario es menor ")
} 
else {
    console.log("Mario es gay")
}

// operador Ternario 

age == 37 ? console.log("Edad 37") : console.log("Tu madre es pequeña ")

// switch 
let day = 0;
let Nombre;

switch(day) {
    case 0: 
        Nombre = "Domingo";
        break;
    case 1: 
        Nombre = "Lunes";
        break;
    case 2:
        Nombre = "Martes";
        break;
    case 3: 
        Nombre = "Miércoles";
        break;
    case 4:
        Nombre = "Jueves";
        break;
    case 5: 
        Nombre = "Viernes";
        break;
    case 6:
        Nombre = "Sábado";
        break;
    default: 
        Nombre = "Te equivocaste";
}

console.log(Nombre);



