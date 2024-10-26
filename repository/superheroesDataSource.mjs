export default class SuperheroesDataSource{
    //Metodo abstracto par aobtener todos los superheroes
    obtenerTodos(){
        throw new Error(`Este metodo debe ser implementado por la subclase`);
    }
}