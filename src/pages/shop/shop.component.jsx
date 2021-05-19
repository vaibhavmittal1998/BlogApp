import React from "react";
import { connect } from "react-redux";

// import SHOP_DATA from "./shop.data.js";
import { selectShopData } from "../../redux/shop/shop.selector";

import CollectionPreview from "../../components/collection-preview/collection-preview";

const ShopPage = ({collections}) => (
    <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    collections: selectShopData(state),
});

export default connect(mapStateToProps)(ShopPage);
