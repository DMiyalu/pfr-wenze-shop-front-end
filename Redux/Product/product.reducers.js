import { SET_PRODUCT } from './product.types'

const INITIAL_STATE = {
    product: {
        productID: 1,
        title: "Initial title",
        description: 'Initial words to describe this product.',
        price: 45,
        number: 1
    }
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PRODUCT:
            return {...state, product: action.payload}
        default:
            return state
    }
}
