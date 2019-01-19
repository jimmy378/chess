import React from 'react';
import { styled } from '../util/styledComponents';
import { Colours } from '../util';
import Logo from '../images/SVG/ChessTitle.svg';

const Container = styled.div`
  position: fixed;
  height: 70px;
  width: 100%;
  background-color: ${Colours.purpleLight.three};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
`;

const Image = styled.img`
  height: 45px;
  transform: translateY(3px);
`;

type Props = {};

type State = {};

export default class Header extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Image src={Logo} />
      </Container>
    );
  }
}
