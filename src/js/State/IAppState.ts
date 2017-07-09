import IScreenState from './IScreenState';
import IPlayerState from './IPlayerState';

interface IAppState {
  screenState: IScreenState;
  playerState: IPlayerState;
  lastTickTime: number;
}

export default IAppState;