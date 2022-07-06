//Tarea sobre objetos e interfaces

interface SuperHeroe{
    nombre: string;
    edad: number;
    //No es comun ver estos objetos anidados dentro de interfaces
    /* direccion:{
        calle:string,
        pais:string,
        ciudad:string
    }; */
    direccion: Direccion
    mostrarDireccion:()=>string;
}

//Para mas comidad creamos una interface para direccion
interface Direccion{
    
        calle:string;
        pais:string;
        ciudad:string;
}

const superHeroe:SuperHeroe = {
    nombre:  "Spiderman",
    edad:30,
    direccion:{
        calle:"Main St",
        pais:"USA", 
        ciudad: "NY",
    }, 
    mostrarDireccion(){
        return this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);