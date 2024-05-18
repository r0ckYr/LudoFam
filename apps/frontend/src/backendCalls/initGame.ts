export async function initGame(socket: WebSocket, gameCode: string){
    try {
        socket.send(JSON.stringify({
            type: "init_game",
            gameCode: gameCode
        }))
    } catch (error) {
        console.log(error);
    }
}