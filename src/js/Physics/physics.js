"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TerrainObjectShape_1 = require("../TerrainObjects/TerrainObjectShape");
const TerrainObjectMaterial_1 = require("../TerrainObjects/TerrainObjectMaterial");
function intersects(x, y, width, height, terrainObjects, terrainObjectMaterial) {
    for (let i = 0; i < terrainObjects.length; i++) {
        const terrainObject = terrainObjects[i];
        if (terrainObject.material === terrainObjectMaterial) {
            switch (terrainObject.shape) {
                case TerrainObjectShape_1.default.Rect:
                    const rect = terrainObject;
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
function isOnSolid(x, y, screenState) {
    return (intersects(x, y - 128, 64, 1, screenState.terrainObjects, TerrainObjectMaterial_1.default.Solid));
}
function isBlocked(x, y, screenState) {
    return (intersects(x, y, 64, 128, screenState.terrainObjects, TerrainObjectMaterial_1.default.Solid));
}
function getClosestPossiblePosition(startPosition, targetPosition, screenState) {
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
        if (!isBlocked(x, y, screenState))
            return [x, y];
    }
    return [xStart, yStart];
}
function dampForce(force, deltaTime) {
    if (Math.abs(force) < 0.1)
        return 0;
    const decrement = Math.min(deltaTime * 0.05, Math.abs(force));
    return force > 0
        ? force - decrement
        : force + decrement;
}
exports.default = { isOnSolid, isBlocked, getClosestPossiblePosition, dampForce };
