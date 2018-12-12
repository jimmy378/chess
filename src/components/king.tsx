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

export default class King extends React.Component<Props, State> {
  private CrossTopRef: SVGPathElement | null = null;
  private CrossSideRef: SVGPathElement | null = null;
  private CrossFrontRef: SVGPathElement | null = null;
  private CrossBaseRef: SVGEllipseElement | null = null;
  private NeckRef: SVGPathElement | null = null;
  private CircleFrontRef: SVGPathElement | null = null;
  private BaseRef: SVGPathElement | null = null;
  private BodyRef: SVGPathElement | null = null;
  private CircleBackRef: SVGPathElement | null = null;
  private BackRef: SVGPathElement | null = null;
  private OverlayRef: SVGPathElement | null = null;
  private BounceRef: SVGGElement | null = null;

  HighlightOn = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start')
      .to(
        this.CrossTopRef!,
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
        this.CrossSideRef!,
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
        this.CrossFrontRef!,
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
        this.CrossBaseRef!,
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
        this.NeckRef!,
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
        this.CircleFrontRef!,
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
        this.CircleBackRef!,
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
        this.CrossTopRef!,
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
        this.CrossSideRef!,
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
        this.CrossFrontRef!,
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
        this.CrossBaseRef!,
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
        this.NeckRef!,
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
        this.CircleFrontRef!,
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
        this.CircleBackRef!,
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

  CrossTop = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  CrossSide = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.three
      : Colours.whiteLight.three};
  `;
  CrossFront = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
  `;
  CrossBase = styled.ellipse`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  Neck = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.three
      : Colours.whiteLight.three};
  `;
  CircleFront = styled.path`
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
  CircleBack = styled.path`
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
          .PosOffset[1] - 72})`}
      >
        <g ref={ref => (this.BounceRef = ref)}>
          <g transform={'translate(12 28) scale(0.8)'}>
            <this.Back
              ref={ref => (this.BackRef = ref)}
              d="M26.458,216.99l67.148-.114,26.209-19.971s-11.189-24.008-59.932-23.9S.057,197.169.057,197.169Z"
            />
            <this.CircleBack
              ref={ref => (this.CircleBackRef = ref)}
              d="M96.646,201.93c2.123-2.019,3.307-4.246,3.307-6.588,0-9.129-17.884-16.53-39.946-16.53s-39.946,7.4-39.946,16.53c0,2.342,1.185,4.569,3.308,6.588H1.527a16.676,16.676,0,0,1-1.4-6.588c0-16.943,26.809-30.677,59.879-30.677s59.88,13.734,59.88,30.677a16.659,16.659,0,0,1-1.4,6.588Z"
            />
            <this.Body
              ref={ref => (this.BodyRef = ref)}
              d="M59.429,67.528a15.821,15.821,0,0,1,16.195,13.15l20.1,117.588a36.231,36.231,0,0,1-17.4,37.383h0a36.156,36.156,0,0,1-36.6-.041l-.1-.061A36.233,36.233,0,0,1,24.286,198.2L44.446,80.669A15.821,15.821,0,0,1,59.429,67.528Z"
            />
            <this.Base
              ref={ref => (this.BaseRef = ref)}
              d="M59.686,221.7c46.734-.1,60.129-26.626,60.129-26.626l.128,23.113C119.981,235.133,93.2,248.927,60.131,249S.222,235.4.185,218.455L.057,195.342S12.951,221.807,59.686,221.7Z"
            />
            <this.CircleFront
              ref={ref => (this.CircleFrontRef = ref)}
              d="M20.061,195.342c0,9.129,17.885,16.53,39.946,16.53s39.946-7.4,39.946-16.53c0-.089-.013-.176-.016-.264h19.937c0,.088.013.175.013.264,0,16.942-26.809,30.677-59.88,30.677S.128,212.284.128,195.342c0-.089.011-.176.013-.264H20.078C20.074,195.166,20.061,195.253,20.061,195.342Z"
            />
            <this.Neck
              ref={ref => (this.NeckRef = ref)}
              d="M96.271,60.6H23.734L42.468,92.035h.015c2.16,3.842,9.179,6.661,17.523,6.661s15.363-2.819,17.523-6.661h.013Z"
            />
            <this.CrossBase
              ref={ref => (this.CrossBaseRef = ref)}
              cx="60.006"
              cy="56.448"
              rx="37.201"
              ry="18.675"
            />
            <this.CrossFront
              ref={ref => (this.CrossFrontRef = ref)}
              d="M71.76,30.9,60.019,24.108V10.569L48.369,3.85V17.366l-11.743-6.8A23.576,23.576,0,0,0,48.418,30.993l0,0,.141,21.158A11.755,11.755,0,0,0,60.147,62.5l.075-24.7L71.76,44.457Z"
            />
            <this.CrossSide
              ref={ref => (this.CrossSideRef = ref)}
              d="M71.805,44.431l-.045.026V30.9l11.707-6.77h0A23.488,23.488,0,0,1,71.805,44.431ZM60.019,10.569V24.157l11.688-6.765V3.978ZM71.76,44.457,60.222,37.8l-.075,24.7c.027,0,.053,0,.08,0A11.761,11.761,0,0,0,71.914,52Z"
            />
            <this.CrossTop
              ref={ref => (this.CrossTopRef = ref)}
              d="M83.467,24.133,71.76,30.9l-6.52-3.774-5.178-3,11.645-6.741v-.055Zm-35.1-6.767V3.85L36.626,10.569Zm0-13.516h0l11.65,6.719L71.707,3.978l-.084-.048A23.433,23.433,0,0,0,48.37,3.85Z"
            />
            <this.Overlay
              d="M48.369,3.85h0L36.626,10.569h0A23.576,23.576,0,0,0,48.418,30.993l0,0,.052,7.7c-14.9,2.437-25.668,9.463-25.668,17.755a10.018,10.018,0,0,0,.935,4.155h-.007l.032.054a12.932,12.932,0,0,0,1.387,2.326L42.468,92.035h.015l.011.015-13.2,76.957C11.825,174.366.128,184.153.128,195.342c0,.051.007.1.007.151-.047-.089-.078-.151-.078-.151l.01,1.806-.01.021.01.008.118,21.278C.222,235.4,27.061,249.073,60.132,249s59.849-13.867,59.811-30.809l-.119-21.575c.034-.423.063-.847.063-1.274,0-.089-.012-.176-.013-.264h0c-.184-11.079-11.823-20.755-29.153-26.071l-13.161-77L94.831,63.021a12.924,12.924,0,0,0,1.44-2.418h0a10,10,0,0,0,.936-4.155c0-7.168-8.049-13.389-19.854-16.52a23.484,23.484,0,0,0,6.114-15.795l-11.76-6.8V3.978l-.084-.048a23.435,23.435,0,0,0-23.254-.08"
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
