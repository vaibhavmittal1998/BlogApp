import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CategoryPage from "../category/category.component";

const ShopPage = ({match}) => {
    console.log(match);
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:category`} component={CategoryPage} />
        </div>
    )
};

export default ShopPage;
