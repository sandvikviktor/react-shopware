import React, { useEffect } from 'react'
import '../../views/user/Order.css'

export default function SavedOrdersProduct({ orders }) {

    const orderStatus = orders.status   

    useEffect(() => {
        // console.log(orders);
    }, [orders])

    return (
        <div className="order-item z-depth-1 position-relative">
            <div id="order-card" className="m-auto overflow">
                <div className="d-flex align-items-center justify-content-center px-4 pt-4">
                    <h6><strong>Ordnr:</strong> </h6>
                    <h6 className="text-muted ml-2"><strong>{orders._id}</strong> </h6>
                </div>
                <hr/>
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
                    {
                        orderStatus === 'pending' 
                        ?   <div><span>Status: <span className="font-italic text-muted">Pågående <i className="far fa-clock"></i></span></span></div>
                        :   <div><span>Status: <span>Slutförd <i className="fas fa-check text-success"></i></span></span></div>

                    }
                                        
                </div>
            </div>
        </div>
    )
}
