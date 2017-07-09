import * as React from 'React';
import TerrainObjectStyle from '../TerrainObjects/TerrainObjectStyle'

interface IRectProps {
  topLeft: number[];
  bottomRight: number[];
  style: TerrainObjectStyle;
}

export default class Rect extends React.Component<IRectProps, IRectProps> {
  render() {
    const left = this.props.topLeft[0];
    const top = -this.props.topLeft[1];
    const right = this.props.bottomRight[0];
    const bottom = -this.props.bottomRight[1];

    const width = right - left;
    const height = bottom - top;

    // CSS class is TerrainObjectStyle enum member
    const className = TerrainObjectStyle[this.props.style].toLowerCase();

    return <rect x={left} y={top} width={width} height={height} className={className}></rect>
  }
}