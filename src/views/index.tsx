import React, { Component } from "react";
import { styled } from "../util/styledComponents";
import { Colours } from "../util/theme";
import { piece, colour, Coords } from "../util/model";
import { connect } from "react-redux";
import { AppState } from "../store/ApplicationState";
import { Actions, ConnectedReduxThunkProps } from "../store";
import Chess from "chess";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Canvas from "../components/Canvas";
import Board from "../components/Board";
import Pieces from "../components/Pieces";
import TakenPieces from "../components/TakenPieces";
import Switch from "../components/Switch";
import Slider from "../components/Slider";
import TextBox from "../components/TextBox";

const BG = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${Colours.whiteLight.one};
`;

const Container = styled.div`
  position: fixed;
  top: 0px;
  bottom: 150px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Gap = styled.div`
  width: 20px;
`;

type Props = {} & AppState & ConnectedReduxThunkProps;
type State = {};

class App extends Component<Props, State> {
  componentWillMount() {
    this.props.dispatch(
      Actions.Game.setBoard.action(Chess.Board(), true, true)
    );
  }

  setAiState = (state: boolean) => {
    this.props.dispatch(Actions.Game.setAiState(state));
  };

  setDifficulty = (value: number) => {
    this.props.dispatch(Actions.Game.setDifficulty(value));
  };

  render() {
    return (
      <BG>
        <Container>
          <Canvas
            render={(canvasProps) => (
              <g>
                <TakenPieces colour={colour.White} />
                <TakenPieces colour={colour.Black} />
                <Board />
                <Pieces svgRef={canvasProps.ref} />
              </g>
            )}
          />
        </Container>
        <Footer
          bottom={
            <>
              <Switch setState={this.setAiState} />
              <Gap />
              <Slider
                AiOn={this.props.Game.AiOn}
                SliderValue={this.props.Game.Difficulty}
                UpdateDifficulty={this.setDifficulty}
              />
            </>
          }
          top={<TextBox message={this.props.Game.Message} />}
        />
      </BG>
    );
  }
}

const mapStateToProps = (state: AppState): AppState => state;

export default connect(mapStateToProps)(App);
