import Direction from '../Direction';

interface IPlayerState {
  screen: number[];
  inputDirection: Direction;
  displayDirection: Direction;
  position: number[];
  force: number[];
}

export default IPlayerState;