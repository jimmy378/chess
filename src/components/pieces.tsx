import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/ApplicationState';
import { Actions, ConnectedReduxThunkProps } from '../store';

import { getPieces } from '../util';
import DragContainer from './dragContainer';

type Props = {
  svgRef: SVGSVGElement;
} & AppState &
  ConnectedReduxThunkProps;

type State = {};

class Pieces extends React.Component<Props, State> {
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return nextProps.Game.Board !== this.props.Game.Board;
  }

  render() {
    return (
      <g>
        {getPieces(this.props.Game.Board).map((piece, index) => (
          <DragContainer
            piece={piece.name}
            colour={piece.colour}
            position={piece.position}
            key={index}
            svgRef={this.props.svgRef}
            gameboardPosition={piece.gameBoardPosition}
            isTurn={piece.isTurn}
          />
        ))}
      </g>
    );
  }
}

const mapStateToProps = (state: AppState): AppState => state;

export default connect(mapStateToProps)(Pieces);
