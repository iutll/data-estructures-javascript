/*
    pila "stack" in javascript 
    by Libardo Rengifo
*/

class Pila{
    constructor(){
        this.elementos = 0;
        this.almacen  = {};
    }
    almacenar(data = ""){
        this.almacen[this.elementos] = data;
        this.elementos++; //aumentamos
    }
    remover(){
        if(this.elementos == 0)
            return "La pila está vacia";
        delete this.almacen[this.elementos-1];//como this.elementos tiene una unidad mas aumentada le restamos una
                                            //porque va a acceder hacia una propiedad que no existe
        this.elementos--;//disminuimos la cantidad de elementos almacenados
    }
    obtenerTamano(){
        return "Tamaño de la pila: " + this.elementos;
    }
    imprimir(){
        let i = 1;
        for(let index in this.almacen){
            console.log("Elemento " + i + ": " + this.almacen[index]);
            i++;
        }
    }
}