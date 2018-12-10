import React from 'react';
import { styled } from '../util/styledComponents';
import { Colours } from '../util/theme';
import { TimelineMax, Power4 } from 'gsap';

const topPoints = [
  '0 57.948 100.137 0.292 200 58.106 100 115.738 0 57.948',
  '0 86.918 100.137 29.262 200 87.076 100 144.708 0 86.918'
];
const rightPoints = [
  '200 86.918 100 144.708 100 115.738 200 58.106 200 86.918',
  '200 86.918 100 144.708 100 144.708 200 86.918 200 86.918'
];
const leftPoints = [
  '0 86.918 100 144.708 100 115.738 0 57.948 0 86.918',
  '0 86.918 100 144.708 100 144.708 0 86.918 0 86.918'
];
const basePoints = [
  '100.137 0.292 0 57.948 0 86.918 100 144.708 200 86.918 200 58.106 100.137 0.292',
  '100.137 29.262 0 86.918 0 86.918 100 144.708 200 86.918 200 86.918 100.137 29.262'
];

type Props = {
  PosOffset: [number, number];
  isDark: boolean;
  active: boolean;
  id: number;
  onClick?: (id: number) => void;
};

type State = {};

export default class IconTest extends React.Component<Props, State> {
  private TopRef: SVGPolygonElement | null = null;
  private StrokeRef: SVGPolygonElement | null = null;
  private LeftRef: SVGPolygonElement | null = null;
  private RightRef: SVGPolygonElement | null = null;
  private BaseRef: SVGPolygonElement | null = null;
  private OverlayRef: SVGPolygonElement | null = null;
  private HoverRef: SVGPathElement | null = null;

  HighlightOn = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start')
      .to(
        this.LeftRef!,
        1,
        {
          css: {
            fill: this.props.isDark
              ? Colours.purpleDark.two
              : Colours.purpleLight.two
          },
          ease: Power4.easeOut
        },
        'start'
      )
      .to(
        this.RightRef!,
        1,
        {
          css: {
            fill: this.props.isDark
              ? Colours.purpleDark.three
              : Colours.purpleLight.three
          },
          ease: Power4.easeOut
        },
        'start'
      )
      .to(
        this.BaseRef!,
        1,
        {
          css: {
            fill: this.props.isDark
              ? Colours.purpleDark.one
              : Colours.purpleLight.one
          },
          ease: Power4.easeOut
        },
        'start'
      )
      .to(
        this.StrokeRef!,
        1,
        {
          css: {
            strokeWidth: '50px',
            transform: 'translate(100px, 60px) scale(0)'
          },
          ease: Power4.easeOut
        },
        'start'
      );
    return tl;
  };

  HighlightOff = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start')
      .to(this.LeftRef!, 1, {
        css: {
          fill: this.props.isDark
            ? Colours.blackLight.two
            : Colours.whiteLight.two
        },
        ease: Power4.easeOut
      })
      .to(
        this.BaseRef!,
        1,
        {
          css: {
            fill: this.props.isDark
              ? Colours.blackLight.one
              : Colours.whiteLight.one
          },
          ease: Power4.easeOut
        },
        'start'
      )
      .to(
        this.RightRef!,
        1,
        {
          css: {
            fill: this.props.isDark
              ? Colours.blackLight.three
              : Colours.whiteLight.three
          },
          ease: Power4.easeOut
        },
        'start'
      )
      .to(
        this.StrokeRef!,
        1,
        {
          css: {
            strokeWidth: '0px',
            transform: 'translate(0px, 0px) scale(1)'
          },
          ease: Power4.easeOut
        },
        'start'
      );
    return tl;
  };

  PushDown = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start')
      .to(this.LeftRef!, 1, {
        attr: {
          points: leftPoints[1]
        }
      })
      .to(
        this.BaseRef!,
        1,
        {
          attr: {
            points: basePoints[1]
          }
        },
        'start'
      )
      .to(
        this.RightRef!,
        1,
        {
          attr: {
            points: rightPoints[1]
          }
        },
        'start'
      )
      .to(
        this.StrokeRef!,
        1,
        {
          attr: {
            points: topPoints[1]
          }
        },
        'start'
      )
      .to(
        this.TopRef!,
        1,
        {
          attr: {
            points: topPoints[1]
          }
        },
        'start'
      )
      .to(
        this.Overlay!,
        1,
        {
          attr: {
            points: basePoints[1]
          }
        },
        'start'
      );
    return tl;
  };

  PushUp = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start')
      .to(this.LeftRef!, 1, {
        attr: {
          points: leftPoints[0]
        },
        ease: Power4.easeOut
      })
      .to(
        this.BaseRef!,
        1,
        {
          attr: {
            points: basePoints[0]
          },
          ease: Power4.easeOut
        },
        'start'
      )
      .to(
        this.RightRef!,
        1,
        {
          attr: {
            points: rightPoints[0]
          },
          ease: Power4.easeOut
        },
        'start'
      )
      .to(
        this.StrokeRef!,
        1,
        {
          attr: {
            points: topPoints[0]
          },
          ease: Power4.easeOut
        },
        'start'
      )
      .to(
        this.TopRef!,
        1,
        {
          attr: {
            points: topPoints[0]
          },
          ease: Power4.easeOut
        },
        'start'
      )
      .to(
        this.OverlayRef!,
        1,
        {
          attr: {
            points: basePoints[0]
          },
          ease: Power4.easeOut
        },
        'start'
      );
    return tl;
  };

  Base = styled.polygon`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  Left = styled.polygon`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
  `;
  Right = styled.polygon`
    fill: ${this.props.isDark
      ? Colours.blackLight.three
      : Colours.whiteLight.three};
  `;
  Top = styled.polygon`
    fill: ${this.props.isDark
      ? Colours.purpleDark.one
      : Colours.purpleLight.one};
  `;
  Overlay = styled.polygon`
    opacity: 0;
    z-index: 2;
  `;
  Hover = styled.path`
    opacity: 0;
    fill: red;
  `;
  Stroke = styled.polygon`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
    stroke: ${this.props.isDark
      ? Colours.purpleDark.five
      : Colours.purpleLight.five};
    stroke-width: 0px;
  `;

  click = () => {
    this.PushDown().timeScale(5);
    this.PushUp().delay(0.2);
  };

  makeActive = () => {
    this.HighlightOn().delay(0.2);
    this.click();
  };

  makeInactive = () => {
    this.HighlightOff().delay(0.2);
    this.click();
  };

  componentDidMount() {
    this.props.active ? this.makeActive() : null;
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.active !== this.props.active) {
      if (this.props.active) {
        this.makeActive();
      } else {
        this.makeInactive();
      }
    }
  }

  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.id);
    }
  };

  render() {
    return (
      <g
        transform={`translate(${this.props.PosOffset[0]} ${
          this.props.PosOffset[1]
        })`}
      >
        <this.Base points={basePoints[0]} ref={ref => (this.BaseRef = ref)} />
        <this.Left points={leftPoints[0]} ref={ref => (this.LeftRef = ref)} />
        <this.Right
          points={rightPoints[0]}
          ref={ref => (this.RightRef = ref)}
        />
        <this.Top points={topPoints[0]} ref={ref => (this.TopRef = ref)} />
        <this.Stroke
          points={topPoints[0]}
          ref={ref => (this.StrokeRef = ref)}
        />
        <this.Overlay
          points={topPoints[0]}
          ref={ref => (this.OverlayRef = ref)}
          onClick={this.onClick}
        />
      </g>
    );
  }
}
