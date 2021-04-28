import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firbase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/category'>
        CATEGORY
      </Link>
      <Link className='option' to='/category'>
        CONTACT
      </Link>
      {
        currentUser ? 
        <div className='option' onClick={() => auth.signOut()}>
          SIGNOUT
        </div> :
        <Link className='option' to='signin'>
          SIGNIN
        </Link>
      }
    </div>
  </div>
);

export default Header;
