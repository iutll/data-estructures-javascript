/*
    cola "queue" in javascript 
    by Libardo Rengifo
*/

class Cola{
    constructor(){
        this.elemento = 0;
        this.almacen = {};
    }
    almacenar(data = ""){
        this.almacen[this.elemento] = data;
        this.elemento++;
    }
    remover(){
        if(this.elemento == 0)
            return "La cola está vacia";
        delete this.almacen[0]; //eliminamos el primer elemento
        this.elemento--;
    }
    obtenerTamano(){
        return this.elemento;
    }
    imprimir(){
        let i = 1;
        for(let index in this.almacen){
            console.log("Elemento " + i + ": " + this.almacen[index]);
            i++;
        }
    }
}