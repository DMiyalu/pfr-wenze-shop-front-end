import { combineReducers } from 'redux'
import PanierReducer from './Panier/panier.reducers'
import ProductReducer from './Product/product.reducers'
import AllProduct from './AllProduct/allProduct.reducers'


const rootReducer = combineReducers({
    panier: PanierReducer,
    product: ProductReducer,
    allProduct: AllProduct,
})

export default rootReducer 