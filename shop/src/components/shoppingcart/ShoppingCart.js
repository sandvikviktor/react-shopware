import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShoppingCartProduct from './ShoppingCartProduct'

export default function ShoppingCart() {

   const shoppingCart = useSelector(state => state.cart.shoppingcart)
   const shoppingCartTotalAmount = useSelector(state => state.cart.totalCartAmount)

   return (
      <div className="min-width">
         {
            shoppingCart.map(product => {
               return (<ShoppingCartProduct item={product} key={product.id} />)
            })
         }
         {
            shoppingCart.length < 1 ?
               <div className="cart-item">
                  <div className="p-2 d-flex justify-content-center align-items-center">
                     <div className="d-flex align-items-center">Din kundvagn är tom.</div>
                  </div>
                  <div className="dropdown-divider"></div>
               </div>
               : ''
         }
         <div className="p-2 d-flex justify-content-between align-items-center">
            <div>
               <div className="total-price ml-2">
                  Totalt: <span className="ml-1">{shoppingCartTotalAmount} SEK</span>
               </div>
               <small className="text-muted ml-2">inkl. moms</small>
            </div>
            {
               shoppingCart.length < 1 ?
               <button className="btn btn-indigo">Gå till Kassan</button>
               :  <Link to="/checkout" >
                     <button className="btn btn-indigo">Gå till Kassan</button>            
                  </Link>
            } 
         </div>
      </div>
   )
}
