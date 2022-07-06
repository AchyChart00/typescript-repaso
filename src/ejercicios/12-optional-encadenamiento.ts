//encadenamiento

interface Pasajero { 
    nombre: string;
    hijos?: string[]; 

}

const pasajero1: Pasajero ={
    nombre:"Fernando"
}

const pasajero2:Pasajero = {
    nombre:"Melisas",
    hijos:["Natalia", "Gabriel"]
}

function imprimeHijos(pasajero:Pasajero){
    //encadenamiento, en este caso con el signo de interrogación sirve para evaluar si es valido lo que sigue en los argumentos
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);