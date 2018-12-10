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
};

type State = {
  dragging: boolean;
};

export default class Pawn extends React.Component<Props, State> {
  private CircleRef: SVGEllipseElement | null = null;
  private BaseRef: SVGPathElement | null = null;
  private BackRef: SVGPathElement | null = null;
  private BallRef: SVGPathElement | null = null;
  private TopRingRef: SVGPathElement | null = null;
  private BodyRef: SVGPathElement | null = null;
  private OverlayRef: SVGPathElement | null = null;

  Circle = styled.ellipse`
    fill: ${this.props.isDark
      ? Colours.blackLight.five
      : Colours.whiteLight.five};
  `;
  Base = styled.path`
    fill: ${this.props.isDark
      ? Colours.blackLight.two
      : Colours.whiteLight.two};
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
  TopRing = styled.path`
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
    opacity: 0;
    cursor: move;
  `;

  render() {
    return (
      <g
        transform={`translate(${this.props.PosOffset[0]} ${
          this.props.PosOffset[1]
        })`}
      >
        <this.Circle
          cx="60"
          cy="123.246"
          rx="60"
          ry="30.748"
          ref={ref => (this.CircleRef = ref)}
        />
        <this.Base
          d="M119.9,29.257h0l0-.03c-.006-.05-.017-.1-.024-.149-.064-.533-.157-1.061-.274-1.587,0-.016-.005-.032-.008-.048h0C116.142,12.157,90.788.286,60,.286S3.858,12.157.416,27.443h0c0,.016-.005.033-.008.049-.117.525-.21,1.053-.274,1.586-.007.05-.018.1-.024.149l0,.03h0A15,15,0,0,0,0,31v92.3C0,140.251,26.863,154,60,154s60-13.749,60-30.71V31A15,15,0,0,0,119.9,29.257Z"
          ref={ref => (this.BaseRef = ref)}
        />
        <this.Back
          d="M105.851,31a7.966,7.966,0,0,0-.273-2.052c-.007-.029-.018-.057-.026-.085a8.936,8.936,0,0,0-.3-.912c-.012-.032-.028-.064-.041-.1q-.18-.444-.408-.881C100.333,18.435,81.979,12.04,60,12.04s-40.333,6.4-44.8,14.929q-.228.437-.408.881c-.013.032-.029.064-.041.1a8.936,8.936,0,0,0-.3.912c-.008.028-.019.056-.026.085A7.966,7.966,0,0,0,14.149,31c0,10.469,20.528,18.956,45.851,18.956S105.851,41.464,105.851,31Z"
          ref={ref => (this.BackRef = ref)}
        />
        <this.Ball
          d="M60,22.119A28.726,28.726,0,0,0,31.271,50.846h0a28.727,28.727,0,1,0,57.453,0h0A28.726,28.726,0,0,0,60,22.119Z"
          ref={ref => (this.BallRef = ref)}
        />
        <this.TopRing
          d="M119.9,29.257h0l0-.03c-.006-.05-.017-.1-.024-.149-.064-.533-.157-1.061-.274-1.587,0-.016-.005-.032-.008-.048h0C116.142,12.157,90.788.286,60,.286S3.858,12.157.416,27.443h0c0,.016-.005.033-.008.049-.117.525-.21,1.053-.274,1.586-.007.05-.018.1-.024.149l0,.03h0A15,15,0,0,0,0,31c0,16.961,26.863,30.71,60,30.71S120,47.956,120,31A15,15,0,0,0,119.9,29.257ZM60,47.543c-22.106,0-40.026-7.409-40.026-16.548a7.022,7.022,0,0,1,.237-1.792c.007-.024.017-.049.023-.073a7.915,7.915,0,0,1,.265-.8c.011-.028.024-.056.036-.084.105-.258.223-.514.356-.769C24.79,20.031,40.813,14.448,60,14.448S95.21,20.031,99.109,27.48c.133.255.251.511.356.769.012.028.025.056.036.084a7.915,7.915,0,0,1,.265.8c.007.024.016.049.023.073A6.978,6.978,0,0,1,100.026,31C100.026,40.134,82.106,47.543,60,47.543Z"
          ref={ref => (this.TopRingRef = ref)}
        />
        <this.Body
          d="M60,61.705C26.863,61.705,0,47.956,0,31v92.3C0,140.251,26.863,154,60,154s60-13.749,60-30.71V31C120,47.956,93.137,61.705,60,61.705Z"
          ref={ref => (this.BodyRef = ref)}
        />
        <this.Overlay
          d="M119.9,29.257h0l0-.03c-.006-.05-.017-.1-.024-.149-.064-.533-.157-1.061-.274-1.587,0-.016-.005-.032-.008-.048h0C116.142,12.157,90.788.286,60,.286S3.858,12.157.416,27.443h0c0,.016-.005.033-.008.049-.117.525-.21,1.053-.274,1.586-.007.05-.018.1-.024.149l0,.03h0A15,15,0,0,0,0,31v92.3C0,140.251,26.863,154,60,154s60-13.749,60-30.71V31A15,15,0,0,0,119.9,29.257Z"
          ref={ref => (this.OverlayRef = ref)}
          onMouseDown={this.props.onDrag}
          onMouseUp={this.props.onDrop}
          onTouchStart={this.props.onDrag}
          onTouchEnd={this.props.onDrop}
        />
      </g>
    );
  }
}
