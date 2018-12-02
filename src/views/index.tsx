import React from 'react';
import { styled } from '../util';

import SpringTest from '../components/springTest';
import DropArea from '../components/dropArea';
import MousePos from '../components/mousePosition';
import Tile from '../components/tile';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export default class Dice extends React.Component {
  render() {
    return (
      <MousePos
        render={props => (
          <React.Fragment>
            <DropArea>
              <SpringTest
                mousePosition={props.mousePosition}
                mouseInWindow={props.mouseInWindow}
                position={{ x: 0, y: 0 }}
              />
            </DropArea>
            <Tile />
          </React.Fragment>
        )}
      />
    );
  }
}
