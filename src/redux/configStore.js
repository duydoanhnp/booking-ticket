import { combineReducers, createStore } from "redux";
import {BaiTapDatVeReducer} from './reducer/BaiTapDatVeReducer.jsx'

const rootReducer = combineReducers ({
    
    BaiTapDatVeReducer, BaiTapDatVeReducer

});

export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());