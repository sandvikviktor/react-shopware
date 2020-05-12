import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersById } from '../../store/actions/orderActions'
import SavedOrdersProduct from './SavedOrdersProduct'

export default function SavedOrders() {

    const dispatch = useDispatch()
    const orderList = useSelector(state => state.orders.orders)

    const id = sessionStorage.getItem("currentUserId")

    useEffect(() => {
        dispatch(getOrdersById(id))
    }, [dispatch, id])

    return (
        <div id="orders" className="vh-100 w-100 container-fluid pt-4">
            <div className="rounded px-0 z-10">
                <div className="order">
                    {
                        orderList.map((order, index) => {
                            return (<SavedOrdersProduct order={order} key={order._id} number={index + 1}/>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
