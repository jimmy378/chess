import { ActionType, getType } from 'typesafe-actions';
import { State, InitialState } from './State';
import * as Actions from './Actions';
type Action = ActionType<typeof Actions>;

export const Reducer = (state: State = InitialState, action: Action): State => {
  switch (action.type) {
    case getType(Actions.setBoard):
      return { ...state, Board: action.payload };

    case getType(Actions.setActiveTiles):
      return { ...state, ActiveTiles: action.payload };

    case getType(Actions.setHoveredTileId):
      return { ...state, HoveredTileID: action.payload };

    default:
      return state;
  }
};
