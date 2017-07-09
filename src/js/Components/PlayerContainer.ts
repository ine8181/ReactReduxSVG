import * as React from 'React';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import IAppState from '../state/IAppState';
import IPlayerState from '../state/IPlayerState';
import Direction from '../Direction';
import Player from './Player';

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    move: (direction: Direction) => { dispatch({ type: 'MOVE', direction: direction }) },
    jump: () => { dispatch({ type: 'JUMP' }) }
  };
}

function mapStateToProps(state: IAppState) {
  return {
    displayDirection: state.playerState.displayDirection,
    inputDirection: state.playerState.inputDirection,
    position: state.playerState.position
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);