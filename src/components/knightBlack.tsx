import React from 'react';
import { styled } from '../util/styledComponents';
import { Colours } from '../util/theme';
import { TweenMax, TimelineMax, Power4 } from 'gsap';

type Props = {
  PosOffset: [number, number];
  isDark: boolean;
  onDrag: () => void;
  onDrop: () => void;
  dragging: boolean;
  draggable: boolean;
  active: boolean;
};

type State = {
  dragging: boolean;
};

export default class KnightWhite extends React.Component<Props, State> {
  private HairTopRef: SVGPathElement | null = null;
  private FaceRef: SVGPathElement | null = null;
  private NoseRef: SVGPathElement | null = null;
  private HairSideRef: SVGPathElement | null = null;
  private FrontCircleRef: SVGPathElement | null = null;
  private BaseRef: SVGPathElement | null = null;
  private BodyRef: SVGPathElement | null = null;
  private BackCircleRef: SVGPathElement | null = null;
  private BackRef: SVGPathElement | null = null;
  private OverlayRef: SVGPathElement | null = null;
  private BounceRef: SVGGElement | null = null;

  HighlightOn = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start')
      .to(
        this.HairTopRef!,
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
        this.FaceRef!,
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
        this.NoseRef!,
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
        this.HairSideRef!,
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
        this.FrontCircleRef!,
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
        this.BaseRef!,
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
        this.BodyRef!,
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
        this.BackCircleRef!,
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
        this.BackRef!,
        1,
        {
          css: {
            fill: this.props.isDark
              ? Colours.purpleDark.four
              : Colours.purpleLight.four
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
      .to(
        this.HairTopRef!,
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
        this.FaceRef!,
        1,
        {
          css: {
            fill: this.props.isDark
              ? Colours.blackLight.two
              : Colours.whiteLight.two
          },
          ease: Power4.easeOut
        },
        'start'
      )
      .to(
        this.NoseRef!,
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
        this.HairSideRef!,
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
        this.FrontCircleRef!,
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
        this.BaseRef!,
        1,
        {
          css: {
            fill: this.props.isDark
              ? Colours.blackLight.two
              : Colours.whiteLight.two
          },
          ease: Power4.easeOut
        },
        'start'
      )
      .to(
        this.BodyRef!,
        1,
        {
          css: {
            fill: this.props.isDark
              ? Colours.blackLight.two
              : Colours.whiteLight.two
          },
          ease: Power4.easeOut
        },
        'start'
      )
      .to(
        this.BackCircleRef!,
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
        this.BackRef!,
        1,
        {
          css: {
            fill: this.props.isDark
              ? Colours.blackLight.four
              : Colours.whiteLight.four
          },
          ease: Power4.easeOut
        },
        'start'
      );
    return tl;
  };

  BounceDown = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start').to(this.BounceRef!, 1, {
      attr: {
        transform: 'translate(0 15)'
      },
      ease: Power4.easeOut
    });
    return tl;
  };

  BounceUp = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start').to(this.BounceRef!, 1, {
      attr: {
        transform: 'translate(0 0)'
      },
      ease: Power4.easeOut
    });
    return tl;
  };

  HairTop = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  Face = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
  `;
  Nose = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.three
      : Colours.whiteLight.three};
  `;
  HairSide = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.three
      : Colours.whiteLight.three};
  `;
  FrontCircle = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  Base = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
  `;
  Body = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
  `;
  BackCircle = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  Back = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.four
      : Colours.whiteLight.four};
  `;
  Overlay = styled.path`
    fill: transparent;
    stroke: ${this.props.isDark
      ? Colours.blackDark.three
      : Colours.whiteDark.four};
    stroke-width: 5px;
    cursor: move;
  `;

  makeActive = () => {
    this.BounceDown().timeScale(5);
    this.BounceUp().delay(0.2);
    this.HighlightOn().delay(0.2);
  };

  makeInactive = () => {
    this.BounceDown().timeScale(5);
    this.BounceUp().delay(0.2);
    this.HighlightOff().delay(0.2);
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.active !== this.props.active) {
      if (this.props.active) {
        this.makeActive();
      } else {
        this.makeInactive();
      }
    }
  }

  onMouseDown = (e: React.MouseEvent<SVGPathElement>) => {
    e.preventDefault();
    this.props.onDrag();
  };
  onMouseUp = (e: React.MouseEvent<SVGPathElement>) => {
    e.preventDefault();
    this.props.onDrop();
  };

  onTouchStart = (e: React.TouchEvent<SVGPathElement>) => {
    e.preventDefault();
    this.props.onDrag();
  };
  onTouchEnd = (e: React.TouchEvent<SVGPathElement>) => {
    e.preventDefault();
    this.props.onDrop();
  };

  render() {
    return (
      <g
        transform={`translate(${this.props.PosOffset[0]} ${this.props
          .PosOffset[1] - 32})`}
      >
        <g ref={ref => (this.BounceRef = ref)}>
          <g transform={'translate(15 35) scale(0.75)'}>
            <this.Back
              ref={ref => (this.BackRef = ref)}
              d="M7.057,164.009,113,163.775l-.09-19.9s-9.906-24.01-53.026-23.915-52.92,24.148-52.92,24.148Z"
            />
            <this.BackCircle
              ref={ref => (this.BackCircleRef = ref)}
              d="M97.968,147.491a8.294,8.294,0,0,0,2.023-5.191c0-9.129-17.9-16.53-39.984-16.53s-39.983,7.4-39.983,16.53a8.293,8.293,0,0,0,2.022,5.191H.943A16.343,16.343,0,0,1,.071,142.3c0-16.942,26.834-30.677,59.936-30.677s59.936,13.735,59.936,30.677a16.37,16.37,0,0,1-.871,5.191Z"
            />
            <this.Body
              ref={ref => (this.BodyRef = ref)}
              d="M60.527,28.625h0A37.966,37.966,0,0,1,97.973,66.587v84.85a37.966,37.966,0,0,1-38,37.966h0a37.967,37.967,0,0,1-37.936-37.966V66.587A37.966,37.966,0,0,1,60.527,28.625Z"
            />
            <this.Base
              ref={ref => (this.BaseRef = ref)}
              d="M59.685,168.663c46.779-.1,60.187-26.627,60.187-26.627L120,165.149c.037,16.943-26.767,30.736-59.868,30.809s-59.967-13.6-60-30.545L0,142.3S12.907,168.766,59.685,168.663Z"
            />
            <this.FrontCircle
              ref={ref => (this.FrontCircleRef = ref)}
              d="M20.024,142.3c0,9.13,17.9,16.53,39.983,16.53s39.984-7.4,39.984-16.53c0-.088-.013-.175-.016-.264H119.93c0,.089.013.176.013.264,0,16.943-26.834,30.678-59.936,30.678S.071,159.243.071,142.3c0-.088.012-.175.013-.264H20.04C20.036,142.125,20.024,142.212,20.024,142.3Z"
            />
            <this.Face
              ref={ref => (this.FaceRef = ref)}
              d="M44.2,32.159,21.989,19.493S21.345,47.81,0,57.777L22.21,70.442,36.762,66.5l11-21.527Z"
            />
            <this.Nose
              ref={ref => (this.NoseRef = ref)}
              d="M22.21,70.442,0,57.777V62.94a44.011,44.011,0,0,0,22.21,38.232h0Z"
            />
            <this.HairSide
              ref={ref => (this.HairSideRef = ref)}
              d="M88.7,6.605h0L44.892,31.761h0l-.693.4S42.635,61.5,22.21,70.442v30.73S30.544,96.3,44.522,88.536C53.1,57.777,74.677,28.02,88.7,41.755v-.012a37.815,37.815,0,0,1,9.27,24.844v28.45a44.347,44.347,0,0,0,12.43-30.78V62.6A83.107,83.107,0,0,0,88.7,6.605Z"
            />
            <this.HairTop
              ref={ref => (this.HairTopRef = ref)}
              d="M88.7,6.605h0a44.683,44.683,0,0,0-44.382.066L21.989,19.493,44.2,32.159Z"
            />
            <this.Overlay
              d="M119.881,143.662c.04-.451.062-.905.062-1.362,0-9.567-8.56-18.11-21.97-23.736V95.037a44.347,44.347,0,0,0,12.43-30.78V62.6a83.107,83.107,0,0,0-21.7-56h0a44.683,44.683,0,0,0-44.382.066L21.989,19.493S21.345,47.81,0,57.777V62.94a44.011,44.011,0,0,0,22.041,38.129v17.495C8.631,124.19.071,132.733.071,142.3c0,.05.006.1.007.15C.031,142.362,0,142.3,0,142.3l.128,23.113c.037,16.943,26.9,30.618,60,30.545S120.037,182.092,120,165.149Z"
              ref={ref => (this.OverlayRef = ref)}
              onMouseDown={this.onMouseDown}
              onMouseUp={this.onMouseUp}
              onTouchStart={this.onTouchStart}
              onTouchEnd={this.onTouchEnd}
              style={{ pointerEvents: this.props.draggable ? 'auto' : 'none' }}
            />
          </g>
        </g>
      </g>
    );
  }
}
