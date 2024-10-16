import { combineReducers } from "redux";

import dataLoginReducer from "./dataLoginReducer";


const reducers = combineReducers({
    dataLogin: dataLoginReducer
})

export default reducers
