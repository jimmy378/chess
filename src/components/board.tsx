import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/ApplicationState';
import { Actions, ConnectedReduxThunkProps } from '../store';

import Tile from './tile';

type Props = {
  clickedTile: (id: number) => void;
} & AppState &
  ConnectedReduxThunkProps;

type State = {};

class Board extends React.Component<Props, State> {
  render() {
    return (
      <g transform={'translate(800 230)'}>
        {[0, 8, 16, 24, 32, 40, 48, 56].map((row, rowIndex) => (
          <g
            transform={`translate(${rowIndex * -100} ${rowIndex * 58})`}
            key={rowIndex}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map((column, index) => (
              <Tile
                isDark={
                  column % 2 === 0 ? rowIndex % 2 === 0 : rowIndex % 2 !== 0
                }
                PosOffset={[index * 100, index * 58]}
                active={this.props.Game.ActiveTiles.indexOf(row + column) > -1}
                key={index}
                id={row + column}
                onClick={this.props.clickedTile}
              />
            ))}
          </g>
        ))}
      </g>
    );
  }
}

const mapStateToProps = (state: AppState): AppState => state;

export default connect(mapStateToProps)(Board);
