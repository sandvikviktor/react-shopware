import React, {useEffect} from 'react'
import '../user/Order.css'
import'../../App.css'
import { useDispatch, useSelector } from 'react-redux'
import {updateOrderStatus} from '../../store/actions/orderActions'

export default function AdminUserOrderList({ orders }) {

    const dispatch = useDispatch()

    const statusUpdate = () => {
        dispatch(updateOrderStatus({
            id: orders._id,
            status: 'finished'
        }))
    }

    useEffect(() => {
        // console.log(order);
    }, [orders])


    return (
        <div className="order-item z-depth-1 position-relative">
            <div id="orderItem" className="m-auto overflow">
                <div className="d-flex align-items-center justify-content-center pt-3 px-4">
                    <h6 className="">Ordnr: </h6>
                    <h6 className="text-muted ml-2">{orders._id}</h6>
                </div>                
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
                    {/* <div><span>Status: <span className="font-italic text-muted">Pågående <i className="far fa-clock"></i></span></span></div> */}
                    {
                        orders.status === 'finished'
                        ?   <span>Ordern är slutförd <i className="fas fa-check text-success"></i></span>
                        :   <span><button onClick={statusUpdate}>Markera som klar</button></span>
                    }
                    
                </div>
            </div>
        </div>
    )
}
