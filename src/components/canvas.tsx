import React from 'react';

export default class Canvas extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 950"
        width="100%"
      >
        {this.props.children}
      </svg>
    );
  }
}
