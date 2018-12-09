import React from 'react';

import Pawn from './pawn';
import { piece, colour } from '../util/Models/piece';
import { position, getPosCoords } from '../util/Models/position';

type Props = {
  piece: piece;
  colour: colour;
  position: position;
  svgRef: SVGSVGElement;
};

type State = {
  mousePosition: [number, number];
  dragging: boolean;
};

export default class DragContainer extends React.Component<Props, State> {
  state: State = {
    mousePosition: [0, 0],
    dragging: false
  };

  onMouseMove = (e: MouseEvent) => {
    let CTM = this.props.svgRef.getScreenCTM();
    let pos: [number, number] = [
      (e.clientX - CTM!.e) / CTM!.a - 60,
      (e.clientY - CTM!.f) / CTM!.d - 60
    ];
    this.setState({ mousePosition: pos });
  };

  onDrag = () => {
    console.log('dragging');
    this.setState({ dragging: true });
    window.addEventListener('mousemove', e => this.onMouseMove(e));
  };

  onDrop = () => {
    console.log('dropped');
    this.setState({ dragging: false });
    window.removeEventListener('mousemove', () => {});
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
                : getPosCoords(this.props.position)
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
          />
        );
      case piece.Rook:
        return (
          <Pawn
            isDark={this.props.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : getPosCoords(this.props.position)
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
          />
        );
      case piece.Knight:
        return (
          <Pawn
            isDark={this.props.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : getPosCoords(this.props.position)
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
          />
        );
      case piece.Bishop:
        return (
          <Pawn
            isDark={this.props.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : getPosCoords(this.props.position)
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
          />
        );
      case piece.Queen:
        return (
          <Pawn
            isDark={this.props.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : getPosCoords(this.props.position)
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
          />
        );
      case piece.King:
        return (
          <Pawn
            isDark={this.props.colour === colour.Black}
            PosOffset={
              this.state.dragging
                ? this.state.mousePosition
                : getPosCoords(this.props.position)
            }
            onDrag={this.onDrag}
            onDrop={this.onDrop}
          />
        );
    }
  };

  render() {
    return this.getPiece();
  }
}
