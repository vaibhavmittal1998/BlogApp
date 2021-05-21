import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCategoryShopData } from "../../redux/shop/shop.selector";

import './category.styles.scss'

const CategoryPage = ({category}) => {
    const { title, items } = category
    return (
        <div className='category-page'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='items'>
            {items
                .map( item => (
                <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    category: selectCategoryShopData(ownProps.match.params.category)(state),
});

export default connect(mapStateToProps)(CategoryPage);
