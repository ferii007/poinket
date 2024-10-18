const dataCategoriesReducer = (state = [], action) => {
    switch (action.type) {
        case 'DATA_CATEGORIES':
            return action.payload;

        default:
            return state;
    }
};

export default dataCategoriesReducer;
