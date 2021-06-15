import {combineReducers} from 'redux';

import DemoReducer from 'Pages/Demo/reducer'

const reducer = combineReducers({
    demoPageState: DemoReducer,
});

export default reducer;