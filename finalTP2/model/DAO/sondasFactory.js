
import ModelMem from "./sondasMem.js"


class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case 'MEM':
                console.log('**** Persistiendo en Memoria ****')
                return new ModelMem()

      ////Lo deje con el factory por si en el futuro se quiere agregar otro tipo de persistencia

        }
    }
}

export default ModelFactory