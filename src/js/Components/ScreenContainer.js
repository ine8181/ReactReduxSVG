"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Screen_1 = require("./Screen");
function mapStateToProps(state) {
    return {
        name: state.screenState.name,
        terrainObjects: state.screenState.terrainObjects
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(Screen_1.default);
