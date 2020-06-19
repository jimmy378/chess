import React from "react";
import { styled } from "../util/styledComponents";
import { Colours } from "../util";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: ${Colours.whiteLight.one};
  font-size: 1em;
`;

type Props = {
  message: string;
};

type State = {};

export default class TextBox extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Text>{this.props.message}</Text>
      </Container>
    );
  }
}
