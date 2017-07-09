import IScreenState from '../State/IScreenState';
import Screen_0_0_BallroomWest from '../Screens/Screen_0_0_BallroomWest';
import Screen_1_0_BallroomEast from '../Screens/Screen_1_0_BallroomEast';

const ballroomWest = Screen_0_0_BallroomWest();
const ballroomEast = Screen_1_0_BallroomEast();

const screens = [[ballroomWest, ballroomEast]];

export default function getScreenState(screen: number[]): IScreenState {
  return screens[screen[1]][screen[0]];
}