import React from 'react';

import Tile from './tile';

type Props = {
  activeTiles: string[];
  clickedTile: (id: string) => void;
};

type State = {};

export default class TEMPLATE extends React.Component<Props, State> {
  render() {
    return (
      <g transform={'translate(800 230)'}>
        {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((row, rowIndex) => (
          <g
            transform={`translate(${rowIndex * -100} ${rowIndex * 58})`}
            key={rowIndex}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((column, index) => (
              <Tile
                isDark={
                  column % 2 === 0
                    ? row === 'b' || row === 'd' || row === 'f' || row === 'h'
                    : row === 'a' || row === 'c' || row === 'e' || row === 'g'
                }
                PosOffset={[index * 100, index * 58]}
                active={this.props.activeTiles.indexOf(`${row}${column}`) > -1}
                key={index}
                id={`${row}${column}`}
                onClick={this.props.clickedTile}
              />
            ))}
          </g>
        ))}
      </g>
    );
  }
}
