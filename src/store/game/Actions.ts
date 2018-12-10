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

export const setHoveredTileId = createAction(
  '@game/SET_HOVERED_TILE_ID',
  resolve => {
    return (id: number | undefined) => resolve(id);
  }
);
