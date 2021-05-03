import { combineReducers } from 'redux';

import cartIconReducer from './cartIcon/cart-icon.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
    cartIcon: cartIconReducer
});