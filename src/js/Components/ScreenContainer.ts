import { connect } from 'react-redux';
import IAppState from '../state/IAppState';
import IScreenState from '../state/IScreenState';
import Screen from './Screen';

function mapStateToProps(state: IAppState): any {
  return {
    name: state.screenState.name,
    terrainObjects: state.screenState.terrainObjects
  };
}

export default connect(mapStateToProps)(Screen);