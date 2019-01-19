import { PieceObject, Message } from './../../util/model';
import { AppState } from './../ApplicationState';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { getPiecesFromBoard } from '../../util';

export const setPieces = createAction('@game/SET_PIECES', resolve => {
  return (pieces: PieceObject[]) => resolve(pieces);
});

export const setAiState = createAction('@game/SET_AI_STATE', resolve => {
  return (state: boolean) => resolve(state);
});

export const setDifficulty = createAction('@game/SET_DIFFICULTY', resolve => {
  return (value: number) => resolve(value);
});

export const setMessage = createAction('@game/SET_MESSAGE', resolve => {
  return (message: Message) => resolve(message);
});

export const setActiveTiles = createAction(
  '@game/SET_ACTIVE_TILES',
  resolve => {
    return (tiles: number[]) => resolve(tiles);
  }
);

export const setBoard = {
  async: createAsyncAction(
    '@game/START_SET_BOARD',
    '@game/BOARD_SET',
    '@game/BOARD_SET_FAILED'
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

export const movePieceToFront = {
  async: createAsyncAction(
    '@game/START_MOVE_PIECE_TO_FRONT',
    '@game/PIECE_MOVED_TO_FRONT',
    '@game/PIECE_MOVED_TO_FRONT_FAILED'
  )<undefined, PieceObject[], Error>(),

  action(piece: PieceObject) {
    return async (dispatch: Dispatch, getState: () => AppState) => {
      try {
        dispatch(this.async.request());
        let newPieces = [...getState().Game.Pieces];
        let indexToRemove = newPieces.findIndex(x => x.id === piece.id);
        if (indexToRemove !== -1) {
          newPieces.splice(indexToRemove, 1);
        }
        newPieces.push(piece);
        dispatch(this.async.success(newPieces));
      } catch (error) {
        dispatch(this.async.failure(error));
      }
    };
  }
};
