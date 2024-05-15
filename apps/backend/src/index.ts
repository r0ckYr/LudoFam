import { GameBoard } from "@repo/common/game";
import express from 'express';
import WebSocket, { WebSocketServer } from 'ws';
// import { name } from '@repo/common/config';
// console.log(name);
// // error still there

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "hello"
    })
})

const httpServer = app.listen(3000);

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(socket) {
    socket.on('error', console.error);

    socket.on('message', (data, isBinary) => {
        wss.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });

    socket.send('Hello! Message from server!!');
});