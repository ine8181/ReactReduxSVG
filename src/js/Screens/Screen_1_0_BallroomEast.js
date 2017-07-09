"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ScreenBuilder_1 = require("./ScreenBuilder");
function default_1() {
    return {
        name: 'Ballroom East',
        terrainObjects: [
            ScreenBuilder_1.default.getBricks([0, 0], [1024, -32]),
            ScreenBuilder_1.default.getBricks([0, -736], [1024, -768]),
            ScreenBuilder_1.default.getBricks([992, 32], [1024, -736]),
            ScreenBuilder_1.default.getBricks([0, -608], [256, -640]),
            ScreenBuilder_1.default.getBricks([256, -672], [512, -704]),
        ]
    };
}
exports.default = default_1;
;
