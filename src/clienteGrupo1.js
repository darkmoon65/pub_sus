var faye = require('faye');


var client = new faye.Client('http://localhost:8000/');

client.connect();

client.subscribe('/messages', function(message) {
    console.log('Mensaje: ' + message.text);
});

client.publish('/messages', {
    text: 'Hola grupo 1'
});