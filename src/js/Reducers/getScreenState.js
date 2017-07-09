"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Screen_0_0_BallroomWest_1 = require("../Screens/Screen_0_0_BallroomWest");
const Screen_1_0_BallroomEast_1 = require("../Screens/Screen_1_0_BallroomEast");
const ballroomWest = Screen_0_0_BallroomWest_1.default();
const ballroomEast = Screen_1_0_BallroomEast_1.default();
const screens = [[ballroomWest, ballroomEast]];
function getScreenState(screen) {
    return screens[screen[1]][screen[0]];
}
exports.default = getScreenState;
