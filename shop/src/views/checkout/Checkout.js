import React, { useEffect } from 'react'
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn } from "mdbreact";
import { useSelector, useDispatch } from 'react-redux'
import { saveOrder } from '../../store/actions/orderActions'
import CheckoutProduct from '../../components/checkout/CheckoutProduct'
import { clearCart } from '../../store/actions/cartActions';


export default function Checkout(props) {

  const shoppingCart = useSelector(state => state.cart.shoppingcart)
  const shoppingCartTotalAmount = useSelector(state => state.cart.totalCartAmount)
  const isAuth = useSelector(state => state.user.isAuthenticated)
  const dispatch = useDispatch()

  useEffect(() => {
    if (shoppingCart.length < 1)
      props.history.replace('/products')
  }, [props, shoppingCart])

  const product = {
    userId: sessionStorage.getItem("currentUserId"),
    userName: sessionStorage.getItem("currentUserName"),
    order: shoppingCart,
    total: shoppingCartTotalAmount,
    status: 'pending'
  }

  const checkout = () => {
    dispatch(saveOrder(product))
    setTimeout(() => dispatch(clearCart()), 3000)    
  }

  return (
    <div className="rounded bg-white min-height pt-5">
      <section className="dark-grey-text pt-2">
        <div className="table-responsive">
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
                  return (<CheckoutProduct item={product} key={product.id} />)
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
                    <MDBPopover
                      placement="left"
                      popover
                      clickable
                      id="popper4"
                    >
                      <MDBBtn onClick={checkout} className="btn-indigo">
                        Slutför Köp
                        <i className="fas fa-angle-right right"></i>
                      </MDBBtn>
                      <div>
                        <MDBPopoverHeader>Du har lagt en order!</MDBPopoverHeader>
                        <MDBPopoverBody>
                          Gå till mina ordrar för att se dina aktuella ordrar.
                        </MDBPopoverBody>
                      </div>
                    </MDBPopover>
                    :
                    <MDBPopover
                    placement="left"
                    popover
                    clickable
                    id="popper4"
                  >
                    <MDBBtn className="btn-indigo">
                      Slutför Köp
                      <i className="fas fa-angle-right right"></i>
                    </MDBBtn>
                    <div>
                      <MDBPopoverHeader>Du måste vara inloggad!</MDBPopoverHeader>
                      <MDBPopoverBody>
                        Skapa ett konto eller logga in för att fortsätta.
                      </MDBPopoverBody>
                    </div>
                   </MDBPopover>
                  }

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
