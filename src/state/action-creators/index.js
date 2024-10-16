export const dataLogin = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'DATA_LOGIN',
            payload: flag
        })
        return flag;
    }
}

export const dataFromLocalStorage = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'DATA_FROM_LOCAL_STORAGE',
            payload: flag
        })
        return flag;
    }
}