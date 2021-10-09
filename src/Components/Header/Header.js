import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
const Header = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
   <a className="navbar-brand name" href="#" style={{fontSize:"25px"}}>LeoShop</a> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Category</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      
    </ul>
    <div className="nav__icons">
              <a href="#" className="icon__item">
                <PersonAddIcon></PersonAddIcon>
              </a>
  
              <a href="#" className="icon__item">
                <SearchIcon></SearchIcon>
              </a>
  
              <a href="#" className="icon__item">
                <ShoppingCartIcon></ShoppingCartIcon>
                <span id="cart__total">0</span>
              </a>
            </div>
  </div>
</nav>
        
    )
}

export default Header

