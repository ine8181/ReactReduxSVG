import IScreenState from '../State/IScreenState';
import ScreenBuilder from './ScreenBuilder';

export default function (): IScreenState {
  return {
    name: 'Ballroom West',
    terrainObjects: [
      ScreenBuilder.getBricks([0, 0], [1024, -32]),            
      ScreenBuilder.getBricks([0, -736], [1024, -768]),
      ScreenBuilder.getBricks([0, 32], [32, -736]),      
      ScreenBuilder.getBricks([768, -608], [1024, -640]),
      ScreenBuilder.getBricks([512, -672], [768, -704])
    ]
  };
};