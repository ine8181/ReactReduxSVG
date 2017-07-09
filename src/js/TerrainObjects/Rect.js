"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TerrainObjectShape_1 = require("./TerrainObjectShape");
class Rect {
    constructor(material, style, topLeft, bottomRight) {
        this.topLeft = [];
        this.bottomRight = [];
        this.shape = TerrainObjectShape_1.default.Rect;
        this.material = material;
        this.style = style;
        this.topLeft[0] = topLeft[0];
        this.topLeft[1] = topLeft[1];
        this.bottomRight[0] = bottomRight[0];
        this.bottomRight[1] = bottomRight[1];
    }
}
exports.default = Rect;
