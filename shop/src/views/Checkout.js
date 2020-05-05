import '../App.css'
import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveOrder } from '../store/actions/orderActions'
import CheckoutProduct from '../components/checkout/CheckoutProduct'


export default function Checkout() {

    const shoppingCart = useSelector(state => state.cart.shoppingcart)
    const shoppingCartTotalAmount = useSelector(state => state.cart.totalCartAmount)
    const isAuth = useSelector(state => state.user.isAuthenticated)
    // const currentUser = useSelector(state => state.user.currentUser)
    
    let userId = useRef()
    let userName = useRef()

    const dispatch = useDispatch()

    const save = () => {
      dispatch(saveOrder({
        userId: userId,
        userName: userName,
        order: shoppingCart,
        total: shoppingCartTotalAmount
      }))
    }

    useEffect(() => {
      userId = sessionStorage.getItem("currentUserId")
      userName = sessionStorage.getItem("currentUserName")      
    },[userId, userName])

    return (
        <div className="rounded bg-white min-height pt-5">
        <section className="dark-grey-text pt-2">
          <div className="table-responsive overflow">
            <table className="container-fluid table product-table mb-0">
              {/* <!-- Table head --> */}
              <thead className="mdb-color lighten-5 text-center">
                <tr>
                  <th></th>
                  <th className="font-weight-bold">
                    <strong>Produkt</strong>
                  </th>
                  <th className="font-weight-bold">
                    <strong>Färg</strong>
                  </th>
                  <th></th>
                  <th className="font-weight-bold">
                    <strong>Pris</strong>
                  </th>
                  <th className="font-weight-bold">
                    <strong>Antal</strong>
                  </th>
                  <th>
                    <strong>-/+</strong>
                  </th>
                  <th>--</th>
                </tr>
              </thead>
              {/* <!-- /.Table head --> */}
    
              {/* <!-- Table body --> */}
              <tbody>

                {/* <!-- Products --> */}
                {
                    shoppingCart.map(product => {
                        return (<CheckoutProduct item={product} key={product.id}/>)
                    })
                }                
                {/* <!-- Products --> */}

                <tr>
                  <td colSpan="3"></td>
                  <td>
                    <h4>
                        <strong>Totalt:</strong>
                    </h4>
                  </td>
                  <td className="text-right">
                    <h4>
                      <strong>{shoppingCartTotalAmount} SEK</strong>
                    </h4>
                  </td>
                  <td colSpan="3" className="text-right pr-5">
                    {
                      isAuth ?
                      <button 
                      onClick={save}
                      type="button"
                      className="btn btn-green btn-rounded"
                      >Spara Order</button>
                      :
                      <span className="position-relative">
                      <button disabled type="button" className="btn btn-green btn-rounded">Spara Order</button>
                      <p id="saveOrderText" className="position-absolute">Logga in för att spara order.</p>
                      </span>
                    }
                    <button type="button" className="btn btn-indigo btn-rounded">
                      Slutför Köp
                      <i className="fas fa-angle-right right"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              {/* <!-- /.Table body --> */}
            </table>
          </div>
        </section>
      </div>
    )
}
