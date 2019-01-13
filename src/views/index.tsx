import React, { Component } from 'react';
import { styled } from '../util/styledComponents';
import { Colours } from '../util/theme';
import { piece, colour, Coords } from '../util/model';
import { connect } from 'react-redux';
import { AppState } from '../store/ApplicationState';
import { Actions, ConnectedReduxThunkProps } from '../store';
import Chess from 'chess';

import Canvas from '../components/canvas';
import Board from '../components/board';
import Pieces from '../components/pieces';

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${Colours.purpleDark.five};
`;

type Props = {} & AppState & ConnectedReduxThunkProps;
type State = {};

class App extends Component<Props, State> {
  componentWillMount() {
    this.props.dispatch(
      Actions.Game.setBoard.action(Chess.Board(), true, true)
    );
  }

  render() {
    return (
      <Container>
        <Canvas
          render={canvasProps => (
            <g>
              <Board />
              <Pieces svgRef={canvasProps.ref} />
            </g>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState): AppState => state;

export default connect(mapStateToProps)(App);
