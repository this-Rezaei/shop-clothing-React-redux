import { Actiontypes } from "../contants/action-types";
const initialState = {
    products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return { ...state, products: payload };
            break;

        default:
            return state;
            break;
    }
};
export const selectedProductreduce = (state = [], { type, payload }) => {
    switch (type) {
        case Actiontypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
            break;

        default:
            return state;
            break;
    }
};
