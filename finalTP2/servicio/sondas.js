import ModelFactory from "../model/DAO/sondasFactory.js"
import { validar } from "./validaciones/sondas.js"

class Servicio {
    constructor(persistencia) {
        this.model = ModelFactory.get(persistencia)
    }


    ingresarSonda = async (id, temperatura) => {
        try {
            const validado = validar(id, temperatura);
            if (validado) {
                const sondaGuardada = await this.model.guardarSonda(id, temperatura);
                return sondaGuardada;
            } else {
                throw new Error('Datos de sonda no válidos');
            }
        } catch (error) {
            throw new Error(`Error al ingresar sonda: ${error.message}`);
        }
    };

    obtenerSondas = async () => {
        try {
            const sondasTotales = await this.model.obtenerSondas();
            return sondasTotales;
        } catch (error) {
            console.error('Error al obtener las sondas:', error);
            throw new Error('No se pudieron obtener las sondas');
        }
    };

    obtenerSondaPorId = async (id) => {
        try {
            const sondaEncontrada = await this.model.obtenerSondaPorId(id);
            return sondaEncontrada;
        } catch (error) {
            console.error('Error al obtener la sondas:', error);
            throw new Error('No se pudo encontra la sonda');
        }
    };

    obtenerEstadisticas = async () => {
        try {
            const sondasTotales = await this.model.obtenerSondas();
            
            let estadisticas = {
                cantidadTotalMuestras: 0,
                temperaturaSondas: {}
            };
    
            sondasTotales.forEach(sonda => {
                estadisticas.cantidadTotalMuestras++;
                
                if (!estadisticas.temperaturaSondas[sonda.id]) {
                    estadisticas.temperaturaSondas[sonda.id] = {
                        cantidad: 0,
                        promedio: 0,
                        totalTemperatura: 0
                    };
                }
                
                const sondaEstadis = estadisticas.temperaturaSondas[sonda.id];
                sondaEstadis.cantidad++;
                sondaEstadis.totalTemperatura += sonda.temperatura;
                sondaEstadis.promedio = sondaEstadis.totalTemperatura / sondaEstadis.cantidad;
            });
    
            Object.values(estadisticas.temperaturaSondas).forEach(estadis => {
                delete estadis.totalTemperatura;
            });
    
            return estadisticas;
            
        } catch (error) {
            console.error('Error al obtener estadisticas:', error);
            throw new Error('No se pudieron obtener las estadisticas');
        }
    };


        
    }


    






export default Servicio