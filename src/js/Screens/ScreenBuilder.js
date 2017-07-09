"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TerrainObjectMaterial_1 = require("../TerrainObjects/TerrainObjectMaterial");
const TerrainObjectStyle_1 = require("../TerrainObjects/TerrainObjectStyle");
const Rect_1 = require("../TerrainObjects/Rect");
function getBricks(topLeft, bottomRight) {
    return new Rect_1.default(TerrainObjectMaterial_1.default.Solid, TerrainObjectStyle_1.default.Bricks, topLeft, bottomRight);
}
exports.default = { getBricks };
