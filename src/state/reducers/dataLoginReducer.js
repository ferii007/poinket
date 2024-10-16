const initialState = {
    "outlet_id": 1,
    "outlet_theme": "Modern",
    "outlet_name": "Poinket",
    "owner_id": 1,
    "outlet_time_zone": "Asia/Jakarta",
    "outlet_line_time": "00:00",
    "outlet_location": "Indonesian",
    "outlet_location_code": "id"
}

const dataLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_LOGIN':
            return action.payload;

        default:
            return state;
    }
};

export default dataLoginReducer;
