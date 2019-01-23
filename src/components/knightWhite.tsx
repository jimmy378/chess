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
  pickedUp: boolean;
  active: boolean;
};

type State = {
  dragging: boolean;
};

export default class KnightWhite extends React.Component<Props, State> {
  private HairTopRef: SVGPathElement | null = null;
  private HairBackRef: SVGPathElement | null = null;
  private HairSideRef: SVGPathElement | null = null;
  private FrontCircleRef: SVGPathElement | null = null;
  private BaseRef: SVGPathElement | null = null;
  private BodyRef: SVGPathElement | null = null;
  private BackCircleRef: SVGPathElement | null = null;
  private BackRef: SVGPathElement | null = null;
  private OverlayRef: SVGPathElement | null = null;
  private BounceRef: SVGGElement | null = null;
  private PositionRef: SVGGElement | null = null;

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
        this.HairBackRef!,
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
      )
      .to(
        this.OverlayRef!,
        1,
        {
          css: {
            stroke: this.props.isDark
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
        this.HairBackRef!,
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
      )
      .to(
        this.OverlayRef!,
        1,
        {
          css: {
            stroke: this.props.isDark
              ? Colours.blackDark.three
              : Colours.whiteDark.four
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
          .PosOffset[1] - 32})`
      },
      ease: Power4.easeOut
    });
    return tl;
  };

  setDragPosition = () => {
    TweenMax.set(this.PositionRef!, {
      attr: {
        transform: `translate(${this.props.PosOffset[0]} ${this.props
          .PosOffset[1] - 32})`
      }
    });
  };

  setInitialPosition = () => {
    let tl = new TimelineMax();
    tl.add('start').to(this.PositionRef!, 1, {
      attr: {
        transform: `translate(${this.props.PosOffset[0]} ${this.props
          .PosOffset[1] - 32})`
      }
    });
    return tl;
  };

  HairTop = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  HairBack = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.four
      : Colours.whiteLight.four};
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

    if (prevProps.pickedUp !== this.props.pickedUp) {
      if (this.props.pickedUp) {
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
      <g ref={ref => (this.PositionRef = ref)}>
        <g ref={ref => (this.BounceRef = ref)}>
          <g transform={'translate(15 35) scale(0.75)'}>
            <this.Back
              ref={ref => (this.BackRef = ref)}
              d="M7.314,164.067l105.651-.233-.09-19.86S103,120.008,60,120.1s-52.772,24.1-52.772,24.1Z"
            />
            <this.BackCircle
              ref={ref => (this.BackCircleRef = ref)}
              d="M97.973,147.58A8.285,8.285,0,0,0,99.99,142.4c0-9.113-17.852-16.5-39.873-16.5s-39.872,7.387-39.872,16.5a8.284,8.284,0,0,0,2.016,5.181H1.217a16.337,16.337,0,0,1-.87-5.181c0-16.911,26.76-30.621,59.77-30.621s59.77,13.71,59.77,30.621a16.335,16.335,0,0,1-.869,5.181Z"
            />
            <this.Body
              ref={ref => (this.BodyRef = ref)}
              d="M60.636,23.294h0A37.879,37.879,0,0,1,97.978,61.186v84.7a37.879,37.879,0,0,1-37.891,37.9h0a37.879,37.879,0,0,1-37.83-37.9V61.186A37.877,37.877,0,0,1,60.636,23.294Z"
            />
            <this.Base
              ref={ref => (this.BaseRef = ref)}
              d="M59.8,168.713c46.649-.1,60.02-26.578,60.02-26.578l.127,23.071c.038,16.911-26.692,30.679-59.7,30.752S.441,182.381.4,165.469L.277,142.4S13.147,168.816,59.8,168.713Z"
            />
            <this.FrontCircle
              ref={ref => (this.FrontCircleRef = ref)}
              d="M20.245,142.4c0,9.112,17.851,16.5,39.872,16.5s39.873-7.388,39.873-16.5c0-.089-.013-.176-.016-.264h19.9c0,.088.013.175.013.264,0,16.911-26.76,30.621-59.77,30.621S.348,159.31.348,142.4c0-.089.011-.176.013-.264h19.9C20.257,142.223,20.245,142.31,20.245,142.4Z"
            />
            <this.HairSide
              ref={ref => (this.HairSideRef = ref)}
              d="M80.759,5.9,78.005,7.481l-6.964,4-.307.177L67.9,13.288l-.222.127L44.353,26.821,22.425,65.035l-.22,44.783s12.188-7.172,22.148-12.9C44.353,55.1,74.747,22.69,88.734,36.4h0l0-.011a37.75,37.75,0,0,1,9.247,24.8v6.362A37.4,37.4,0,0,0,117.665,34.6V24.909S94.077,30.642,80.759,5.9Z"
            />
            <this.HairBack
              ref={ref => (this.HairBackRef = ref)}
              d="M44.353,26.821,22.205,14.179h0A166.971,166.971,0,0,0,.06,96.461l0,.715,22.148,12.642,0-.715A166.979,166.979,0,0,1,44.353,26.821Z"
            />
            <this.HairTop
              ref={ref => (this.HairTopRef = ref)}
              d="M80.759,5.9h0A44.521,44.521,0,0,0,36.5,5.964l-14.3,8.215L44.353,26.821Z"
            />
            <this.Overlay
              d="M119.825,143.758c.039-.447.061-.9.062-1.349v-.01c0-.089-.012-.176-.013-.264h0c-.156-9.442-8.647-17.865-21.9-23.429V67.548A37.4,37.4,0,0,0,117.665,34.6V24.909S94.077,30.642,80.759,5.9h0A44.521,44.521,0,0,0,36.5,5.964l-14.3,8.215A166.971,166.971,0,0,0,.06,96.461l0,.715,22.148,12.642.052-.03v8.918C8.884,124.322.348,132.849.348,142.4c0,.05.005.1.006.149-.046-.088-.077-.149-.077-.149L.4,165.469c.037,16.912,26.827,30.562,59.837,30.489s59.74-13.841,59.7-30.752Z"
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
