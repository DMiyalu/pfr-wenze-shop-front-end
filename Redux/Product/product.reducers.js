import { SET_PRODUCT, GET_PRODUCT } from './product.types'

const INITIAL_STATE = {
    product: {
        title: "Initial title",
        description: 'Initial words to describe this product.',
        price: 45
    }
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PRODUCT:
            return {...state, product: action.payload}
        case GET_PRODUCT:
            return state
        default:
            return state
    }
}
