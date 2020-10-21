import { SET_PRODUCT_LIST } from './allProduct.types'


const INITIAL_STATE = {
    allProduct: [
        {
            productID: 1,
            title: "Initial title",
            description: 'Initial words to describe this product.',
            price: 45,
            number: 1
        },
        {
            productID: 2,
            title: "Initial title",
            description: 'Initial words to describe this product.',
            price: 45,
            number: 1
        },
        {
            productID: 3,
            title: "Initial title",
            description: 'Initial words to describe this product.',
            price: 45,
            number: 1
        }
    ]
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PRODUCT_LIST:
            return {...state, allProduct: action.payload}
        default:
            return state
    }
}
