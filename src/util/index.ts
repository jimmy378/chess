export * from './styledComponents';
export * from './theme';

import Chess from 'chess';

export function toBtlr(board: Chess.Board): Uint8Array {
  const res = new Uint8Array(64);

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      res[8 * j + (7 - i)] = board[8 * i + j];
    }
  }

  return res;
}
