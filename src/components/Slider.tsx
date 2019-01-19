import React, { ChangeEvent, FormEvent } from 'react';
import { styled } from '../util/styledComponents';
import { Theme, Colours } from '../util';
import { TweenLite, Power4 } from 'gsap';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 0;
`;

const Slider = styled.input<{ aiOn: boolean }>`
  -webkit-appearance: none;
  width: 0;
  height: 15px;
  flex-grow: 1;
  border-radius: 20px;
  background: ${p =>
    p.aiOn ? Colours.purpleDark.four : Colours.purpleLight.four};
  outline: none;
  -webkit-transition: 0.2s;
  transition: background 0.5s ease;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: background 0.5s ease;
    background: ${p =>
      p.aiOn ? Colours.whiteLight.two : Colours.purpleLight.four};
    cursor: ${p => (p.aiOn ? 'pointer' : 'auto')};
  }
`;

const Text = styled.p<{ aiOn: boolean }>`
  padding: 0;
  margin: 0;
  font-size: 1em;
  font-weight: 500;
  transition: color 0.5s ease;
  color: ${p => (p.aiOn ? Colours.whiteLight.two : Colours.purpleLight.four)};
`;

const Gap = styled.div`
  width: 10px;
`;

type Props = {
  AiOn: boolean;
  SliderValue: number;
  UpdateDifficulty: (value: number) => void;
};

type State = {
  slider: number;
};

export default class Component extends React.Component<Props, State> {
  state: State = {
    slider: 1
  };

  updateSlider = (value: FormEvent<HTMLInputElement>) => {
    let num = parseInt(value.currentTarget.value);
    let correctedNum = num / 5;
    this.setState({ slider: num });
    this.props.UpdateDifficulty(correctedNum);
  };

  render() {
    return (
      <Container>
        <Text aiOn={this.props.AiOn}>Difficulty:</Text>
        <Gap />
        <Slider
          defaultValue="0"
          onInput={this.updateSlider}
          type="range"
          min="0"
          max="10"
          aiOn={this.props.AiOn}
          disabled={!this.props.AiOn}
        />
        <Gap />
        <Text aiOn={this.props.AiOn}>{this.state.slider}</Text>
      </Container>
    );
  }
}
