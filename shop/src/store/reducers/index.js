import { combineReducers } from 'redux'

// REDUCERS
import productCatalog from './productCatalogReducer'
import product from './productReducer'
import cart from './cartReducer'
import user from './userReducer'
import orders from './orderReducer'

export default combineReducers({
    productCatalog,
    product,
    cart,
    user,
    orders
})