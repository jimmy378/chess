import React, { Component } from 'react';
import { styled } from '../util/styledComponents';
import { Colours } from '../util/theme';
import { piece, colour } from '../util/Models/piece';
import { position } from '../util/Models/position';

import MousePosition from '../components/mousePosition';

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

type Props = {};
type State = {
  activeTiles: string[];
};

class App extends Component<Props, State> {
  state: State = {
    activeTiles: []
  };

  changeTiles = (id: string) => {
    let index = this.state.activeTiles.findIndex(x => x === id);
    if (index === -1) {
      this.setState(prevState => ({
        activeTiles: [...prevState.activeTiles, id]
      }));
    } else {
      let newArray = this.state.activeTiles.filter(x => x !== id);
      this.setState({ activeTiles: newArray });
    }
  };

  render() {
    return (
      <Flex>
        <Container>
          <Canvas
            render={canvasProps => (
              <g>
                <Board
                  activeTiles={this.state.activeTiles}
                  clickedTile={this.changeTiles}
                />
                <Pieces
                  pieces={[
                    {
                      colour: colour.White,
                      name: piece.pawn,
                      position: position.e5
                    }
                  ]}
                  mousePosition={{ x: 0, y: 0 }}
                  svgRef={canvasProps.ref}
                />
              </g>
            )}
          />
        </Container>
      </Flex>
    );
  }
}

export default App;
