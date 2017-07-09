"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("React");
const TerrainObjectStyle_1 = require("../TerrainObjects/TerrainObjectStyle");
class Rect extends React.Component {
    render() {
        const left = this.props.topLeft[0];
        const top = -this.props.topLeft[1];
        const right = this.props.bottomRight[0];
        const bottom = -this.props.bottomRight[1];
        const width = right - left;
        const height = bottom - top;
        // CSS class is TerrainObjectStyle enum member
        const className = TerrainObjectStyle_1.default[this.props.style].toLowerCase();
        return React.createElement("rect", { x: left, y: top, width: width, height: height, className: className });
    }
}
exports.default = Rect;
