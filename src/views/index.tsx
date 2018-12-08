import React, { Component } from 'react';
import { styled } from '../util/styledComponents';

import Canvas from '../components/canvas';
import Tile from '../components/tile';

const Flex = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  padding: 30px;
`;

class App extends Component {
  render() {
    return (
      <Flex>
        <Container>
          <Canvas>
            <g transform={'translate(700 0)'}>
              {Array(8)
                .fill(0)
                .map((row, rowIndex) => (
                  <g
                    transform={`translate(${rowIndex * -100} ${rowIndex * 57})`}
                    key={rowIndex}
                  >
                    {Array(8)
                      .fill(0)
                      .map((element, index) => (
                        <Tile
                          HueRotate={0}
                          Darkness={
                            index % 2 === 0
                              ? rowIndex % 2 === 0
                                ? 30
                                : 0
                              : rowIndex % 2 === 0
                              ? 0
                              : 30
                          }
                          PosOffset={[index * 100, index * 58]}
                          key={index}
                        />
                      ))}
                  </g>
                ))}
            </g>
          </Canvas>
        </Container>
      </Flex>
    );
  }
}

export default App;
