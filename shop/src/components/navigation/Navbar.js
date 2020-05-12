import React, { useEffect } from 'react'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBIcon } from "mdbreact";
import './Nav.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShoppingCart from '../shoppingcart/ShoppingCart'
import UserDropdown from '../user/UserDropdown'
import AdminDropdown from '../user/AdminDropdown';

export default function Navbar() {

    const cartQuantity = useSelector(state => state.cart.totalCartQuantity)
    let isAdmin = useSelector(state => state.user.isAdmin)
    // let isAdmin = JSON.parse(sessionStorage.getItem('isAdmin'))
    // useEffect(() => {
    //     isAdmin = JSON.parse(sessionStorage.getItem('isAdmin'))
    // }, [isAdmin])
    // useEffect(() => {
    //     isAdmin = isAdmin
    // }, [isAdmin])
    

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
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                {cartQuantity} <MDBIcon icon="shopping-cart" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu right basic className="dropdown-default shopping-cart z-depth-2">
                                <ShoppingCart />
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </li>

                    {/* <!-- UserSettings --> */}
                    <li className="nav-item dropdown">
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <i className="fas fa-user"></i>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu right basic className="dropdown-default z-depth-2 px-2">
                                {
                                   isAdmin 
                                   ? <AdminDropdown />
                                   : <UserDropdown />
                                }                                
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

