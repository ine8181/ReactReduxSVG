"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPlayerState_1 = require("./getPlayerState");
const getScreenState_1 = require("./getScreenState");
const initialScreenState = getScreenState_1.default([0, 0]);
const initialState = {
    screenState: initialScreenState,
    playerState: getPlayerState_1.default(undefined, { type: 'NONE' }, initialScreenState, 0),
    lastTickTime: performance.now()
};
function getAppState(state = initialState, action) {
    const deltaTime = performance.now() - state.lastTickTime;
    const screenState = getScreenState_1.default(state.playerState.screen);
    const playerState = getPlayerState_1.default(state.playerState, action, state.screenState, deltaTime);
    return Object.assign({}, state, {
        screenState: screenState,
        playerState: playerState,
        lastTickTime: performance.now()
    });
}
exports.default = getAppState;
