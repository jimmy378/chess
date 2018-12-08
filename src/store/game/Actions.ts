import { createAction } from 'typesafe-actions';

export const setColour = createAction('@game/SET_COLOUR', resolve => {
  return (colour: string) => resolve(colour);
});
