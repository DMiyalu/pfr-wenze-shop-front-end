import { SET_PANIER, GET_PANIER } from './panier.types'

const INITIAL_STATE = {
    panier: {
        listFruits: [
            {title: 'fromage', price: 12, number: 3},
            {title: 'game', price: 11, number: 2}
        ],
        total: 0
    }
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PANIER:
            return {...state, panier: action.payload}
        case GET_PANIER:
            return state
        default:
            return state
    }
}
