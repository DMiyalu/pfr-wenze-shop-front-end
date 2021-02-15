import { combineReducers } from 'redux'
import PanierReducer from './Panier/panier.reducers'
import ProductReducer from './Product/product.reducers'
import AllProduct from './AllProduct/allProduct.reducers'
import UserAuthReducer from './UserAuth/userAuth.reducers'


const rootReducer = combineReducers({
    panier: PanierReducer,
    product: ProductReducer,
    products: AllProduct,
    user: UserAuthReducer,
})

export default rootReducer 