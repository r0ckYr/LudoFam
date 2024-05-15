import { WebSocket } from "ws";
import { GameBoard } from "@repo/common/game"; 

interface GameCollection {
    [key: string]: WebSocket[];
}

export class GameManager {
    private games: GameBoard[];
    private gamesPlayers: GameCollection = {};
    // private pendingGames: string[][];
    // private 

    handleMessages(socket: WebSocket) {
        socket.on("message", (data) => {
            const message = JSON.parse(data.toString());
            if(message.type === INIT_GAME) {
                this.gamesPlayers[gameCode]?.push(socket);
                if(this.gamesPlayers[gameCode]?.length === 4) {
                    
                }
            }
            if(message.type === MOVE) {

            }
        })
    }
    
    removeUser() {

    }

    handleMessage() {

    }
}