import React from 'react';
import { styled } from '../util/styledComponents';
import posed from 'react-pose';

const topPoints = '0 57.948 100.137 0.292 200 58.106 100 115.738 0 57.948';
const rightPoints = '200 86.918 100 144.708 100 115.738 200 58.106 200 86.918';
const leftPoints = '0 86.918 100 144.708 100 144.708 0 86.918 0 86.918';
const basePoints =
  '100.137 0.292 0 57.948 0 86.918 100 144.708 200 86.918 200 58.106 100.137 0.292';

const Left = styled(
  posed.polygon({
    active: {
      points: leftPoints[0],
      transition: {
        points: {
          type: 'keyframes',
          values: [leftPoints[0], leftPoints[1], leftPoints[0]],
          times: [0, 0.25, 1]
        }
      },
      fill: (p: { hue: number; darkness: number }) =>
        `hsl(${p.hue + 240}, 0%, ${85 - p.darkness}%)`
    },
    inactive: {
      points: leftPoints[0],
      transition: {
        points: {
          type: 'keyframes',
          values: [leftPoints[0], leftPoints[1], leftPoints[0]],
          times: [0, 0.25, 1]
        }
      },
      fill: (p: { hue: number; darkness: number }) =>
        `hsl(${p.hue + 240}, 0%, ${85 - p.darkness}%)`
    },
    highlight: {
      fill: (p: { hue: number; darkness: number }) =>
        `hsl(${p.hue + 270}, 100%, ${40 - p.darkness / 5}%)`
    }
  })
)``;

const Right = styled(
  posed.polygon({
    active: {
      points: rightPoints[0],
      transition: {
        points: {
          type: 'keyframes',
          values: [rightPoints[0], rightPoints[1], rightPoints[0]],
          times: [0, 0.25, 1]
        }
      },
      fill: (p: { hue: number; darkness: number }) =>
        `hsl(${p.hue + 240}, 0%, ${80 - p.darkness}%)`
    },
    inactive: {
      points: rightPoints[0],
      transition: {
        points: {
          type: 'keyframes',
          values: [rightPoints[0], rightPoints[1], rightPoints[0]],
          times: [0, 0.25, 1]
        }
      },
      fill: (p: { hue: number; darkness: number }) =>
        `hsl(${p.hue + 240}, 0%, ${80 - p.darkness}%)`
    },
    highlight: {
      fill: (p: { hue: number; darkness: number }) =>
        `hsl(${p.hue + 270}, 100%, ${30 - p.darkness / 5}%)`
    }
  })
)``;

const Base = styled(
  posed.polygon({
    active: {
      points: basePoints[0],
      transition: {
        points: {
          type: 'keyframes',
          values: [basePoints[0], basePoints[1], basePoints[0]],
          times: [0, 0.25, 1]
        }
      },
      fill: (p: { hue: number; darkness: number }) =>
        `hsl(${p.hue + 270}, 100%, ${50 - p.darkness / 5}%)`
    },
    inactive: {
      points: basePoints[0],
      transition: {
        points: {
          type: 'keyframes',
          values: [basePoints[0], basePoints[1], basePoints[0]],
          times: [0, 0.25, 1]
        }
      },
      fill: (p: { hue: number; darkness: number }) =>
        `hsl(${p.hue + 270}, 0%, ${90 - p.darkness}%)`
    }
  })
)``;

const Top = styled(
  posed.polygon({
    active: {
      points: topPoints[0]
    },
    inactive: {
      points: topPoints[1]
    },
    highlightOn: {
      fill: (p: { hue: number; darkness: number }) =>
        `hsl(${p.hue + 270}, 100%, ${50 - p.darkness / 5}%)`
    },
    highlightOff: {
      fill: (p: { hue: number; darkness: number }) =>
        `hsl(${p.hue + 270}, 0%, ${90 - p.darkness}%)`
    }
  })
)``;

const Overlay = styled(
  posed.polygon({
    active: {
      points: topPoints[0],
      transition: {
        points: {
          type: 'keyframes',
          values: [topPoints[0], topPoints[1], topPoints[0]],
          times: [0, 0.25, 1]
        }
      }
    },
    inactive: {
      points: topPoints[0],
      transition: {
        points: {
          type: 'keyframes',
          values: [topPoints[0], topPoints[1], topPoints[0]],
          times: [0, 0.25, 1]
        }
      }
    }
  })
)`
  opacity: 0;
  cursor: pointer;
`;

type Props = {
  PosOffset: [number, number];
  HueRotate: number;
  Darkness: number;
};
type State = {
  active: boolean;
  hovering: boolean;
};

export default class IconTest extends React.Component<Props, State> {
  state: State = {
    active: true,
    hovering: false
  };

  onClick = () => {
    this.setState({ active: !this.state.active });
  };

  mouseEnter = () => {
    this.setState({ hovering: true });
  };

  mouseLeave = () => {
    this.setState({ hovering: false });
  };

  render() {
    return (
      <g
        transform={`translate(${this.props.PosOffset[0]} ${
          this.props.PosOffset[1]
        })`}
      >
        <Base
          pose={[this.state.active ? 'active' : 'inactive']}
          hue={this.props.HueRotate}
          darkness={this.props.Darkness}
        />
        <Left
          pose={[this.state.active ? 'active' : 'inactive']}
          hue={this.props.HueRotate}
          darkness={this.props.Darkness}
        />
        <Right
          pose={[this.state.active ? 'active' : 'inactive']}
          hue={this.props.HueRotate}
          darkness={this.props.Darkness}
        />
        <Top
          initialPose={['inactive', 'highlightOff']}
          pose={[
            this.state.active ? 'active' : 'inactive',
            this.state.hovering ? 'highlightOn' : 'highlightOff'
          ]}
          hue={this.props.HueRotate}
          darkness={this.props.Darkness}
        />
        <Overlay
          pose={[this.state.active ? 'active' : 'inactive']}
          onClick={this.onClick}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        />
      </g>
    );
  }
}
