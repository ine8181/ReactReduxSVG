import IAppState from '../State/IAppState';
import IScreenState from '../State/IScreenState';
import IPlayerState from '../State/IPlayerState';
import getPlayerState from './getPlayerState';
import getScreenState from './getScreenState';
import Direction from '../Direction';

const initialScreenState = getScreenState([0, 0]);

const initialState: IAppState = {
  screenState: initialScreenState,
  playerState: getPlayerState(undefined, { type: 'NONE' }, initialScreenState, 0),
  lastTickTime: performance.now()
};

function getAppState(state: IAppState = initialState, action: any): IAppState {
  const deltaTime = performance.now() - state.lastTickTime;

  const screenState = getScreenState(state.playerState.screen);
  const playerState = getPlayerState(state.playerState, action, state.screenState, deltaTime);

  return Object.assign({}, state, {
    screenState: screenState,
    playerState: playerState,
    lastTickTime: performance.now()
  });
}

export default getAppState;