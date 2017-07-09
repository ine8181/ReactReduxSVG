import * as React from 'React';
import IScreenState from '../State/IScreenState';
import ITerrainObject from '../TerrainObjects/ITerrainObject';
import TerrainObjectShape from '../TerrainObjects/TerrainObjectShape';
import RectObj from '../TerrainObjects/Rect';
import Rect from './Rect';

interface IScreenProps extends IScreenState { }

export default class Screen extends React.Component<IScreenProps, {}> {
  render() {
    const screenComponents: any[] = [];

    const terrainObjects: ITerrainObject[] = this.props.terrainObjects;

    terrainObjects.forEach((terrainObject, index) => {
      switch (terrainObject.shape) {
        case TerrainObjectShape.Rect:
          const rectObj = terrainObject as RectObj;
          screenComponents.push(<Rect key={index} topLeft={rectObj.topLeft} bottomRight={rectObj.bottomRight} style={rectObj.style}></Rect>);
          break;
      }
    });

    return <g>{screenComponents}</g>;
  }
}