import TerrainObjectShape from './TerrainObjectShape';
import TerrainObjectMaterial from './TerrainObjectMaterial';
import TerrainObjectStyle from './TerrainObjectStyle';

interface ITerrainObject {
  shape: TerrainObjectShape;
  material: TerrainObjectMaterial;
  style: TerrainObjectStyle;
}

export default ITerrainObject;