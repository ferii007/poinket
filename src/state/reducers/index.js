import { combineReducers } from "redux";

import dataOutletReducer from "./dataOutletReducer";


const reducers = combineReducers({
    dataOutlet: dataOutletReducer
})

export default reducers
