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

export const dataCategories = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'DATA_CATEGORIES',
            payload: flag
        })
        return flag;
    }
}

export const dataProducts = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'DATA_PRODUCTS',
            payload: flag
        })
        return flag;
    }
}