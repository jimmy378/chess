import React from 'react';
import { styled } from '../util/styledComponents';

const Container = styled.div`
  width: 100px;
  height: 500px;
  background-color: lightgrey;
`;

type Props = {};

type State = {};

export default class TEMPLATE extends React.Component<Props, State> {
  onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  render() {
    return (
      <Container onDrop={this.onDragOver}>{this.props.children}</Container>
    );
  }
}
