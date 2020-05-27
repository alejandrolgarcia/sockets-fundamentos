const { io } = require('../server');

// Conexión con el cliente
io.on('connection', (client) => {
    console.log('Usuario conectado');

    // emitir mensaje para que cliente lo escuche
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación',
    });

    // Cuando el cliente se desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!',
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!',
        //     });
        // }

    });
});