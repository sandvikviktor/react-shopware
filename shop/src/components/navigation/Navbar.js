import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShoppingCart from '../shoppingcart/ShoppingCart'
import UserDropdown from '../user/UserDropdown'

export default function Navbar() {

    let cartQuantity = useSelector(state => state.cart.totalCartQuantity)

    return (
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark elegant-color-dark fixed-top">
            <Link to="/" className="navbar-brand mb-1"><i className="fab fa-shopware mr-2"></i>React Shopware</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">Alla Produkter</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/computers" className="nav-link">Datorer</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/smartphones" className="nav-link">Smartphones</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/other" className="nav-link">Övrigt</Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto nav-flex-icons ">
                  {/* <!-- ShoppingCart --> */}
                  <li className="nav-item dropdown">
                      <a
                      href="!#"
                      className="nav-link mr-4"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >
                      {cartQuantity} 
                      <i className="fas fa-shopping-cart"></i>
                      </a>
                      <div id="shopping-cart" className="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">
                        <ShoppingCart />
                      </div>
                  </li>

                  {/* <!-- UserSettings --> */}
                  <li className="nav-item dropdown">
                      <a
                      href="!#"
                      className="nav-link dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >
                      <i className="fas fa-user"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right z-depth-2 px-2">
                        <UserDropdown />
                      </div>
                  </li>
                </ul>
            </div>
        </nav>
    )
}

