import React from 'react';
import { addCartItem } from '../../redux/cart/cart.actions';

import { connect } from 'react-redux';

import CustomButton from "../custom-button/custom-button.component";

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
  const {imageUrl, name, price} = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
