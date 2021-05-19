import SHOP_DATA from "../../pages/shop/shop.data";

const initinalState = {
    shopData : SHOP_DATA
};

const shopReducer = (state = initinalState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default shopReducer;
