import { SET_PRODUCT_LIST } from './allProduct.types'


const INITIAL_STATE = {
    products : []
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PRODUCT_LIST:
            return {...state, products: action.payload}
        default:
            return state
    }
}
