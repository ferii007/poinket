import { combineReducers } from "redux";

import dataLoginReducer from "./dataLoginReducer";
import dataFromLocalStorageReducer from "./dataFromLocalStorageReducer";
import dataCategoriesReducer from "./dataCategoriesReducer";


const reducers = combineReducers({
    dataLogin: dataLoginReducer,
    dataFromLocalStorage: dataFromLocalStorageReducer,
    dataCategories: dataCategoriesReducer,
})

export default reducers
