import ITerrainObject from './ITerrainObject';
import TerrainObjectShape from './TerrainObjectShape';
import TerrainObjectMaterial from './TerrainObjectMaterial';
import TerrainObjectStyle from './TerrainObjectStyle';

export default class Rect implements ITerrainObject {
  shape: TerrainObjectShape;
  material: TerrainObjectMaterial;
  style: TerrainObjectStyle;

  topLeft: number[] = [];
  bottomRight: number[] = [];

  constructor(material: TerrainObjectMaterial, style: TerrainObjectStyle, topLeft: number[], bottomRight: number[]) {
    this.shape = TerrainObjectShape.Rect;
    this.material = material;
    this.style = style;

    this.topLeft[0] = topLeft[0];
    this.topLeft[1] = topLeft[1];
    this.bottomRight[0] = bottomRight[0];
    this.bottomRight[1] = bottomRight[1];
  }
}