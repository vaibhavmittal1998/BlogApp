import React from 'react';
import { Link } from 'react-router-dom';

import { signInWithGoogle } from '../../firebase/firbase.utils';
import { auth } from '../../firebase/firbase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import { connect } from 'react-redux';

const Header = ({currentUser, showCartDropdown}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/category'>
        CATEGORY
      </Link>
      {/* <Link className='option' to='/category'>
        CONTACT
      </Link> */}
      {
        currentUser ? 
        <div className='option' onClick={() => auth.signOut()}>
          SIGNOUT
        </div> :
        <div className='option' onClick={() => signInWithGoogle()}>
        SIGNIN
      </div>
      }
        <CartIcon />
    </div>
    {
      showCartDropdown ?
      <CartDropdown /> : 
      null
    }
  </div>
);
 
const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  showCartDropdown: state.cartIcon.showCartDropdown
});

export default connect(mapStateToProps)(Header);
