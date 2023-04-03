import React from 'react'
import { Link } from 'react-router-dom'
import CartBlock from './../cart-block/cart-block';
import './../header/header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="wrapper">
            <Link to="/" className='header__store-title'>
                Store
            </Link>
            <div className='wrapper header__cart-btn-wrapper'>
                <CartBlock />
            </div>
        </div>
    </div>
  )
}

export default Header