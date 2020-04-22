import {combineReducers} from 'redux'
// combineReducers把小的reducer合并成大的reducer
import {reducer as headerReducer} from '../common/header/store/'
const reducer=  combineReducers({
    header: headerReducer
});
export default   reducer  ;