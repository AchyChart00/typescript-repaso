
/*
    ===== Código de TypeScript =====
*/

//Se pueden declarar las varibales de manera implicita
let nombre = "Hola";
//Variable de manera explicita
let nombre2 : string = "Hola";
//varible de tipo numero
let numero : number = 15;
//también le puedo indicar a TypeScript que la variable puede ser 2 tipos de varibales
let numero2 : string | number = "15";

let booleano : boolean = false;

//Si intento declarar la variable con otro tipo me marcara error
//nombre = 123;

console.log(typeof(numero2));

console.log(nombre, nombre2, numero);