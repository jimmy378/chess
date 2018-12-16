import { piece, colour, PieceObject } from './../../util/model';
import Chess from 'chess';

export interface State {
  readonly ActiveTiles: Array<number>;
  readonly Board: Uint8Array;
  readonly Pieces: PieceObject[];
}

export const InitialState: State = {
  ActiveTiles: [],
  Board: Chess.Board(),
  Pieces: []
};
