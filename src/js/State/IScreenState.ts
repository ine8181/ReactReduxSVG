import ITerrainObject from '../TerrainObjects/ITerrainObject'

interface IScreenState {
  name: string;
  terrainObjects: ITerrainObject[];
}

export default IScreenState;