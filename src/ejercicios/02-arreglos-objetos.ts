


//arreglo indicando los tipos que va a aceptar
let habilidades : string[] = ["bash", "counter", "headling"];

//arreglo que acepta diversos tipos de variables
let habilidades2 : ( boolean | string | number )[] = ["bash", "counter", "headling", 100];


//Para indicar y especificar los tipos de varibles que debe de tener el objeto personaje utilizamos una 
//interface
interface Personaje{
    nombre:string;
    hp:number;
    habilidades:string[];
    //Agregamos el signo de interrogación para que no sea obligatoria esta varible en los objetos
    puebloNatal?: string;
}
//OBJETOS DE TYPESCRIPT
const personaje: Personaje ={
    nombre:"jacob", 
    hp:100,
    habilidades:["Bach", "Counter", "softtek"]
}

personaje.puebloNatal = "Pueblo paleta";

console.table(personaje);