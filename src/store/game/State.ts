import Chess from 'chess';

export interface State {
  readonly ActiveTiles: Array<number>;
  readonly Board: Uint8Array;
}

export const InitialState: State = {
  ActiveTiles: [],
  Board: Chess.Board()
};
