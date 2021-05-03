import React from 'react';
import { Link } from 'react-router-dom';

import { signInWithGoogle } from '../../firebase/firbase.utils';
import { auth } from '../../firebase/firbase.utils';
import CartIcon from "../cart-icon/cart-icon.component";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import { connect } from 'react-redux';

const Header = ({currentUser}) => (
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
      <Link className='option' to='/category'>
        <CartIcon/>
      </Link>
    </div>
  </div>
);
 
const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header);
