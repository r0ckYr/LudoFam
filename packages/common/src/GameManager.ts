import { GameBoard } from "@repo/common/game";

const game = new GameBoard();

console.log(game.getBoard);

console.log(game.getPlayers);

console.log(game.makeMove(0, 0, 6));

console.log(game.getBoard);

console.log(game.getPlayers);