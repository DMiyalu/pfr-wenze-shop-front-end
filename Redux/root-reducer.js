import { combineReducers } from 'redux'
import PanierReducer from './Panier/panier.reducers'
import ProductReducer from './Product/product.reducers'
import AllProduct from './AllProduct/allProduct.reducers'
import UserAuth from './UserAuth/userAuth.reducers'


const rootReducer = combineReducers({
    panier: PanierReducer,
    product: ProductReducer,
    products: AllProduct,
    user: UserAuth,
})

export default rootReducer 