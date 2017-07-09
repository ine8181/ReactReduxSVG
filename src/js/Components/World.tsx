import * as React from 'React';
import ScreenContainer from './ScreenContainer';
import PlayerContainer from './PlayerContainer';
import Defs from './SVG/Defs';

interface IWorldProps {
}

interface IWorldState {
  width: number;
  height: number;
  left: number;
}

export default class World extends React.Component<IWorldProps, IWorldState> {
  constructor(props: IWorldProps) {
    super();

    this.state = {
      width: 0,
      height: 0,
      left: 0
    };
  }

  componentDidMount(): void {
    this.resize();

    window.addEventListener('resize', this.resize.bind(this));
    window.addEventListener('orientationchange', this.resize.bind(this));
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('orientationchange', this.resize);
  }

  resize(): void {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const windowRatio = windowWidth / windowHeight;
    const svgRatio = 4 / 3;

    let width: number;
    let height: number;

    if (windowRatio > svgRatio) {
      // Screen is wider than the SVG
      width = Math.floor(windowHeight * svgRatio);
      height = windowHeight;
    } else {
      // Screen is narrower
      width = windowWidth;
      height = Math.floor(windowWidth / svgRatio);
    }

    this.setState({ width: width });
    this.setState({ height: height });
    this.setState({ left: Math.floor((windowWidth - width) / 2) });
  }

  render() {
    const style = {
      width: this.state.width + 'px',
      height: this.state.height + 'px',
      left: this.state.left + 'px'
    };

    return (
      <svg id="world"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 1024 768"
        shapeRendering="optimizeSpeed"
        style={style}>
        <Defs />
        <ScreenContainer />
        <PlayerContainer />
      </svg>
    );
  }
}