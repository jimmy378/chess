import React from 'react';

import { piece, colour } from '../util/Models/piece';
import DragContainer from './dragContainer';

type Props = {
  pieces: {
    name: piece;
    colour: colour;
    position: [number, number];
    gameBoardPosition: number;
  }[];
  svgRef: SVGSVGElement;
};

type State = {};

export default class TEMPLATE extends React.Component<Props, State> {
  render() {
    return (
      <g>
        {this.props.pieces.map((piece, index) => (
          <DragContainer
            piece={piece.name}
            colour={piece.colour}
            position={piece.position}
            key={index}
            svgRef={this.props.svgRef}
            gameboardPosition={piece.gameBoardPosition}
          />
        ))}
      </g>
    );
  }
}
