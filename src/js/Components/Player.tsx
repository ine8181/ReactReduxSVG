import * as React from 'React';
import IPlayerState from '../state/IPlayerState';
import Direction from '../Direction';
import PlayerSVG from './SVG/PlayerSVG';

interface IPlayerProps extends IPlayerState {
  move: (direction: Direction) => void;
  jump: () => void;
}

class Player extends React.Component<IPlayerProps, IPlayerState> {
  keysDown: any = {};

  componentDidMount(): void {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    document.addEventListener("keyup", this.handleKeyUp.bind(this));
  }

  componentWillUnmount(): void {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyDown);
  }

  render() {
    let left = this.props.position[0];
    if (this.props.displayDirection === Direction.Left) {
      left += 64; // Offset matrix flip
    }

    const top = -this.props.position[1];

    const scaleFactor = 0.285;
    const scaleX = scaleFactor * (this.props.displayDirection === Direction.Left ? -1 : 1);
    const scaleY = scaleFactor;

    return <g transform={'translate(' + left + ' ' + (top - 10) + ') scale(' + scaleX + ', ' + scaleY + ')'}>{PlayerSVG()}</g>;
  }

  handleKeyDown(e: KeyboardEvent): void {
    const direction = this.getDirection(e);

    if (direction !== null) {
      this.props.move(direction);
    } else if (e.keyCode === 32) {
      this.props.jump();
    }
  }

  handleKeyUp(e: KeyboardEvent): void {
    const direction = this.getDirection(e);

    if (direction === this.props.displayDirection) {
      this.props.move(null);
    }
  }

  getDirection(e: KeyboardEvent): Direction {
    switch (e.keyCode) {
      case 37:
        return Direction.Left;

      case 39:
        return Direction.Right;

      default:
        return null;
    }
  }
}

export default Player;