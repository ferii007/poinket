export const dataLogin = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'DATA_LOGIN',
            payload: flag
        })
        return flag;
    }
}