import React from 'react'
import './Header.css'
import {FaSearch} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {
  const[{basket}, dispatch] = useStateValue();


  return (
    <div className='header'>
        <Link to='/'>
            <img 
            className='header__logo'
            src='https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png'
            />
        </Link>

        <div className='header__search'>
            <input 
            className='header__searchInput'
            type='text'/>  
            <FaSearch className='header__searchIcon'/>
                   
        </div >

        <div className='header__nav'>
            <Link to="/login">
            <div className='header__option'>
                <span className='header_optionLineOne'>
                    Hello Guest
                </span>
                <span className='header_optionLineTWo'>
                    Sign In
                </span>
            </div>
            </Link>

            <Link to='/Order'>  

            <div className='header__option'>

                <span className='header_optionLineOne'>
                    Returns
                </span>
            
                <span className='header_optionLineTWo'>
                    & Orders
                </span>
            </div>
            </Link>


            <Link to= 'Prime'>
            <div className='header__option'>
                <span className='header_optionLineOne'>
                    Your
                </span>
                <span className='header_optionLineTWo'>
                    Prime
                </span>
            </div>
            </Link>


            <Link to='/checkout'>
                <div className='header_shoppingCart'>
                    <FaShoppingCart/>
                    <span className='cartCount'>{basket?.length}</span>
                </div>
            </Link>
        </div>
    </div>

    
  )
}

export default Header
