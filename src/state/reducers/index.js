import { combineReducers } from "redux";

import dataLoginReducer from "./dataLoginReducer";
import dataFromLocalStorageReducer from "./dataFromLocalStorageReducer";
import dataCategoriesReducer from "./dataCategoriesReducer";
import dataProductsReducer from "./dataProductsReducer";


const reducers = combineReducers({
    dataLogin: dataLoginReducer,
    dataFromLocalStorage: dataFromLocalStorageReducer,
    dataCategories: dataCategoriesReducer,
    dataProducts: dataProductsReducer,
})

export default reducers
