import TerrainObjectMaterial from '../TerrainObjects/TerrainObjectMaterial';
import TerrainObjectStyle from '../TerrainObjects/TerrainObjectStyle';
import Rect from '../TerrainObjects/Rect';

function getBricks(topLeft: number[], bottomRight: number[]): Rect {
  return new Rect(TerrainObjectMaterial.Solid, TerrainObjectStyle.Bricks, topLeft, bottomRight);
}

export default { getBricks };