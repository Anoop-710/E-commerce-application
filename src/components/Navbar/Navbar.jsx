import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import flag from '../../Assets/img/IN.png';
import payment from '../../Assets/img/payment.png';
import {Link} from 'react-router-dom';
import './Navbar.scss';
import { height } from '@mui/system';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img className='img' src={flag} alt="" />
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
 
          <div className="item">
            <Link className="link" to="/products/1">Men</Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/2">Women</Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/3">Kids</Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">Cloth-Corner</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">Home</Link>
          </div>

          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>

          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>

          <div className="item">
            <Link className="link" to="/">Stores</Link>
          </div>

          <div className="icons">
            <SearchRoundedIcon />
            <PersonOutlineRoundedIcon />
            <FavoriteBorderRoundedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar