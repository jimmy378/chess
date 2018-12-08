import { combineReducers } from 'redux';

import * as Game from './game';

export const RootReducer = combineReducers({
  Game: Game.Reducer
});
