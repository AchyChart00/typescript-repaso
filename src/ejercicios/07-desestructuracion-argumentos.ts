//Desestructuracion de argumentos

//SE REALIZA LA EXPORTACIÓN PARA EL EJERCICIO 8 
export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:"Nokia A1",
    precio:150,
}

const tableta:Producto={
    desc:"Ipad Air 1",
    precio:150,
}

//aquí forzo que al función debe de regrear un arreglo de numeros. [number, number]
export const calcularISV=(productos:Producto[]):[number, number]=>{

    let total = 0;

    //Desestructuración de argumentos
    productos.forEach(({precio})=>{
        total += precio;
    })

    return [total, total * 0.15];
}

const productos: Producto[] = [telefono, tableta] 

const [total, isv] = calcularISV(productos);

console.log("Total", total);
console.log("ISV", isv);





