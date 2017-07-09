import ITerrainObject from '../TerrainObjects/ITerrainObject';
import TerrainObjectShape from '../TerrainObjects/TerrainObjectShape';
import TerrainObjectMaterial from '../TerrainObjects/TerrainObjectMaterial';
import TerrainObjectStyle from '../TerrainObjects/TerrainObjectStyle';
import IScreenState from '../State/IScreenState';
import Rect from '../TerrainObjects/Rect';

function intersects(x: number, y: number, width: number, height: number, terrainObjects: ITerrainObject[], terrainObjectMaterial: TerrainObjectMaterial): boolean {
  for (let i = 0; i < terrainObjects.length; i++) {
    const terrainObject = terrainObjects[i];
    if (terrainObject.material === terrainObjectMaterial) {
      switch (terrainObject.shape) {
        case TerrainObjectShape.Rect:
          const rect = terrainObject as Rect;
          if (!(x + width <= rect.topLeft[0] ||
            x >= rect.bottomRight[0] ||
            y - height >= rect.topLeft[1] ||
            y <= rect.bottomRight[1])) {
            return true;
          }
          break;
      }
    }
  }

  return false;
}

function isOnSolid(x: number, y: number, screenState: IScreenState): boolean {
  return (intersects(x, y - 128, 64, 1, screenState.terrainObjects, TerrainObjectMaterial.Solid));
}

function isBlocked(x: number, y: number, screenState: IScreenState): boolean {
  return (intersects(x, y, 64, 128, screenState.terrainObjects, TerrainObjectMaterial.Solid));
}

function getClosestPossiblePosition(startPosition: number[], targetPosition: number[], screenState: IScreenState): number[] {
  const xStart = startPosition[0];
  const yStart = startPosition[1];
  const xTarget = targetPosition[0];
  const yTarget = targetPosition[1];

  const xDistance = xTarget - xStart;
  const yDistance = yTarget - yStart;
  const distance = Math.round(Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)));

  for (let i = distance; i >= 1; i--) {
    let x = xStart + Math.round((i / distance) * xDistance);
    let y = yStart + Math.round((i / distance) * yDistance);

    if (!isBlocked(x, y, screenState)) return [x, y];
  }

  return [xStart, yStart];
}

function dampForce(force: number, deltaTime: number): number {
  if (Math.abs(force) < 0.1) return 0;

  const decrement = Math.min(deltaTime * 0.05, Math.abs(force));
  return force > 0
    ? force - decrement
    : force + decrement;
}

export default { isOnSolid, isBlocked, getClosestPossiblePosition, dampForce };