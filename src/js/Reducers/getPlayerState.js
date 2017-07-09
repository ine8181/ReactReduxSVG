"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Direction_1 = require("../Direction");
const physics_1 = require("../Physics/physics");
const initialState = {
    inputDirection: null,
    displayDirection: Direction_1.default.Right,
    position: [200, -100],
    force: [0, 0],
    screen: [0, 0]
};
function getPlayerState(playerState = initialState, action, screenState, deltaTime) {
    switch (action.type) {
        case 'TICK':
            const stateFromTick = getPlayerStateFromTick(playerState, screenState, deltaTime);
            const position = stateFromTick.position;
            if (position[0] > 1023) {
                position[0] -= 1024;
                stateFromTick.screen[0]++;
            }
            else if (position[0] < -63) {
                position[0] += 1024;
                stateFromTick.screen[0]--;
            }
            return stateFromTick;
        case 'MOVE':
            return getPlayerStateFromMove(playerState, action.direction);
        case 'JUMP':
            return getPlayerStateFromJump(playerState, screenState);
        default:
            return playerState;
    }
}
function getPlayerStateFromTick(playerState, screenState, deltaTime) {
    const timeFactor = deltaTime / (1000 / 60);
    const force = playerState.force;
    const position = playerState.position;
    const inputDirection = playerState.inputDirection;
    let forceX = force[0];
    let forceY = force[1];
    if (physics_1.default.isOnSolid(position[0], position[1], screenState)) {
        if (inputDirection !== null) {
            const horizontalForceDelta = timeFactor * 0.1;
            const maxHorizontalForce = 12;
            if (inputDirection === Direction_1.default.Left) {
                forceX -= horizontalForceDelta;
                forceX = Math.min(forceX, 0);
                forceX = Math.max(forceX, -maxHorizontalForce);
            }
            else if (inputDirection === Direction_1.default.Right) {
                forceX += horizontalForceDelta;
                forceX = Math.max(forceX, 0);
                forceX = Math.min(forceX, maxHorizontalForce);
            }
        }
        else {
            forceX = physics_1.default.dampForce(forceX, deltaTime);
        }
        // Prevent gravity
        forceY = Math.max(forceY, 0);
    }
    else {
        // Apply gravity
        forceY -= timeFactor * 0.4;
        forceY = Math.max(forceY, -12);
    }
    let positionX = position[0];
    let positionY = position[1];
    positionX += (timeFactor * forceX);
    positionY += (timeFactor * forceY);
    let newPosition = [positionX, positionY];
    const blocked = physics_1.default.isBlocked(positionX, positionY, screenState);
    if (blocked) {
        newPosition = physics_1.default.getClosestPossiblePosition(position, newPosition, screenState);
        forceX = physics_1.default.dampForce(forceX, deltaTime);
        forceY = physics_1.default.dampForce(forceY, deltaTime);
    }
    const newForce = [forceX, forceY];
    return Object.assign({}, playerState, { force: newForce, position: newPosition });
}
function getPlayerStateFromMove(playerState, direction) {
    const displayDirection = direction || playerState.displayDirection;
    return Object.assign({}, playerState, { inputDirection: direction, displayDirection: displayDirection });
}
function getPlayerStateFromJump(playerState, screenState) {
    const force = playerState.force;
    const position = playerState.position;
    if (!physics_1.default.isOnSolid(position[0], position[1], screenState))
        return playerState; // Can't jump in the air
    const newForce = [force[0], 9];
    return Object.assign({}, playerState, { force: newForce });
}
exports.default = getPlayerState;
