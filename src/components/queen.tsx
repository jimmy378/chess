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

export default class Queen extends React.Component<Props, State> {
  private BallRef: SVGPathElement | null = null;
  private TopCircleFrontRef: SVGPathElement | null = null;
  private TopBaseRef: SVGPathElement | null = null;
  private PillowRef: SVGPathElement | null = null;
  private TopCircleBackRef: SVGPathElement | null = null;
  private TopBackRef: SVGPathElement | null = null;
  private NeckRef: SVGPathElement | null = null;
  private BottomCircleFrontRef: SVGPathElement | null = null;
  private BottomBaseRef: SVGEllipseElement | null = null;
  private BodyRef: SVGPathElement | null = null;
  private BottomCircleBackRef: SVGPathElement | null = null;
  private BackRef: SVGCircleElement | null = null;
  private OverlayRef: SVGPathElement | null = null;
  private BounceRef: SVGGElement | null = null;
  private PositionRef: SVGGElement | null = null;

  HighlightOn = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start')
      .to(
        this.BallRef!,
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
      )
      .to(
        this.TopCircleFrontRef!,
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
        this.TopBaseRef!,
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
        this.PillowRef!,
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
        this.TopCircleBackRef!,
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
        this.TopBackRef!,
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
        this.NeckRef!,
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
      )
      .to(
        this.BottomCircleFrontRef!,
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
        this.BottomBaseRef!,
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
        this.BottomCircleBackRef!,
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
        this.BallRef!,
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
      )
      .to(
        this.TopCircleFrontRef!,
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
        this.TopBaseRef!,
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
        this.PillowRef!,
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
        this.TopCircleBackRef!,
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
        this.TopBackRef!,
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
        this.NeckRef!,
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
      )
      .to(
        this.BottomCircleFrontRef!,
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
        this.BottomBaseRef!,
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
        this.BottomCircleBackRef!,
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

  animatePosition = () => {
    let tl = new TimelineMax();
    tl.add('start').to(this.PositionRef!, 1, {
      attr: {
        transform: `translate(${this.props.PosOffset[0]} ${this.props
          .PosOffset[1] - 55})`
      },
      ease: Power4.easeOut
    });
    return tl;
  };

  setDragPosition = () => {
    TweenMax.set(this.PositionRef!, {
      attr: {
        transform: `translate(${this.props.PosOffset[0]} ${this.props
          .PosOffset[1] - 55})`
      }
    });
  };

  setInitialPosition = () => {
    let tl = new TimelineMax();
    tl.add('start').to(this.PositionRef!, 1, {
      attr: {
        transform: `translate(${this.props.PosOffset[0]} ${this.props
          .PosOffset[1] - 55})`
      }
    });
    return tl;
  };

  Ball = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.four
      : Colours.whiteLight.four};
  `;
  TopCircleFront = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  TopBase = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
  `;
  Pillow = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
  `;
  TopCircleBack = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  TopBack = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.three
      : Colours.whiteLight.three};
  `;
  Neck = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.four
      : Colours.whiteLight.four};
  `;
  BottomCircleFront = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  BottomBase = styled.ellipse`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
  `;
  Body = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
  `;
  BottomCircleBack = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  Back = styled.circle`
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

  componentDidMount() {
    if (this.PositionRef) {
      this.setInitialPosition();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.active !== this.props.active) {
      if (this.props.active) {
        this.makeActive();
      } else {
        this.makeInactive();
      }
    }

    if (prevProps.PosOffset !== this.props.PosOffset) {
      if (this.props.dragging) {
        this.setDragPosition();
      } else {
        this.animatePosition();
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
      <g ref={ref => (this.PositionRef = ref)}>
        <g ref={ref => (this.BounceRef = ref)}>
          <g transform={'translate(12 28) scale(0.8)'}>
            <this.Ball
              ref={ref => (this.BallRef = ref)}
              d="M96.549,196.116l-73.163-.084L.391,176.133s11.151-23.9,59.726-23.8,59.62,24.058,59.62,24.058Z"
            />
            <this.TopCircleFront
              ref={ref => (this.TopCircleFrontRef = ref)}
              d="M21.4,178.616a7.694,7.694,0,0,1-1.212-4.039c0-9.089,17.823-16.457,39.809-16.457S99.8,165.488,99.8,174.577a7.694,7.694,0,0,1-1.212,4.039H119.13a16.088,16.088,0,0,0,.536-4.039c0-16.868-26.717-30.542-59.673-30.542S.319,157.709.319,174.577a16.088,16.088,0,0,0,.536,4.039Z"
            />
            <this.TopBase
              ref={ref => (this.TopBaseRef = ref)}
              d="M47.576,45.748l-24.228,130.3a37.2,37.2,0,0,0,19.594,39.9h0a37.194,37.194,0,0,0,33.979-.016l.206-.106A37.2,37.2,0,0,0,96.7,176.014L72.735,45.771C70.166,31.814,50.17,31.8,47.576,45.748Z"
            />
            <this.Pillow
              ref={ref => (this.PillowRef = ref)}
              d="M60.313,200.824c-46.573-.1-59.922-26.51-59.922-26.51L.263,197.326C.226,214.194,26.912,227.927,59.869,228s59.7-13.543,59.74-30.411l.128-23.012S106.887,200.926,60.313,200.824Z"
            />
            <this.TopCircleBack
              ref={ref => (this.TopCircleBackRef = ref)}
              d="M99.8,174.577c0,9.089-17.823,16.458-39.808,16.458s-39.808-7.369-39.808-16.458c0-.088.012-.175.016-.263H.332c0,.088-.013.175-.013.263,0,16.868,26.717,30.543,59.674,30.543s59.673-13.675,59.673-30.543c0-.088-.012-.175-.013-.263H99.785C99.788,174.4,99.8,174.489,99.8,174.577Z"
            />
            <this.TopBack
              ref={ref => (this.TopBackRef = ref)}
              d="M76.085,71.705l-.192.176a23.269,23.269,0,0,1-31.749-.176h0L28.113,49.246l31.9,1.748L91.9,49.208Z"
            />
            <this.Neck
              ref={ref => (this.NeckRef = ref)}
              d="M81.849,37.108,39.681,38.825,20.186,23.814S27.59,7.853,59.994,7.853,99.8,23.814,99.8,23.814Z"
            />
            <this.BottomCircleFront
              ref={ref => (this.BottomCircleFrontRef = ref)}
              d="M34.833,28.175a5.542,5.542,0,0,1-1.395-3.51c0-6.064,11.889-10.979,26.556-10.979S86.549,18.6,86.549,24.665a5.542,5.542,0,0,1-1.4,3.51H99.2a10.855,10.855,0,0,0,.6-3.51C99.8,13.412,81.979,4.29,59.994,4.29S20.186,13.412,20.186,24.665a10.882,10.882,0,0,0,.6,3.51Z"
            />
            <this.BottomBase
              ref={ref => (this.BottomBaseRef = ref)}
              cx="59.936"
              cy="30.93"
              rx="24.712"
              ry="20.667"
            />
            <this.Body
              ref={ref => (this.BodyRef = ref)}
              d="M59.994,45.039c-21.985,0-39.808-9.122-39.808-20.374V38.553c0,11.253,17.823,20.375,39.808,20.375S99.8,49.806,99.8,38.553V24.665C99.8,35.917,81.979,45.039,59.994,45.039Z"
            />
            <this.BottomCircleBack
              ref={ref => (this.BottomCircleBackRef = ref)}
              d="M59.994,35.643c-14.667,0-26.556-4.915-26.556-10.978H20.186c0,11.252,17.823,20.374,39.808,20.374S99.8,35.917,99.8,24.665H86.549C86.549,30.728,74.66,35.643,59.994,35.643Z"
            />
            <this.Back
              ref={ref => (this.BackRef = ref)}
              cx="60.008"
              cy="8.672"
              r="8.433"
            />
            <this.Overlay
              d="M119.737,176.4l-.01-.021.01-1.8-.076.147c0-.049,0-.1,0-.147,0-10.908-11.182-20.475-27.99-25.878L77.212,70.1,89.966,51.954c6.119-3.583,9.835-8.268,9.835-13.4V24.666h0c0-.275-.019-.548-.041-.821l.041-.03-.047-.093C98.905,14.192,85.269,6.374,67.421,4.65a8.434,8.434,0,0,0-14.824,0c-17.862,1.718-31.514,9.54-32.364,19.074l-.047.093.041.031c-.021.273-.041.545-.041.82V38.553c0,5.145,3.733,9.84,9.877,13.426L43.038,70.155l-14.6,78.5C11.559,154.051.319,163.64.319,174.577c0,.431.026.859.063,1.285L.263,197.326C.226,214.194,26.912,227.927,59.869,228s59.7-13.543,59.74-30.411l.118-21.184Z"
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
