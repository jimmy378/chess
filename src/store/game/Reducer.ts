import { ActionType, getType } from 'typesafe-actions';
import { State, InitialState } from './State';
import * as Actions from './Actions';
type Action = ActionType<typeof Actions>;

export const Reducer = (state: State = InitialState, action: Action): State => {
  switch (action.type) {
    case getType(Actions.setBoard.async.success):
      return { ...state, Board: action.payload };

    case getType(Actions.setAiState):
      return { ...state, AiOn: action.payload };

    case getType(Actions.setDifficulty):
      return { ...state, Difficulty: action.payload };

    case getType(Actions.setMessage):
      return { ...state, Message: action.payload };

    case getType(Actions.movePieceToFront.async.success):
      return { ...state, Pieces: action.payload };

    case getType(Actions.setPieces):
      return { ...state, Pieces: action.payload };

    case getType(Actions.setActiveTiles):
      return { ...state, ActiveTiles: action.payload };

    default:
      return state;
  }
};
