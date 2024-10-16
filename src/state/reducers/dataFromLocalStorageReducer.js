const initialState = {
    "languageData": {name: "English", lang_code: "en"}
}

const dataFromLocalStorageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_FROM_LOCAL_STORAGE':
            return action.payload;

        default:
            return state;
    }
};

export default dataFromLocalStorageReducer;
