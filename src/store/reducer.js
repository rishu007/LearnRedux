import{combineReducers} from 'redux';
import entityReducer from './entities';


//root level reducer
export default combineReducers({
   entity:entityReducer
   //auth
   //ui
})

