import * as game from './game';

export type AppState = {
  Game: game.State;
};

export const InitialState = () => {
  return {
    Game: game.InitialState
  };
};
