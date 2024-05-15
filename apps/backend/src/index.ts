import { GameBoard } from "@repo/common/game";
import express from 'express';
import WebSocket, { WebSocketServer } from 'ws';
import { GameManager } from "./GameManager";
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

const games = new GameManager();

wss.on('connection', function connection(socket) {
    games.handleMessages(socket);
    
    socket.on('disconnect', games.removeUser);

    socket.on('error', console.error);
});