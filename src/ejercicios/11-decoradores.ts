//decoradores

//Sirven para cambiar clases para cuando son definidas


function classDecorator<T extends{new (...args:any[]):{}}>(
    constructor:T
){
    return class extends constructor{
        newProperty = "new property";
        hello = "override";
    }
}

//Observamos 
@classDecorator
class MiSuperClase{
    public miPropiedad:String = "ABC123";

    imprimir(){
        console.log("Hola mundo");
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase);