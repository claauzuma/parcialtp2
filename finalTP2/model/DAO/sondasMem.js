class ModelMem {
    constructor() {
        this.sondas = [

        ]
    }

    guardarSonda = async (id,temperatura) => {
        let sonda = {id: id, temperatura: temperatura, fechaRecepcion:  new Date().toISOString() };
        this.sondas.push(sonda);
        return sonda
    }


    obtenerSondas = async () => {
     return this.sondas;   

    };

    obtenerSondaPorId = async (id) => {
    return this.sondas.find(sonda => sonda.id === parseInt(id));
    };


    

}

export default ModelMem