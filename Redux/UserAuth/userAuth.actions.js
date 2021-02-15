import { SET_USER } from './userAuth.types'


export const getUser = (data) => {
    const action = {
        type: SET_USER,
        payload: data
    }
    return async(dispatch) => {
        await dispatch(action)
    }
}
