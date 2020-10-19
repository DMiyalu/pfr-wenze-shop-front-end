import { SET_PANIER, GET_PANIER } from './panier.types'


export const getPanier = (data) => {
    const action = {
        type: SET_PANIER,
        payload: data
    }
    return async (dispatch) => {
        dispatch(action)
    }
}

export const renderPanier = () => {
    const action = {
        type: GET_PANIER
    }
}

