import React from 'react';
import ReactDOM from 'react-dom';
import Pawn from './pawn';
import { piece, colour, getPosFromCoords } from '../util/Models/piece';
import { connect } from 'react-redux';
import { AppState } from '../store/ApplicationState';
import { Actions, ConnectedReduxThunkProps } from '../store';
import Chess from 'chess';

type Props = {
  piece: piece;
  colour: colour;
  position: [number, number];
  svgRef: SVGSVGElement;
  gameboardPosition: number;
} & AppState &
  ConnectedReduxThunkProps;

type State = {
  mousePosition: [number, number];
  dragging: boolean;
};

class DragContainer extends React.Component<Props, State> {
  ref: React.RefObject<Pawn> = React.createRef();
  parent: ParentNode & Node | null = null;
  sibling: Node | null = null;

  state: State = {
    mousePosition: [0, 0],
    dragging: false
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
    this.setState({ mousePosition: [pos[0] - 60, pos[1] - 120] });
    // TODO: fix performance
    let highlightedTile = getPosFromCoords(pos);
    if (highlightedTile !== this.props.Game.HoveredTileID) {
      this.props.dispatch(Actions.Game.setHoveredTileId(highlightedTile));
    }
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
    this.setState({ mousePosition: [pos[0] - 60, pos[1] - 120] });
    // TODO: fix performance
    let highlightedTile = getPosFromCoords(pos);
    if (highlightedTile !== this.props.Game.HoveredTileID) {
      this.props.dispatch(Actions.Game.setHoveredTileId(highlightedTile));
    }
  };

  onDrag = () => {
    let domNode = ReactDOM.findDOMNode(this.ref.current!)!;
    this.sibling = domNode.nextSibling!;
    this.parent = domNode.parentNode!;
    domNode.remove();
    this.parent.appendChild(domNode);
    let possibleMoves = Chess.findMoves(
      this.props.Game.Board,
      this.props.gameboardPosition
    );
    this.props.dispatch(Actions.Game.setActiveTiles([...possibleMoves]));
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('touchmove', this.onTouchMove);
  };

  onDrop = () => {
    let domNode = ReactDOM.findDOMNode(this.ref.current!)!;
    this.parent!.insertBefore(domNode, this.sibling);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('touchmove', this.onTouchMove);
    this.setState({ dragging: false });

    let possibleMoves = Chess.findMoves(
      this.props.Game.Board,
      this.props.gameboardPosition
    );

    if (
      [...possibleMoves].findIndex(x => x === this.props.Game.HoveredTileID) !==
      -1
    ) {
      let newBoard = Chess.applyMove(this.props.Game.Board, [
        this.props.gameboardPosition,
        this.props.Game.HoveredTileID!
      ]);
      this.props.dispatch(Actions.Game.setBoard(newBoard));
    }

    this.props.dispatch(Actions.Game.setActiveTiles([]));
  };

  getPiece = () => {
    switch (this.props.piece) {
      case piece.pawn:
        return (
          <Pawn
            isDark={this.props.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            ref={this.ref}
          />
        );
      case piece.Rook:
        return (
          <Pawn
            isDark={this.props.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            ref={this.ref}
          />
        );
      case piece.Knight:
        return (
          <Pawn
            isDark={this.props.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            ref={this.ref}
          />
        );
      case piece.Bishop:
        return (
          <Pawn
            isDark={this.props.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            ref={this.ref}
          />
        );
      case piece.Queen:
        return (
          <Pawn
            isDark={this.props.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            ref={this.ref}
          />
        );
      case piece.King:
        return (
          <Pawn
            isDark={this.props.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : this.props.position
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
            dragging={this.state.dragging}
            ref={this.ref}
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
