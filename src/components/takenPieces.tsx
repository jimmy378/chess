import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/ApplicationState';
import { Actions, ConnectedReduxThunkProps } from '../store';
import { styled } from '../util/styledComponents';

import Pawn from './pawn';

const Container = styled.div``;

type Props = {} & AppState & ConnectedReduxThunkProps;

type State = {};

class TakenPieces extends React.Component<Props, State> {
  render() {
    return <Container>Pieces</Container>;
  }
}

const mapStateToProps = (state: AppState): AppState => state;

export default connect(mapStateToProps)(TakenPieces);
