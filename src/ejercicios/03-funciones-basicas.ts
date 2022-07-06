//Funciones Básicas

function sumar(a : string, b: string){
    return a + " " + b
}

//Podemos especificar el valor que deseamos regresar agregando dos puntos despues del parentesis de los parametros
function sumar2(a : string, b: string):string{
    return a + " " + b
}

//Funcion de flecha
const sumarFecha =(a:string, b:string):string=>{
    return a + b;
}

//La jerarquia de los numeros que recibo en los parametros son Primero los obligatorios, segundo los opcionales
//y tercero los que les asigno un valor por defecto
const multiplicar=(numero:number, otroNumero?:number, base:number = 2):number=>{
    return  numero + base;
}

const resultado = multiplicar(5, 10); 
console.log(resultado);