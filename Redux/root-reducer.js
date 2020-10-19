import { combineReducers } from 'redux'
import PanierReducer from './Panier/panier.reducers'
import ProductReducer from './Product/product.reducers'


const rootReducer = combineReducers({
    panier: PanierReducer,
    Product: ProductReducer,
})

export default rootReducer 