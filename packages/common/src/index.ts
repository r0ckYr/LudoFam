export const name = "test@123";
export type Player = string;

export type Result = {
    executed: boolean;
    player: number;
    piece: number;
    entry: boolean;
    nextPos: number | undefined;
  };