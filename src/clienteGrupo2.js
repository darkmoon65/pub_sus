var faye = require('faye');


var client = new faye.Client('http://localhost:8000/');

client.connect();

client.subscribe('/messages2', function(message) {
    console.log('Mensaje: ' + message.text);
});

client.publish('/messages2', {
    text: 'Hola grupo 2'
});