import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopData = createSelector([selectShop], shop => shop.shopData);

export const selectShopDataArray = createSelector([selectShopData], shopData => Object.values(shopData)) 

export const selectCategoryShopData = category => createSelector([selectShopData], shopData => shopData[category]);
