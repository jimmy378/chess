import React from 'react';
import { styled } from '../util/styledComponents';
import { Spring, config } from 'react-spring';

const Container = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: red;
`;

type Props = {
  position: { x: number; y: number };
  mousePosition: { x: number; y: number };
  mouseInWindow: boolean;
};

type State = {
  moving: boolean;
  position: { x: number; y: number };
};

export default class TEMPLATE extends React.Component<Props, State> {
  private ref: React.RefObject<HTMLDivElement> = React.createRef();

  state: State = {
    moving: false,
    position: { x: 0, y: 0 }
  };

  async componentWillReceiveProps(prev: Props) {
    console.log(this.props.mousePosition);
    if (this.state.moving) {
      const rect = this.ref.current!.getBoundingClientRect();
      const halfWidth = rect.width / 2;
      const halfHeight = rect.height / 2;
      const pos = {
        x: this.props.mousePosition.x - halfWidth,
        y: this.props.mousePosition.y - halfHeight
      };
      this.setState({ position: pos });
      if (!this.props.mouseInWindow) {
        this.onDragEnd();
      }
    }
  }

  onDragStart = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    await this.setState({
      moving: true
    });
  };

  onDragEnd = () => {
    this.setState({ moving: false, position: this.props.position });
  };

  render() {
    return (
      <Spring
        to={{
          positionX: this.state.position.x,
          positionY: this.state.position.y
        }}
        config={
          this.state.moving
            ? { tension: 500, friction: 26, precision: 0.1, mass: 1 }
            : config.slow
        }
      >
        {anim => (
          <Container
            ref={this.ref}
            onMouseDown={this.onDragStart}
            onMouseUp={this.onDragEnd}
            style={{
              transform: `translate(${anim.positionX}px, ${anim.positionY}px)`
            }}
          />
        )}
      </Spring>
    );
  }
}
