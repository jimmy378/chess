import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/ApplicationState';
import { Actions, ConnectedReduxThunkProps } from '../store';
import { styled } from '../util/styledComponents';
import { piece, colour } from '../util/model';
import * as Theme from '../util/theme';
import SillouettePiece from './SillouettePieces';

type Props = {
  colour: colour;
} & AppState &
  ConnectedReduxThunkProps;

type State = {};

class TakenPieces extends React.Component<Props, State> {
  isTaken = (Piece: {
    piece: piece;
    colour: colour;
    number: number;
  }): string => {
    let pieces = [...this.props.Game.Pieces].filter(
      piece => piece.name === Piece.piece && piece.colour === Piece.colour
    );

    let reversePawnNumber = (): number => {
      switch (Piece.number) {
        case 1:
          return 8;
        case 2:
          return 7;
        case 3:
          return 6;
        case 4:
          return 5;
        case 5:
          return 4;
        case 6:
          return 3;
        case 7:
          return 2;
        case 8:
          return 1;
        default:
          return 1;
      }
    };

    switch (Piece.piece) {
      case piece.pawn:
        if (pieces.length - reversePawnNumber() < 0) {
          return Piece.colour === colour.White
            ? Theme.Colours.whiteLight.one
            : Theme.Colours.blackLight.one;
        } else {
          return Theme.Colours.purpleLight.four;
        }
      case piece.Rook:
        if (pieces.length >= 2) {
          return Theme.Colours.purpleLight.four;
        } else if (pieces.length === 1) {
          return Piece.number === 1
            ? Piece.colour === colour.White
              ? Theme.Colours.whiteLight.one
              : Theme.Colours.blackLight.one
            : Theme.Colours.purpleLight.four;
        } else {
          return Piece.colour === colour.White
            ? Theme.Colours.whiteLight.one
            : Theme.Colours.blackLight.one;
        }
      case piece.Knight:
        if (pieces.length >= 2) {
          return Theme.Colours.purpleLight.four;
        } else if (pieces.length === 1) {
          return Piece.number === 1
            ? Piece.colour === colour.White
              ? Theme.Colours.whiteLight.one
              : Theme.Colours.blackLight.one
            : Theme.Colours.purpleLight.four;
        } else {
          return Piece.colour === colour.White
            ? Theme.Colours.whiteLight.one
            : Theme.Colours.blackLight.one;
        }
      case piece.Bishop:
        if (pieces.length >= 2) {
          return Theme.Colours.purpleLight.four;
        } else if (pieces.length === 1) {
          return Piece.number === 1
            ? Piece.colour === colour.White
              ? Theme.Colours.whiteLight.one
              : Theme.Colours.blackLight.one
            : Theme.Colours.purpleLight.four;
        } else {
          return Piece.colour === colour.White
            ? Theme.Colours.whiteLight.one
            : Theme.Colours.blackLight.one;
        }
      case piece.Queen:
        return pieces.length <= 0
          ? Piece.colour === colour.White
            ? Theme.Colours.whiteLight.one
            : Theme.Colours.blackLight.one
          : Theme.Colours.purpleLight.four;
      case piece.King:
        return pieces.length <= 0
          ? Piece.colour === colour.White
            ? Theme.Colours.whiteLight.one
            : Theme.Colours.blackLight.one
          : Theme.Colours.purpleLight.four;
    }
  };

  render() {
    return (
      <g transform={`translate(40 0)`}>
        {[
          { piece: piece.Rook, num: 1 },
          { piece: piece.Knight, num: 1 },
          { piece: piece.Bishop, num: 1 },
          { piece: piece.Queen, num: 1 },
          { piece: piece.King, num: 1 },
          { piece: piece.Bishop, num: 2 },
          { piece: piece.Knight, num: 2 },
          { piece: piece.Rook, num: 2 }
        ].map((value, index) => (
          <g
            key={`${value.piece}${value.num}${this.props.colour}`}
            transform={`translate(${(index + 1) * 50 +
              (this.props.colour === colour.White
                ? 0
                : 1220)} 1090) scale(0.35)`}
          >
            <SillouettePiece
              Piece={{
                piece: value.piece,
                colour: this.props.colour
              }}
              Colour={this.isTaken({
                piece: value.piece,
                colour: this.props.colour,
                number: value.num
              })}
            />
          </g>
        ))}
        {[1, 2, 3, 4, 5, 6, 7, 8].map(value => (
          <g
            key={`${value}${this.props.colour}`}
            transform={`translate(${value * 50 +
              (this.props.colour === colour.White
                ? 0
                : 1220)} 1000) scale(0.35)`}
          >
            <SillouettePiece
              Piece={{
                piece: piece.pawn,
                colour: this.props.colour
              }}
              Colour={this.isTaken({
                piece: piece.pawn,
                colour: this.props.colour,
                number: value
              })}
            />
          </g>
        ))}
      </g>
    );
  }
}

const mapStateToProps = (state: AppState): AppState => state;

export default connect(mapStateToProps)(TakenPieces);
