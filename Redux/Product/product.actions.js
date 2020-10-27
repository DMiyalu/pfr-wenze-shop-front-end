import { SET_PRODUCT, SET_NUMBER } from './product.types'


export const getProduct = (data) => {
    const action = {
        type: SET_PRODUCT,
        payload: data
    }
    return async(dispatch) => {
        await dispatch(action)
    }
}



export const getNumber = (data) => {
    const action = {
        type: SET_NUMBER,
        payload: data
    }
    return async(dispatch) => {
        await dispatch(action)
    }
}