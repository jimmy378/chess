import React from 'react';

type Props = {
  render(props: { ref: SVGSVGElement }): JSX.Element;
};

type State = {
  ref: SVGSVGElement;
};

export default class Canvas extends React.Component<Props, State> {
  ref: SVGSVGElement | null = null;

  state: State = {
    ref: this.ref!
  };

  componentDidMount() {
    this.setState({ ref: this.ref! });
  }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1800 1400"
        width="100%"
        height="100%"
        ref={ref => (this.ref = ref)}
      >
        {this.props.render({ ref: this.state.ref })}
      </svg>
    );
  }
}
