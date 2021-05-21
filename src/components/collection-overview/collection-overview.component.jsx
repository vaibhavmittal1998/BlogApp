import React from "react";
import { connect } from "react-redux";

import { selectShopDataArray } from "../../redux/shop/shop.selector";

import CollectionPreview from "../../components/collection-preview/collection-preview";
import "./collection-overview.styles.scss";

const CollectionOverview = ({collections}) => (
    <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    collections: selectShopDataArray(state),
});

export default connect(mapStateToProps)(CollectionOverview);