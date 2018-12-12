export * from './styledComponents';
export * from './theme';

import Chess from 'chess';
import { CenterCoords, colour, piece, Coords } from './model';

export const getPosFromCoords = (
  coords: [number, number]
): number | undefined => {
  let index = CenterCoords.findIndex(
    x =>
      x[0] < coords[0] + 50 &&
      x[0] > coords[0] - 50 &&
      x[1] < coords[1] + 50 &&
      x[1] > coords[1] - 50
  );
  if (index !== -1) {
    return index;
  } else {
    return undefined;
  }
};

export const getPieces = (gameBoard: Uint8Array) => {
  let pieces: {
    colour: colour;
    name: piece;
    position: [number, number];
    gameBoardPosition: number;
    isTurn: boolean;
  }[] = [];
  for (let i = 0; i <= 63; i++) {
    let board = gameBoard[i];
    let whitesMove = String.fromCharCode(gameBoard[64]);
    if (Chess.isWhite(board)) {
      switch (board) {
        case Chess.codes.pieces.white.pawn:
          pieces.push({
            colour: colour.White,
            name: piece.pawn,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove === 'W'
          });
          break;
        case Chess.codes.pieces.white.rook:
          pieces.push({
            colour: colour.White,
            name: piece.Rook,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove === 'W'
          });
          break;
        case Chess.codes.pieces.white.knight:
          pieces.push({
            colour: colour.White,
            name: piece.Knight,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove === 'W'
          });
          break;
        case Chess.codes.pieces.white.bishop:
          pieces.push({
            colour: colour.White,
            name: piece.Bishop,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove === 'W'
          });
          break;
        case Chess.codes.pieces.white.queen:
          pieces.push({
            colour: colour.White,
            name: piece.Queen,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove === 'W'
          });
          break;
        case Chess.codes.pieces.white.king:
          pieces.push({
            colour: colour.White,
            name: piece.King,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove === 'W'
          });
          break;
        default:
          break;
      }
    } else {
      switch (board) {
        case Chess.codes.pieces.black.pawn:
          pieces.push({
            colour: colour.Black,
            name: piece.pawn,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove !== 'W'
          });
          break;
        case Chess.codes.pieces.black.rook:
          pieces.push({
            colour: colour.Black,
            name: piece.Rook,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove !== 'W'
          });
          break;
        case Chess.codes.pieces.black.knight:
          pieces.push({
            colour: colour.Black,
            name: piece.Knight,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove !== 'W'
          });
          break;
        case Chess.codes.pieces.black.bishop:
          pieces.push({
            colour: colour.Black,
            name: piece.Bishop,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove !== 'W'
          });
          break;
        case Chess.codes.pieces.black.queen:
          pieces.push({
            colour: colour.Black,
            name: piece.Queen,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove !== 'W'
          });
          break;
        case Chess.codes.pieces.black.king:
          pieces.push({
            colour: colour.Black,
            name: piece.King,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove !== 'W'
          });
          break;
        default:
          break;
      }
    }
  }
  console.log(Chess.Board.toString(gameBoard));
  return pieces;
};
