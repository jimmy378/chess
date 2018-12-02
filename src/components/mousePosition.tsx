import React from 'react';
import { styled } from '../util/styledComponents';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

type RenderProps = {
  mousePosition: { x: number; y: number };
  mouseInWindow: boolean;
};

type Props = {
  render(props: RenderProps): React.ReactNode;
};

type State = {
  mousePosition: { x: number; y: number };
  mouseInWindow: boolean;
};

export default class TEMPLATE extends React.Component<Props, State> {
  state: State = {
    mousePosition: { x: 0, y: 0 },
    mouseInWindow: true
  };

  onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ mousePosition: { x: e.clientX, y: e.clientY } });
  };

  onMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ mouseInWindow: true });
  };

  onMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ mouseInWindow: false });
  };

  render() {
    return (
      <Container
        onMouseMove={this.onMouseMove}
        onMouseEnter={this.onMouseOver}
        onMouseLeave={this.onMouseOut}
      >
        {this.props.render(this.state)}
      </Container>
    );
  }
}
