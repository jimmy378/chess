export * from "./styledComponents";
export * from "./theme";

import Chess from "chess";
import { CenterCoords, colour, piece, Coords, PieceObject } from "./model";
import pieces from "../components/Pieces";

export const getPosFromCoords = (
  coords: [number, number]
): number | undefined => {
  let index = CenterCoords.findIndex(
    (x) =>
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
  let pieces: PieceObject[] = [];

  let WhitePawnIterator: number = 0;
  let WhiteRookIterator: boolean = false;
  let WhiteKnightIterator: boolean = false;
  let WhiteBishopIterator: boolean = false;

  let BlackPawnIterator: number = 0;
  let BlackRookIterator: boolean = false;
  let BlackKnightIterator: boolean = false;
  let BlackBishopIterator: boolean = false;

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
            isTurn: whitesMove === "W",
            id: `${piece.pawn}-${colour.White}-${WhitePawnIterator}`,
          });
          WhitePawnIterator++;
          break;
        case Chess.codes.pieces.white.rook:
          pieces.push({
            colour: colour.White,
            name: piece.Rook,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove === "W",
            id: `${piece.Rook}-${colour.White}-${WhiteRookIterator ? 1 : 0}`,
          });
          WhiteRookIterator = true;
          break;
        case Chess.codes.pieces.white.knight:
          pieces.push({
            colour: colour.White,
            name: piece.Knight,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove === "W",
            id: `${piece.Knight}-${colour.White}-${
              WhiteKnightIterator ? 1 : 0
            }`,
          });
          WhiteKnightIterator = true;
          break;
        case Chess.codes.pieces.white.bishop:
          pieces.push({
            colour: colour.White,
            name: piece.Bishop,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove === "W",
            id: `${piece.Bishop}-${colour.White}-${
              WhiteBishopIterator ? 1 : 0
            }`,
          });
          WhiteBishopIterator = true;
          break;
        case Chess.codes.pieces.white.queen:
          pieces.push({
            colour: colour.White,
            name: piece.Queen,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove === "W",
            id: `${piece.Queen}-${colour.White}-0`,
          });
          break;
        case Chess.codes.pieces.white.king:
          pieces.push({
            colour: colour.White,
            name: piece.King,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove === "W",
            id: `${piece.King}-${colour.White}-0`,
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
            isTurn: whitesMove !== "W",
            id: `${piece.pawn}-${colour.Black}-${BlackPawnIterator}`,
          });
          BlackPawnIterator++;
          break;
        case Chess.codes.pieces.black.rook:
          pieces.push({
            colour: colour.Black,
            name: piece.Rook,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove !== "W",
            id: `${piece.Rook}-${colour.Black}-${BlackRookIterator ? 1 : 0}`,
          });
          BlackRookIterator = true;
          break;
        case Chess.codes.pieces.black.knight:
          pieces.push({
            colour: colour.Black,
            name: piece.Knight,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove !== "W",
            id: `${piece.Knight}-${colour.Black}-${
              BlackKnightIterator ? 1 : 0
            }`,
          });
          BlackKnightIterator = true;
          break;
        case Chess.codes.pieces.black.bishop:
          pieces.push({
            colour: colour.Black,
            name: piece.Bishop,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove !== "W",
            id: `${piece.Bishop}-${colour.Black}-${
              BlackBishopIterator ? 1 : 0
            }`,
          });
          BlackBishopIterator = true;
          break;
        case Chess.codes.pieces.black.queen:
          pieces.push({
            colour: colour.Black,
            name: piece.Queen,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove !== "W",
            id: `${piece.Queen}-${colour.Black}-0`,
          });
          break;
        case Chess.codes.pieces.black.king:
          pieces.push({
            colour: colour.Black,
            name: piece.King,
            position: Coords[i] as [number, number],
            gameBoardPosition: i,
            isTurn: whitesMove !== "W",
            id: `${piece.King}-${colour.Black}-0`,
          });
          break;
        default:
          break;
      }
    }
  }
  return pieces;
};

export const getPiecesFromBoard = (
  currentBoard: Uint8Array,
  newBoard: Uint8Array,
  currentPieces: PieceObject[],
  calculatePieces: boolean,
  isSame: boolean
): PieceObject[] => {
  let Pieces: PieceObject[] = [];
  if (!calculatePieces) {
    Pieces = currentPieces;
  } else {
    Pieces = getPieces(currentBoard);
  }
  let originalPosition = 0;
  let newPosition = 0;

  if (!isSame) {
    for (let i = 0; i <= 63; i++) {
      if (currentBoard[i] !== newBoard[i]) {
        if (newBoard[i] === Chess.codes.emptySquare) {
          originalPosition = i;
        } else {
          newPosition = i;
        }
      }
    }

    Pieces.filter((Piece) => {
      let newPiece: PieceObject = Piece;
      newPiece.isTurn = !Piece.isTurn;
      return newPiece;
    });

    let index = Pieces.findIndex(
      (x) => x.gameBoardPosition === originalPosition
    );
    if (index !== -1) {
      let newPiece: PieceObject = {
        ...Pieces[index],
        gameBoardPosition: newPosition,
        position: Coords[newPosition] as [number, number],
        isTurn: false,
      };
      let indexDelete = Pieces.findIndex(
        (x) => x.gameBoardPosition === newPosition
      );
      Pieces[index] = newPiece;
      if (indexDelete !== -1) {
        Pieces.splice(indexDelete, 1);
      }
    }
  }

  Pieces.sort((a, b) => (a.gameBoardPosition > b.gameBoardPosition ? 1 : -1));

  return Pieces;
};
