import React from 'react'
import '../user/Order.css'
import { useDispatch } from 'react-redux'
import {updateOrderStatus, deleteOrder} from '../../store/actions/orderActions'

export default function AdminUserOrderList({ orders }) {

    const dispatch = useDispatch()

    const statusUpdate = () => {
        dispatch(updateOrderStatus(orders._id))
        window.location.reload(false)
    }

    const orderDelete = () => {
        dispatch(deleteOrder(orders._id))
        window.location.reload(false)
    }

    return (
        <div className="order-item z-depth-1 position-relative">
            <div id="order-card" className="m-auto overflow">
                <div className="d-flex align-items-center justify-content-center px-4 pt-4">
                    <h6><strong>Ordnr:</strong> </h6>
                    <h6 className="text-muted ml-2"><strong>{orders._id}</strong></h6>
                </div>
                <hr/>
                {
                    orders.products
                    .map(product => {
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
                        orders.status === 'finished'
                        ?   <span className="btn-group-sm">Ordern är slutförd <i className="fas fa-check text-success"></i><button onClick={orderDelete} className="btn btn-red px-3 ml-4"><i className="fas fa-trash"></i></button></span>
                        :   <span><button className="btn btn-sm btn-green" onClick={statusUpdate}>Markera som klar</button></span>
                    }
                    
                </div>
            </div>
        </div>
    )
}
