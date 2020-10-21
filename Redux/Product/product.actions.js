import { SET_PRODUCT, GET_PRODUCT } from './product.types'


export const getProduct = (data) => {
    const action = {
        type: SET_PRODUCT,
        payload: data
    }
    return async(dispatch) => {
        await dispatch(action)
    }
}

export const renderProduct = () => {
    const action = {
        type: GET_PRODUCT
    }
}

