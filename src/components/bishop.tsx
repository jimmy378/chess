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

export default class Bishop extends React.Component<Props, State> {
  private HeadRef: SVGPathElement | null = null;
  private IndentRef: SVGPolygonElement | null = null;
  private TopCircleFrontRef: SVGPathElement | null = null;
  private TopBaseRef: SVGPathElement | null = null;
  private BottomCircleFrontRef: SVGPathElement | null = null;
  private BottomBaseRef: SVGPathElement | null = null;
  private BodyRef: SVGPathElement | null = null;
  private TopCircleBackRef: SVGPathElement | null = null;
  private BackRef: SVGPathElement | null = null;
  private BottomCircleBackRef: SVGPathElement | null = null;
  private OverlayRef: SVGPathElement | null = null;
  private BounceRef: SVGGElement | null = null;

  HighlightOn = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start')
      .to(
        this.HeadRef!,
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
        this.IndentRef!,
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
              ? Colours.purpleDark.three
              : Colours.purpleLight.three
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
      );
    return tl;
  };

  HighlightOff = (): TimelineMax => {
    let tl = new TimelineMax();
    tl.add('start')
      .to(
        this.HeadRef!,
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
        this.IndentRef!,
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
              ? Colours.blackLight.three
              : Colours.whiteLight.three
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

  Head = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
  `;
  Indent = styled.polygon`
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
  BottomCircleFront = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  BottomBase = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
  `;
  Body = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.three
      : Colours.whiteLight.three};
  `;
  TopCircleBack = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
  `;
  Back = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.four
      : Colours.whiteLight.four};
  `;
  BottomCircleBack = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.one
      : Colours.whiteLight.one};
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
          .PosOffset[1] - 47})`}
      >
        <g ref={ref => (this.BounceRef = ref)}>
          <g transform={'translate(15 35) scale(0.75)'}>
            <this.BottomCircleBack
              ref={ref => (this.BottomCircleBackRef = ref)}
              d="M21.727,167.15a8.078,8.078,0,0,1-1.718-4.808c0-9.129,17.9-16.53,39.984-16.53s39.983,7.4,39.983,16.53a7.125,7.125,0,0,1-.3,2.046,9.07,9.07,0,0,1-1.424,2.762h20.944a16.283,16.283,0,0,0,.736-4.808c0-16.943-26.835-30.677-59.936-30.677S.057,145.4.057,162.342A16.3,16.3,0,0,0,.8,167.15Z"
            />
            <this.Back
              ref={ref => (this.BackRef = ref)}
              d="M101.593,160.934l-83.231-.184.067-13.815s7.777-16.669,41.652-16.594,41.579,16.778,41.579,16.778Z"
            />
            <this.TopCircleBack
              ref={ref => (this.TopCircleBackRef = ref)}
              d="M32.79,148.148a5.169,5.169,0,0,1-.557-2.3c0-6.339,12.429-11.477,27.762-11.477s27.762,5.138,27.762,11.477a5.169,5.169,0,0,1-.557,2.3h14.166a11.2,11.2,0,0,0,.245-2.3c0-11.764-18.632-21.3-41.616-21.3s-41.616,9.536-41.616,21.3a11.127,11.127,0,0,0,.245,2.3Z"
            />
            <this.Body
              ref={ref => (this.BodyRef = ref)}
              d="M42.661,70.627l-8.624,84.709a26.1,26.1,0,0,0,26.034,28.74h0a26.1,26.1,0,0,0,25.89-28.744L77.326,70.625A17.422,17.422,0,0,0,59.994,54.97h0A17.422,17.422,0,0,0,42.661,70.627Z"
            />
            <this.BottomBase
              ref={ref => (this.BottomBaseRef = ref)}
              d="M60.315,188.7C13.536,188.6.128,162.078.128,162.078L0,185.191C-.037,202.133,26.767,215.927,59.868,216s59.967-13.6,60-30.545L120,162.342S107.093,188.807,60.315,188.7Z"
            />
            <this.BottomCircleFront
              ref={ref => (this.BottomCircleFrontRef = ref)}
              d="M99.976,162.342c0,9.129-17.9,16.53-39.983,16.53s-39.984-7.4-39.984-16.53c0-.089.013-.176.016-.264H.07c0,.088-.013.175-.013.264,0,16.942,26.834,30.677,59.936,30.677s59.936-13.735,59.936-30.677c0-.089-.012-.176-.013-.264H99.96C99.964,162.166,99.976,162.253,99.976,162.342Z"
            />
            <this.TopBase
              ref={ref => (this.TopBaseRef = ref)}
              d="M60.218,164.154c-32.48-.071-41.789-18.487-41.789-18.487l-.089,16.048c-.026,11.764,18.585,21.341,41.569,21.392s41.636-9.445,41.662-21.209l.089-16.048S92.7,164.226,60.218,164.154Z"
            />
            <this.TopCircleFront
              ref={ref => (this.TopCircleFrontRef = ref)}
              d="M87.757,145.85c0,6.339-12.429,11.477-27.762,11.477s-27.762-5.138-27.762-11.477c0-.061.009-.122.011-.183H18.388c0,.061-.009.122-.009.183,0,11.764,18.632,21.3,41.616,21.3s41.616-9.536,41.616-21.3c0-.061-.008-.122-.009-.183H87.746C87.748,145.728,87.757,145.789,87.757,145.85Z"
            />
            <this.Indent
              ref={ref => (this.IndentRef = ref)}
              points="85.634 43.719 67.598 33.342 45.813 49.867 60.579 58.206 85.634 43.719"
            />
            <this.Head
              ref={ref => (this.HeadRef = ref)}
              d="M60.579,58.206l18.9-27.726L65.137,4.5a5.483,5.483,0,0,0-9.711-.013L39.756,32.714a67.763,67.763,0,0,0-8.444,33.862V66.6A30.6,30.6,0,0,0,45.648,92.324a27.563,27.563,0,0,0,28.478.261l.432-.253A30.587,30.587,0,0,0,89.333,65.87h0a68.164,68.164,0,0,0-3.7-22.151Z"
            />
            <this.Overlay
              d="M119.923,162.49c0-.05.006-.1.006-.148,0-9.164-7.861-17.384-20.308-23.005-2.887-4.6-8.746-8.528-16.43-11.173l-4-39.221A30.966,30.966,0,0,0,89.333,65.87h0a68.164,68.164,0,0,0-3.7-22.151l-10.9-6.273,4.749-6.966L65.137,4.5a5.483,5.483,0,0,0-9.711-.013L39.756,32.714a67.763,67.763,0,0,0-8.444,33.862V66.6A30.993,30.993,0,0,0,40.83,88.618L36.8,128.162c-7.684,2.645-13.544,6.567-16.433,11.172C7.92,144.955.057,153.176.057,162.342c0,.448.023.893.062,1.336L0,185.191C-.037,202.133,26.767,215.927,59.868,216s59.967-13.6,60-30.545L120,162.342S119.969,162.4,119.923,162.49Z"
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
