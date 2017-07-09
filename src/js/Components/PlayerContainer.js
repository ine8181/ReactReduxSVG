"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Player_1 = require("./Player");
function mapDispatchToProps(dispatch) {
    return {
        move: (direction) => { dispatch({ type: 'MOVE', direction: direction }); },
        jump: () => { dispatch({ type: 'JUMP' }); }
    };
}
function mapStateToProps(state) {
    return {
        displayDirection: state.playerState.displayDirection,
        inputDirection: state.playerState.inputDirection,
        position: state.playerState.position
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Player_1.default);
