import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/ApplicationState';
import { ConnectedReduxThunkProps } from '../store';

import { getPieces } from '../util';
import DragContainer from './dragContainer';
import Chess from 'chess';
import { Actions } from '../store/game';
import { Message } from '../util/model';

type Props = {
  svgRef: SVGSVGElement;
} & AppState &
  ConnectedReduxThunkProps;

type State = {};

class Pieces extends React.Component<Props, State> {
  async componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.Game.Board !== this.props.Game.Board) {
      let whitesMove = String.fromCharCode(this.props.Game.Board[64]);
      if (whitesMove !== 'W' && !this.props.Game.AiOn) {
        this.props.dispatch(Actions.setMessage(Message.blackMove));
      } else {
        this.props.dispatch(Actions.setMessage(Message.whiteMove));
      }
      if (whitesMove !== 'W' && this.props.Game.AiOn) {
        this.props.dispatch(Actions.setMessage(Message.blackMoveAi));
        let AiMove = await Chess.findAIMove(
          this.props.Game.Board,
          this.props.Game.Difficulty,
          0.5
        );
        if (AiMove) {
          setTimeout(() => {
            let newBoard = Chess.applyMove(this.props.Game.Board, AiMove!);
            this.props.dispatch(
              Actions.setBoard.action(newBoard, false, false)
            );
          }, 1000);
        }
      }
    }
  }

  render() {
    return (
      <g>
        {this.props.Game.Pieces.map((piece, index) => (
          <DragContainer
            piece={piece}
            key={piece.id}
            svgRef={this.props.svgRef}
          />
        ))}
      </g>
    );
  }
}

const mapStateToProps = (state: AppState): AppState => state;

export default connect(mapStateToProps)(Pieces);
