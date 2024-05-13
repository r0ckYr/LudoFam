import { Result, Move } from '@repo/common/config';

export class GameBoard {
    private players: number[][];
    private entry: number[];
    private exitPoints: number[];
    private startPoints: number[];
    private board: string[][];

    constructor() {
        this.players = [
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1],
            [-1, -1, -1, -1]
        ];
        this.board = [];
        for (let i = 0; i < 52; i++) {
            this.board.push([]);
        }
        this.entry = new Array<number>(6).fill(0);
        this.exitPoints = [50, 11, 24, 37];
        this.startPoints = [0, 13, 26, 39];
    }
    
    public getBoard(): string[][] {
        return this.board;
    }

    public getPlayers(): number[][] {
        return this.players;
    }

    public makeMove(this: any, player: number, piece: number, diceValue: number): Result {
        if (diceValue > 6) {
            return { success: false, Moves: [{ player: 0, piece: 0, entry: false, nextPos: 0 }] };
        }
      
        if (piece > 3 || player > 3 || piece < 0 || player < 0) {
            return { success: false, Moves: [{ player: 0, piece: 0, entry: false, nextPos: 0 }] };
        }
      
        if (!this.players || !this.startPoints || !this.exitPoints) {
            // Check if necessary properties are defined
            return { success: false, Moves: [{ player: 0, piece: 0, entry: false, nextPos: 0 }] };
        }
      
        // Condition when player's selected piece is in home and diceValue is 6
        if (this.players[player][piece] === -1 && diceValue===6) {
            this.players[player][piece] = this.startPoints[player];
            this.board[this.startPoints[player]].push(`${player}, ${piece}`);
            return { success: true, Moves: [{ player: player, piece: piece, entry: false, nextPos: this.startPoints[player] || 0 }]};
        }
      
        // Condition when player's piece is not in home
        if (this.players[player][piece] !== -1) {
            let nextPos = (this.players[player][piece] || 0) + diceValue;
            this.board[this.players[player][piece]].filter((s: string) => {s!=`${player}, ${piece}`});
            
            // Condition if the player's selected piece can enter the entry
            if (this.exitPoints[player] && this.exitPoints[player] < nextPos) {
                nextPos = nextPos - (this.exitPoints[player] || 0);
                return { success: true, Moves: [{ player: player, piece: piece, entry: true, nextPos: nextPos }]};
            }

            // cutting logic
            let toCut: string[] = [];
            let Moves: Move[] = [];

            // save all those diff palyer pieces
            this.board[nextPos].forEach((s: string) => {
                if(s.split(',')[0] !== `${player}`) {
                    toCut.push(s);
                }
            });

            // remove all those diff player pieces
            this.board[nextPos].filter((s: string) => {
                s.split(",")[0]==player.toString()
            });

            toCut.forEach((s: string) => {
                let playerToCut = Number(s.split(",")[0]);
                let pieceToCut = Number(s.split(",")[1]);
                Moves.push({player: playerToCut, piece: pieceToCut, entry: false, nextPos: -1});
                this.players[playerToCut][pieceToCut] = -1;
            })

            this.board[nextPos].push(`${player}, ${piece}`);
            this.players[player][piece] = nextPos;

            Moves.push({player: player, piece: piece, entry: false, nextPos: nextPos});
            return { success: true, Moves: Moves};
        }
        return { success: false, Moves: [{ player: 0, piece: 0, entry: false, nextPos: 0 }] };
      }
      
}
