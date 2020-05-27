var socket = io();

// on: escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Cuando se pierde conexión con el servidor
socket.on('disconnect', function() {
    console.log('Conexion perdida con el servidor');
});

// emit: emitir mensajes
socket.emit(
    'enviarMensaje', {
        usuario: 'Alejandro',
        mensaje: 'Hola mundo',
    },
    function(resp) {
        console.log('respuesta server: ', resp);
    }
);

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});