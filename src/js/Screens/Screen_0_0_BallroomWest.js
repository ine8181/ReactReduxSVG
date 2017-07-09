"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ScreenBuilder_1 = require("./ScreenBuilder");
function default_1() {
    return {
        name: 'Ballroom West',
        terrainObjects: [
            ScreenBuilder_1.default.getBricks([0, 0], [1024, -32]),
            ScreenBuilder_1.default.getBricks([0, -736], [1024, -768]),
            ScreenBuilder_1.default.getBricks([0, 32], [32, -736]),
            ScreenBuilder_1.default.getBricks([768, -608], [1024, -640]),
            ScreenBuilder_1.default.getBricks([512, -672], [768, -704])
        ]
    };
}
exports.default = default_1;
;
