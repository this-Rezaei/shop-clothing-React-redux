import { combineReducers } from "redux";
import { productReducer, selectedProductreduce } from "./productReducer";

const reducers = combineReducers({
    allproducts: productReducer,
    Detals: selectedProductreduce,
});
export default reducers;
