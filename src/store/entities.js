import{combineReducers} from 'redux';
import bugReducer from './bugs';
import projectReducer from './projects';

//root level reducer
export default combineReducers({
    bugs:bugReducer,  //bug module
    projects:projectReducer  //project module
})

