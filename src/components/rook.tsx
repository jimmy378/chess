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

export default class Rook extends React.Component<Props, State> {
  private BackCircleRef: SVGPathElement | null = null;
  private BackRef: SVGPathElement | null = null;
  private BallRef: SVGPathElement | null = null;
  private FrontCircleRef: SVGPathElement | null = null;
  private SidesRef: SVGPathElement | null = null;
  private BodyRef: SVGPathElement | null = null;
  private TopRef: SVGPathElement | null = null;
  private OverlayRef: SVGPathElement | null = null;
  private BounceRef: SVGGElement | null = null;

  HighlightOn = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start')
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
        this.SidesRef!,
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
        this.BallRef!,
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
        this.TopRef!,
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
      );
    return tl;
  };

  HighlightOff = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start')
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
        this.SidesRef!,
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
        this.BallRef!,
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
        this.TopRef!,
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

  BackCircle = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  Sides = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.three
      : Colours.whiteLight.three};
  `;
  FrontCircle = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  Back = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.four
      : Colours.whiteLight.four};
  `;
  Ball = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
  `;
  Top = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  Body = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
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
          .PosOffset[1] - 25})`}
      >
        <g ref={ref => (this.BounceRef = ref)}>
          <g transform={'translate(15 35) scale(0.75)'}>
            <this.BackCircle
              d="M20.139,47.072a6.907,6.907,0,0,1-.1-1.094c0-9.123,17.889-16.519,39.957-16.519s39.957,7.4,39.957,16.519a6.907,6.907,0,0,1-.1,1.094h19.983c.025-.364.054-.727.054-1.094,0-16.931-26.817-30.657-59.9-30.657S.1,29.047.1,45.978c0,.367.029.73.054,1.094Z"
              ref={ref => (this.BackCircleRef = ref)}
            />
            <this.Back
              d="M97.863,40.7c.024.029.054.056.077.085V26.26l-.3-4.117A80.742,80.742,0,0,0,87.284,18.7L85.1,18.628v14.5a73.845,73.845,0,0,0-16.65-3.3V15.337l-7.5-4.037-9.406,4.038v14.5a73.845,73.845,0,0,0-16.65,3.3v-14.5l-2.185.073a80.675,80.675,0,0,0-10.353,3.442l-.3,4.117V40.788c.032-.04.074-.078.107-.118a8.358,8.358,0,0,0-2.12,5.308C20.042,55.1,37.931,62.5,60,62.5s39.957-7.4,39.957-16.519A8.342,8.342,0,0,0,97.863,40.7Z"
              ref={ref => (this.BackRef = ref)}
            />
            <this.Ball
              d="M39.7,45.306h0a28.712,28.712,0,0,0,0,40.6h0a28.7,28.7,0,0,0,40.6,0h0a28.709,28.709,0,0,0,0-40.6h0a28.7,28.7,0,0,0-40.6,0Z"
              ref={ref => (this.BallRef = ref)}
            />
            <this.FrontCircle
              d="M99.929,45.525c.009.151.027.3.027.453C99.956,55.1,82.067,62.5,60,62.5S20.042,55.1,20.042,45.978c0-.152.018-.3.028-.453H.125c-.005.151-.023.3-.023.453C.1,62.909,26.919,79.637,60,79.637s59.9-16.728,59.9-33.659c0-.152-.019-.3-.023-.453Z"
              ref={ref => (this.FrontCircleRef = ref)}
            />
            <this.Sides
              d="M117.909,23.526V38.035L97.94,40.788V26.26Zm-115.823,0V38.035l19.969,2.753V26.26ZM44.476,1.854V16.383l7.07,13.482V15.338Zm31.043,0-7.07,13.483V29.865l7.07-13.489Zm-58,51.309V67.691L34.785,58.87V44.34ZM85.211,44.34V58.87l17.266,8.821V53.163Z"
              ref={ref => (this.SidesRef = ref)}
            />
            <this.Body
              d="M119.949,46.439a17.113,17.113,0,0,1-2,7.48V39.391c-2.739,5.285-8.157,10.012-15.476,13.772v14.53a84.856,84.856,0,0,1-26.913,7.98V61.145A114.558,114.558,0,0,1,60,62.2a114.794,114.794,0,0,1-15.57-1.051V75.672a84.849,84.849,0,0,1-26.912-7.981V53.163C10.2,49.4,4.781,44.676,2.042,39.391V53.919a17.115,17.115,0,0,1-2-7.491L.033,46.4.046,154.211C.009,171.142,26.8,184.927,59.875,185s59.926-13.594,59.964-30.525c0,0,.128-84.717.128-84.742V46.4Z"
              ref={ref => (this.BodyRef = ref)}
            />
            <this.Top
              d="M51.546,15.338,44.476,1.854a115.9,115.9,0,0,1,31.043,0l-7.07,13.483C65.724,15.1,62.9,14.964,60,14.964S54.272,15.1,51.546,15.338ZM2.086,23.526,22.055,26.26c2.449-3.03,6.956-5.668,12.841-7.632L17.607,9.793C10.282,13.539,4.852,18.253,2.086,23.526ZM97.94,26.26l19.969-2.734c-2.766-5.273-8.2-9.987-15.52-13.733L85.1,18.628C90.985,20.592,95.491,23.23,97.94,26.26ZM21.99,36.66,2.042,39.391C4.781,44.677,10.2,49.4,17.518,53.163L34.785,44.34C28.9,42.361,24.407,39.706,21.99,36.66ZM60,48.041c-2.918,0-5.76-.132-8.5-.378L44.43,61.145A114.794,114.794,0,0,0,60,62.2a114.558,114.558,0,0,0,15.565-1.051L68.5,47.664C65.757,47.909,62.917,48.041,60,48.041Zm38-11.381c-2.416,3.046-6.909,5.7-12.794,7.68l17.266,8.823c7.319-3.76,12.737-8.486,15.476-13.772Z"
              ref={ref => (this.TopRef = ref)}
            />
            <this.Overlay
              d="M119.949,46.439c-.063,2.446-.053,2.082-.053-.461a17.03,17.03,0,0,0-2.038-7.936l.051-.007V23.526c-2.766-5.273-8.2-9.987-15.52-13.733l-16.637,8.5a101.356,101.356,0,0,0-10.233-1.928V1.854a115.9,115.9,0,0,0-31.043,0V16.367A100.834,100.834,0,0,0,34.244,18.3l-16.637-8.5c-7.325,3.746-12.755,8.46-15.521,13.733V38.035l.054.008A17.1,17.1,0,0,0,.125,45.525h0c0,.151-.023.3-.023.453l-.056.45L.033,46.4.046,154.211C.009,171.142,26.8,184.927,59.875,185s59.926-13.594,59.964-30.525c0,0,.128-84.717.128-84.742V46.4Z"
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
