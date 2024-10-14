export const dataOutlet = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'DATA_OUTLET',
            payload: flag
        })
        return flag;
    }
}