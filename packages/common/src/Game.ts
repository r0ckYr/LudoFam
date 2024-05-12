import { Result } from '@repo/common/config';

export class GameBoard {
    private players: number[][];
    private entry: number[];
    private exitPoints: number[];
    private startPoints: number[];
    private board: number[];

    constructor() {
        this.players = [
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1]
        ];
        this.board = new Array<number>(52).fill(0);
        this.entry = new Array<number>(6).fill(0);
        this.exitPoints = [50, 37, 24, 11];
        this.startPoints = [0, 13, 26, 39];
    }
    
    makeMove(player: number, piece: number, diceValue: number): Result {
        if (diceValue !== 6) {
            return { executed: false, player: 0, piece: 0, entry: false, nextPos: 0 };
        }

        if(piece>3 || player>3 || piece<0 || piece<0) {
            return { executed: false, player, piece, entry: false, nextPos: 0 };
        }

        // Condition when player's selected piece is in home
        if (this.players[player][piece] === -1) {
            return { executed: true, player: player, piece: piece, entry: false, nextPos: this.startPoints[player] };
        }

        // Condition when player's piece is not in home
        if(this.players[player][piece] != -1) {
            let nextPos = this.players[player][piece] + diceValue;
            if (this.exitPoints[player]>nextPos) {
                nextPos = nextPos - this.exitPoints[player];
                return { executed: true, player: player, piece: piece, entry: true, nextPos: nextPos }
            }
            return { executed: true, player: player, piece: piece, entry: false, nextPos: nextPos };
        }

        // Add more conditions and logic as needed
        
        
        // return { executed: true, player, piece, nextPos: 0 };
    }
}
