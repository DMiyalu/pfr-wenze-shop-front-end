import { SET_PRODUCT, SET_NUMBER } from './product.types'

const INITIAL_STATE = {
    product: {
        productID: 1,
        title: "Initial title",
        description: 'Initial words to describe this product.',
        price: 45,
        number: 1
    }
}

const setNumber = (Value) => {
    const newState = {...state}
    newState.number = Value
    return newState
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PRODUCT:
            return {...state, product: action.payload}
        case SET_NUMBER:
            const newState = setNumber(action.payload)
            return newState
        default:
            return state
    }
}
