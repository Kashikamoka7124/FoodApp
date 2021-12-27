import { combineReducers } from 'redux';

import tabReducer from './tab/tabReducer';
import registrationReducer from './Registration/registrationReducer';
import productReducer from './Product/productReducer';
import detailProductReducer from './DetailProduct/detailProductReducer';
import cartReducer from "./cart/cartReducer"
export default combineReducers({
    tabReducer,
    registrationReducer,
    productReducer,
    detailProductReducer,
    cartReducer
    
})