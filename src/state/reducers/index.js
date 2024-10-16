import { combineReducers } from "redux";

import dataLoginReducer from "./dataLoginReducer";
import dataFromLocalStorageReducer from "./dataFromLocalStorageReducer";


const reducers = combineReducers({
    dataLogin: dataLoginReducer,
    dataFromLocalStorage: dataFromLocalStorageReducer
})

export default reducers
