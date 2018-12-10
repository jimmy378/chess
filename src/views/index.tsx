import React, { Component } from 'react';
import { styled } from '../util/styledComponents';
import { Colours } from '../util/theme';
import { piece, colour, Coords } from '../util/Models/piece';
import { connect } from 'react-redux';
import { AppState } from '../store/ApplicationState';
import { Actions, ConnectedReduxThunkProps } from '../store';
import Chess from 'chess';

import Canvas from '../components/canvas';
import Board from '../components/board';
import Pieces from '../components/pieces';

const Flex = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${Colours.purpleDark.five};
`;

const Container = styled.div`
  width: 100%;
`;

type Props = {} & AppState & ConnectedReduxThunkProps;
type State = {
  activeTiles: number[];
};

class App extends Component<Props, State> {
  state: State = {
    activeTiles: []
  };

  componentWillMount() {
    this.props.dispatch(Actions.Game.setBoard(Chess.Board()));
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return nextProps.Game.Board !== this.props.Game.Board;
  }

  getPieces = () => {
    let pieces: {
      colour: colour;
      name: piece;
      position: [number, number];
      gameBoardPosition: number;
    }[] = [];
    for (let i = 0; i <= 63; i++) {
      let board = this.props.Game.Board[i];
      if (Chess.isWhite(board)) {
        switch (board) {
          case Chess.codes.pieces.white.pawn:
            pieces.push({
              colour: colour.White,
              name: piece.pawn,
              position: Coords[i] as [number, number],
              gameBoardPosition: i
            });
            break;
          case Chess.codes.pieces.white.rook:
            pieces.push({
              colour: colour.White,
              name: piece.pawn,
              position: Coords[i] as [number, number],
              gameBoardPosition: i
            });
            break;
          case Chess.codes.pieces.white.knight:
            pieces.push({
              colour: colour.White,
              name: piece.pawn,
              position: Coords[i] as [number, number],
              gameBoardPosition: i
            });
            break;
          case Chess.codes.pieces.white.bishop:
            pieces.push({
              colour: colour.White,
              name: piece.pawn,
              position: Coords[i] as [number, number],
              gameBoardPosition: i
            });
            break;
          case Chess.codes.pieces.white.queen:
            pieces.push({
              colour: colour.White,
              name: piece.pawn,
              position: Coords[i] as [number, number],
              gameBoardPosition: i
            });
            break;
          case Chess.codes.pieces.white.king:
            pieces.push({
              colour: colour.White,
              name: piece.pawn,
              position: Coords[i] as [number, number],
              gameBoardPosition: i
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
              gameBoardPosition: i
            });
            break;
          case Chess.codes.pieces.black.rook:
            pieces.push({
              colour: colour.Black,
              name: piece.pawn,
              position: Coords[i] as [number, number],
              gameBoardPosition: i
            });
            break;
          case Chess.codes.pieces.black.knight:
            pieces.push({
              colour: colour.Black,
              name: piece.pawn,
              position: Coords[i] as [number, number],
              gameBoardPosition: i
            });
            break;
          case Chess.codes.pieces.black.bishop:
            pieces.push({
              colour: colour.Black,
              name: piece.pawn,
              position: Coords[i] as [number, number],
              gameBoardPosition: i
            });
            break;
          case Chess.codes.pieces.black.queen:
            pieces.push({
              colour: colour.Black,
              name: piece.pawn,
              position: Coords[i] as [number, number],
              gameBoardPosition: i
            });
            break;
          case Chess.codes.pieces.black.king:
            pieces.push({
              colour: colour.Black,
              name: piece.pawn,
              position: Coords[i] as [number, number],
              gameBoardPosition: i
            });
            break;
          default:
            break;
        }
      }
    }
    console.log(pieces);
    return pieces;
  };

  changeTiles = (id: number) => {
    let index = this.props.Game.ActiveTiles.findIndex(x => x === id);
    if (index === -1) {
      let ActiveTiles = [...this.props.Game.ActiveTiles, id];
      this.props.dispatch(Actions.Game.setActiveTiles(ActiveTiles));
    } else {
      let newArray = this.props.Game.ActiveTiles.filter(x => x !== id);
      this.props.dispatch(Actions.Game.setActiveTiles(newArray));
    }
  };

  render() {
    return (
      <Flex>
        <Container>
          <Canvas
            render={canvasProps => (
              <g>
                <Board clickedTile={this.changeTiles} />
                <Pieces pieces={this.getPieces()} svgRef={canvasProps.ref} />
              </g>
            )}
          />
        </Container>
      </Flex>
    );
  }
}

const mapStateToProps = (state: AppState): AppState => state;

export default connect(mapStateToProps)(App);
