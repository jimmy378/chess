import React from 'react';
import { styled } from '../util/styledComponents';
import Lottie from 'react-lottie';

const Container = styled.div`
  width: 200px;
  height: 200px;
`;

import tileOn from '../images/JSON/tile-on.json';
import tileOff from '../images/JSON/tile-off.json';
import tileHighlightOn from '../images/JSON/tile-highlight-on.json';
import tileHighlightOff from '../images/JSON/tile-highlight-off.json';
import tileBounce from '../images/JSON/tile-bounce.json';
import tileBlankState from '../images/JSON/tile-blank-static.json';
import tileColourStatic from '../images/JSON/tile-colour-static.json';

type Props = {};

type State = { isStopped: boolean; isPaused: boolean };

export default class Tile extends React.Component<Props, State> {
  state: State = {
    isStopped: true,
    isPaused: false
  };

  onClick = () => {
    this.setState({ isStopped: true });
    this.setState({ isStopped: false });
  };

  render() {
    return (
      <Container onClick={this.onClick}>
        <Lottie
          options={{
            loop: false,
            autoplay: false,
            animationData: tileOn,
            rendererSettings: {
              className: 'iconClass'
            }
          }}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          isClickToPauseDisabled={true}
        />
      </Container>
    );
  }
}
