import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

import Pawn from './pawn';
import Rook from './rook';
import KnightWhite from './knightWhite';
import KnightBlack from './knightBlack';
import Bishop from './bishop';
import Queen from './queen';
import King from './king';

import { piece, colour, PieceObject } from '../util/model';
import { getPosFromCoords } from '../util';
import { connect } from 'react-redux';
import { AppState } from '../store/ApplicationState';
import { Actions, ConnectedReduxThunkProps } from '../store';
import Chess from 'chess';

type Props = {
  piece: PieceObject;
  svgRef: SVGSVGElement;
} & AppState &
  ConnectedReduxThunkProps;

type State = {
  mousePosition: [number, number];
  truePosition: [number, number];
  piecesBeforeDrag: PieceObject[];
  dragging: boolean;
};

class DragContainer extends React.Component<Props, State> {
  state: State = {
    mousePosition: [0, 0],
    truePosition: [0, 0],
    dragging: false,
    piecesBeforeDrag: []
  };

  onMouseMove = (e: MouseEvent) => {
    if (!this.state.dragging) {
      this.setState({ dragging: true });
    }
    let CTM = this.props.svgRef.getScreenCTM();
    let pos: [number, number] = [
      (e.clientX - CTM!.e) / CTM!.a,
      (e.clientY - CTM!.f) / CTM!.d
    ];
    this.setState({ truePosition: pos });
    this.setState({ mousePosition: [pos[0] - 60, pos[1] - 120] });
  };

  onTouchMove = (e: TouchEvent) => {
    if (!this.state.dragging) {
      this.setState({ dragging: true });
    }
    let CTM = this.props.svgRef.getScreenCTM();
    let pos: [number, number] = [
      (e.touches[0].clientX - CTM!.e) / CTM!.a,
      (e.touches[0].clientY - CTM!.f) / CTM!.d
    ];
    this.setState({ truePosition: pos });
    this.setState({ mousePosition: [pos[0] - 60, pos[1] - 120] });
  };

  onDrag = () => {
    let possibleMoves = Chess.findMoves(
      this.props.Game.Board,
      this.props.piece.gameBoardPosition
    );
    this.setState({ piecesBeforeDrag: this.props.Game.Pieces });
    this.props.dispatch(Actions.Game.setActiveTiles([...possibleMoves]));
    this.props.dispatch(Actions.Game.movePieceToFront.action(this.props.piece));
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('touchmove', this.onTouchMove);
  };

  onDrop = () => {
    this.props.dispatch(Actions.Game.setActiveTiles([]));

    let highlightedTile = getPosFromCoords(this.state.truePosition);

    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('touchmove', this.onTouchMove);
    this.setState({ dragging: false });

    let possibleMoves = Chess.findMoves(
      this.props.Game.Board,
      this.props.piece.gameBoardPosition
    );

    if ([...possibleMoves].findIndex(x => x === highlightedTile) !== -1) {
      let newBoard = Chess.applyMove(this.props.Game.Board, [
        this.props.piece.gameBoardPosition,
        highlightedTile!
      ]);
      this.props.dispatch(Actions.Game.setBoard.action(newBoard, false, false));
    } else {
      this.props.dispatch(Actions.Game.setPieces(this.state.piecesBeforeDrag));
    }
  };

  getPiece = () => {
    switch (this.props.piece.name) {
      case piece.pawn:
        return (
          <Pawn
            isDark={this.props.piece.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.piece.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            draggable={this.props.piece.isTurn}
            active={
              this.props.Game.ActiveTiles.indexOf(
                this.props.piece.gameBoardPosition
              ) > -1
            }
          />
        );
      case piece.Rook:
        return (
          <Rook
            isDark={this.props.piece.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.piece.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            draggable={this.props.piece.isTurn}
            active={
              this.props.Game.ActiveTiles.indexOf(
                this.props.piece.gameBoardPosition
              ) > -1
            }
          />
        );
      case piece.Knight:
        return this.props.piece.colour === colour.White ? (
          <KnightWhite
            isDark={false}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.piece.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            draggable={this.props.piece.isTurn}
            active={
              this.props.Game.ActiveTiles.indexOf(
                this.props.piece.gameBoardPosition
              ) > -1
            }
          />
        ) : (
          <KnightBlack
            isDark={true}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.piece.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            draggable={this.props.piece.isTurn}
            active={
              this.props.Game.ActiveTiles.indexOf(
                this.props.piece.gameBoardPosition
              ) > -1
            }
          />
        );
      case piece.Bishop:
        return (
          <Bishop
            isDark={this.props.piece.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.piece.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            draggable={this.props.piece.isTurn}
            active={
              this.props.Game.ActiveTiles.indexOf(
                this.props.piece.gameBoardPosition
              ) > -1
            }
          />
        );
      case piece.Queen:
        return (
          <Queen
            isDark={this.props.piece.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.piece.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            draggable={this.props.piece.isTurn}
            active={
              this.props.Game.ActiveTiles.indexOf(
                this.props.piece.gameBoardPosition
              ) > -1
            }
          />
        );
      case piece.King:
        return (
          <King
            isDark={this.props.piece.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.piece.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            draggable={this.props.piece.isTurn}
            active={
              this.props.Game.ActiveTiles.indexOf(
                this.props.piece.gameBoardPosition
              ) > -1
            }
          />
        );
    }
  };

  render() {
    return this.getPiece();
  }
}

const mapStateToProps = (state: AppState): AppState => state;

export default connect(mapStateToProps)(DragContainer);
