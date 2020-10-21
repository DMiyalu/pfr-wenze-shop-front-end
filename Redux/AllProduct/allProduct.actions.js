import { SET_PRODUCT_LIST } from './allProduct.types'


export const getProductList = (data) => {
    const action = {
        type: SET_PRODUCT_LIST,
        payload: data
    }
    return async(dispatch) => {
        await dispatch(action)
    }
}

