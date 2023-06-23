import { createStore, combineReducers } from 'redux';
import addToCartReducer from './productReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    productStore : addToCartReducer,
    cartStore: cartReducer
})

export const store = createStore(rootReducer)