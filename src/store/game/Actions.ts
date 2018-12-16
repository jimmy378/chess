import { PieceObject } from './../../util/model';
import { AppState } from './../ApplicationState';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { getPiecesFromBoard } from '../../util';

export const setPieces = createAction('@game/SET_PIECES', resolve => {
  return (pieces: PieceObject[]) => resolve(pieces);
});

export const setActiveTiles = createAction(
  '@game/SET_ACTIVE_TILES',
  resolve => {
    return (tiles: number[]) => resolve(tiles);
  }
);

export const setBoard = {
  async: createAsyncAction(
    '@video/START_SET_BOARD',
    '@video/BOARD_SET',
    '@video/BOARD_SET_FAILED'
  )<undefined, Uint8Array, Error>(),

  action(newBoard: Uint8Array, isSame: boolean, calculatePieces: boolean) {
    return async (dispatch: Dispatch, getState: () => AppState) => {
      try {
        dispatch(this.async.request());
        let pieces = getPiecesFromBoard(
          getState().Game.Board,
          newBoard,
          getState().Game.Pieces,
          calculatePieces,
          isSame
        );
        dispatch(setPieces(pieces));
        dispatch(this.async.success(newBoard));
      } catch (error) {
        dispatch(this.async.failure(error));
      }
    };
  }
};
