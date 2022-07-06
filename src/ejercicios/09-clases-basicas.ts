//

class PersonaNormal {
    constructor(
        nombre: string, direccion: string
        ) {}
}
  
  //clases basicas con constructor
class Heroe extends PersonaNormal{
    //podemos configurar el alcance y visibilidad de los mismos
    /*   public alterEgo: string;
    public edad: number;
    public nombreReal: number; */
  
    //constructor
    //Otra forma de ahorrar tiempo y espacio es tener el modificador de acceso en los parametros del constructor
    
    constructor(
      public alterEgo: string,
      public edad: number,
      public nombreReal: string
    ) {
      super( nombreReal, "New york, USA");
    }
  }
  
  const ironman = new Heroe("superman", 30, "klark");
  
  console.log(ironman);
  