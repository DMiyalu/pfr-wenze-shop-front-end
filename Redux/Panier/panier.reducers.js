import { SET_PANIER, GET_PANIER } from './panier.types'

const INITIAL_STATE = {
    panier: []
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PANIER:
            return {...state, panier: action.payload}
        case GET_PANIER:
            return {...state, loading: false}
        default:
            return {...state, loading: false}
    }
}
