import IScreenState from '../State/IScreenState';
import ScreenBuilder from './ScreenBuilder';

export default function (): IScreenState {
  return {
    name: 'Ballroom East',
    terrainObjects: [
      ScreenBuilder.getBricks([0, 0], [1024, -32]),
      ScreenBuilder.getBricks([0, -736], [1024, -768]),
      ScreenBuilder.getBricks([992, 32], [1024, -736]),
      ScreenBuilder.getBricks([0, -608], [256, -640]),
      ScreenBuilder.getBricks([256, -672], [512, -704]),
    ]
  };
};