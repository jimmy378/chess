import { ActionType, getType } from 'typesafe-actions';
import { State, InitialState } from './State';
import * as Actions from './Actions';
type Action = ActionType<typeof Actions>;

export const Reducer = (state: State = InitialState, action: Action): State => {
  switch (action.type) {
    case getType(Actions.setColour):
      return { ...state, Colour: action.payload };

    default:
      return state;
  }
};
