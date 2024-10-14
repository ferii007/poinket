const initialState = {
    "outlet_id": 1,
    "outlet_theme": "Modern",
    "outlet_name": "Poinket",
    "owner_id": 1,
    "outlet_time_zone": "Asia/Jakarta",
    "outlet_start_time": "08:00",
    "outlet_language": "Indonesian",
    "outlet_language_code": "id"
}

const dataOutletReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_OUTLET':
            return action.payload;

        default:
            return state;
    }
};

export default dataOutletReducer;
