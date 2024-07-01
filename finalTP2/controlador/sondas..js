import Servicio from '../servicio/sondas.js'


class Controlador {
    constructor(persistencia) {
        this.servicio = new Servicio(persistencia)
    }

    listarSondas = async (req, res) => {
        try {
            const sondas = await this.servicio.obtenerSondas()
            res.json(sondas)
        } catch {
            res.status(500).json({ error: error.message })

        }

    }

    listarSondasPorId = async (req, res) => {
        try {
            const { id } = req.params; 
            const sonda = await this.servicio.obtenerSondaPorId(id);
            
            if (!sonda) {
                return res.status(404).json({ mensaje: 'Numero de sonda incorrecta' });
            }
            
            res.json(sonda);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };



    ingresarSonda = async (req, res) => {
        try {
            const { id, temperatura } = req.body;
            
            if(id && temperatura) {
                const sondaGuardada = await this.servicio.ingresarSonda(id,temperatura)
                res.json(sondaGuardada)

            }
            else {
                throw new Error("Falta un dato de la sonda")
            }

    
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    obtenerEstadisticas = async (req,res) => {
    const estadisticas = await this.servicio.obtenerEstadisticas();
    return estadisticas;

    }



}

export default Controlador
