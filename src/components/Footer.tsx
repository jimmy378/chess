import React from 'react';
import { styled } from '../util/styledComponents';
import { Colours } from '../util';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 150px;
  width: 100%;
`;

const Bottom = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
  background-color: ${Colours.purpleLight.three};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  border-top: 4px solid ${Colours.purpleLight.two};
`;

const Top = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  background-color: ${Colours.purpleLight.four};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
`;

const Credits = styled.div`
  position: relative;
  height: 30px;
  width: 100%;
  background-color: rgb(50, 50, 50);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
`;

type Props = {
  bottom: JSX.Element;
  top: JSX.Element;
  credits: JSX.Element;
};

type State = {};

export default class TEMPLATE extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Top>{this.props.top}</Top>
        <Bottom>{this.props.bottom}</Bottom>
        <Credits>{this.props.credits}</Credits>
      </Container>
    );
  }
}
