//Funciones con objetos como argumentos

interface Personaje2 {
    nombre: string;
    pv: number;
    //Se puede asignar una función, especificando que es de tipo vacia
    mostrarHP: ()=>void;
  }
  
  const curar = (personaje: Personaje2, curarX: number): void => {
    personaje.pv += curarX;
  
    console.log(personaje);
  
  };
  
  
  const nuevoPersonaje:Personaje2={
      nombre: "Strider",
      pv:50,
      mostrarHP(){
          console.log("puntos de vida", this.pv);
      }
  }
  
  curar(nuevoPersonaje, 15);