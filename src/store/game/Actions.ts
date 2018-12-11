import { createAction } from 'typesafe-actions';

export const setBoard = createAction('@game/SET_BOARD', resolve => {
  return (board: Uint8Array) => resolve(board);
});

export const setActiveTiles = createAction(
  '@game/SET_ACTIVE_TILES',
  resolve => {
    return (tiles: number[]) => resolve(tiles);
  }
);
