const Marcadores = require('./marcadores');
class Sockets {

    constructor( io ) {
        this.io = io;
        this.marcadores = new Marcadores();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            // console.log('Cliente Conectado!');

            // marcadores-activos  
            socket.emit('marcadores-activos', this.marcadores.activos);

            // marcador-nuevo
            socket.on('marcador-nuevo', (marcador) => {
                this.marcadores.agregarMarcador(marcador);
                socket.broadcast.emit('marcador-nuevo', marcador);
            });

            // marcador-actualizado  


        });
    }

}


module.exports = Sockets;