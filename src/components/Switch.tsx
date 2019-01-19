import React from 'react';
import { styled } from '../util/styledComponents';
import { Theme, Colours } from '../util';
import { TweenLite, Power4 } from 'gsap';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 140px;
  background-color: ${Colours.whiteLight.four};
  border-radius: 10px;
  border-bottom: 4px solid ${Colours.purpleLight.five};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.25);
`;

const Trigger = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${Colours.whiteLight.two};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.25);
  transform: translateX(30px);
`;

const SwitchContainer = styled.div`
  height: 30px;
  width: 60px;
  background-color: ${Colours.blackLight.one};
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.5s ease;
  :hover {
    background-color: ${Colours.blackLight.three};
  }
  :hover ${Trigger} {
    background-color: ${Colours.whiteLight.one};
  }
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1em;
  font-weight: 500;
  transition: color 0.5s ease;
`;

const Gap = styled.div`
  width: 10px;
`;

type Props = {
  setState: (ai: boolean) => void;
};

type State = {
  switch: boolean;
};

export default class TEMPLATE extends React.Component<Props, State> {
  TriggerRef: React.RefObject<HTMLDivElement> = React.createRef();

  state: State = {
    switch: true
  };

  click = async () => {
    if (this.TriggerRef.current) {
      TweenLite.to(this.TriggerRef.current, 1, {
        css: {
          transform: `translateX(${this.state.switch ? '0px' : '30px'})`
        },
        ease: Power4.easeOut
      });
      await this.setState({ switch: !this.state.switch });
      this.props.setState(this.state.switch);
    }
  };

  render() {
    return (
      <Container>
        <Text
          style={{
            color: !this.state.switch
              ? Colours.blackDark.four
              : Colours.whiteDark.five
          }}
        >
          2P
        </Text>
        <Gap />
        <SwitchContainer onClick={this.click}>
          <Trigger ref={this.TriggerRef} />
        </SwitchContainer>
        <Gap />
        <Text
          style={{
            color: this.state.switch
              ? Colours.blackDark.four
              : Colours.whiteDark.five
          }}
        >
          AI
        </Text>
      </Container>
    );
  }
}
