const dataProductsReducer = (state = [], action) => {
    switch (action.type) {
        case 'DATA_PRODUCTS':
            return action.payload;

        default:
            return state;
    }
};

export default dataProductsReducer;
