//Generics, nos permite especificar fácilitar una sola definición de una funcionalidad que despues se aplicaria
//a diferentes tipos concretos

//Le especificamos el T
function queTipoSoy<T>(argumento:T){
    return argumento
}

//En este caso podemos utilizar la función para tipo numero, tipo string
//Esto de tipo implicito
let soyString = queTipoSoy("Hola mundo");
let soyNumero = queTipoSoy(100);

//forma explicita
let soyExplicito = queTipoSoy<string>("Hola mundo");