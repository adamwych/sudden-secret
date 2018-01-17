var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const connectedClients = []

io.on('connection', function(client) {
    client.mayReceiveMessages = false
    connectedClients.push(client)

    client.on('message', function (message) {
        if (message.text.length > 400) {
            return
        }

        // Send the message to random clients.
        const targetClients = []

        connectedClients.map(c => {
            if (c.mayReceiveMessages && c !== client) {
                targetClients.push(c)
            }
        })

        targetClients.map(c => {
            c.emit('message', message)
        })

        client.mayReceiveMessages = true
    })

    client.on('disconnect', function () {
        connectedClients.splice(connectedClients.indexOf(client), 1)
    })
});

http.listen(3000, function() {
    console.log('Listening on *:3000');
});