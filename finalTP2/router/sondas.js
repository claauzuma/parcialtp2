import express from 'express'
import Controlador from '../controlador/sondas..js'


class Router {
    constructor(persistencia) {
        this.router = express.Router()
        this.controlador = new Controlador(persistencia)
    }

    start() {

        this.router.post('/', this.controlador.ingresarSonda)
        this.router.get('/', this.controlador.listarSondas)
        this.router.get('/:id', this.controlador.listarSondasPorId)
        this.router.get('/obtenerEstadisticas', this.controlador.obtenerEstadisticas)
    
 
        return this.router
    }
}

export default Router

