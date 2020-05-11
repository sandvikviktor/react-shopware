import React, { useEffect } from 'react'
import '../../views/user/Order.css'
import'../../App.css'

export default function SavedOrdersProduct({ orders, number }) {
    useEffect(() => {
        // console.log(orders);
    }, [orders])

    return (
        <div className="order-item z-depth-1 position-relative">
            <div id="orderItem" className="m-auto overflow">
                <h4 className="pt-3">Order {number}</h4>
                {
                    orders.products.map(product => {
                        return (
                            <ul id="order-list" key={product.id} className="pt-3 d-flex align-items-center justify-content-between">
                                <li>
                                    <img src={product.image} alt="" className="image-width" />
                                    <span>{product.name}</span>
                                </li>
                                <li className="pr-3">
                                    <span className="mr-3">{product.quantity}st</span>
                                    <span>{product.price} sek</span>
                                </li>
                            </ul>
                        )
                    })
                }

                <div id="order-total-row" className="position-absolute d-flex align-items-center justify-content-between px-5 py-3">
                    <div className="d-flex"><strong>Totalt: {orders.total} SEK</strong></div>
                    <div><span>Status: <span className="font-italic text-muted">Pågående <i className="far fa-clock"></i></span></span></div>
                    {/* <div><span>Status: <span>Slutförd <i className="fas fa-check text-success"></i></span></span></div> */}
                </div>
            </div>
        </div>
    )
}
