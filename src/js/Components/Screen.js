"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("React");
const TerrainObjectShape_1 = require("../TerrainObjects/TerrainObjectShape");
const Rect_1 = require("./Rect");
class Screen extends React.Component {
    render() {
        const screenComponents = [];
        const terrainObjects = this.props.terrainObjects;
        terrainObjects.forEach((terrainObject, index) => {
            switch (terrainObject.shape) {
                case TerrainObjectShape_1.default.Rect:
                    const rectObj = terrainObject;
                    screenComponents.push(React.createElement(Rect_1.default, { key: index, topLeft: rectObj.topLeft, bottomRight: rectObj.bottomRight, style: rectObj.style }));
                    break;
            }
        });
        return React.createElement("g", null, screenComponents);
    }
}
exports.default = Screen;
