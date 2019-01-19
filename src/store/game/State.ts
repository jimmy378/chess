import { piece, colour, PieceObject } from './../../util/model';
import Chess from 'chess';

export interface State {
  readonly ActiveTiles: Array<number>;
  readonly Board: Uint8Array;
  readonly Pieces: PieceObject[];
  readonly AiOn: boolean;
  readonly Difficulty: number;
  readonly Message: string;
}

export const InitialState: State = {
  ActiveTiles: [],
  Board: Chess.Board(),
  Pieces: [],
  AiOn: true,
  Difficulty: 1,
  Message: 'White move'
};
