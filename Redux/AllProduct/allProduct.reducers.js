import { SET_PRODUCT_LIST } from './allProduct.types'


const INITIAL_STATE = {
    allProduct: [
        {
            productID: 1,
            title: "Sandwich",
            description: 'Sandwich au poulet mayo et du salade.',
            price: 8,
            number: 1
        },
        {
            productID: 2,
            title: "Choco Cake",
            description: 'Choco cake à base du lait de vache.',
            price: 4,
            number: 1
        },
        {
            productID: 3,
            title: "Chocolate",
            description: 'Jus chocolate, en crème et en poudre, à dilué sur 1 litre d\'eau.',
            price: 19,
            number: 1
        },
        {
            productID: 4,
            title: "Choco Cake",
            description: 'Choco cake à base du lait de vache.',
            price: 20,
            number: 1
        },
        {
            productID: 5,
            title: "Choco Cake",
            description: 'Choco cake à base du lait de vache.',
            price: 5,
            number: 1
        },
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
