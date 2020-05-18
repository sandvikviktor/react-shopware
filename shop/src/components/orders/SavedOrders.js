import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersById } from '../../store/actions/orderActions'
import { getUserById } from '../../store/actions/userActions'
import SavedOrdersProduct from './SavedOrdersProduct'
import UserHeader from './UserHeader'

export default function SavedOrders(props) {

    const dispatch = useDispatch()
    const orderList = useSelector(state => state.orders.orders)
    const user = useSelector(state => state.user.user)

    const id = sessionStorage.getItem("currentUserId")

    useEffect(() => {
        dispatch(getUserById(id))
        dispatch(getOrdersById(id))
    }, [dispatch, id])

    if (user) {
        return (
            <div>
                <UserHeader user={user} />
                <div className="pt orders vh-100 w-100 container-fluid text-center">
                    <div className="py-3">
                        <h2 className="pt-5">Aktuella Ordrar</h2>
                        <div className="order pt-3 mr-3">
                            {
                                orderList
                                    .filter(order => order.status === 'pending')
                                    .map(orders => {
                                        return (<SavedOrdersProduct orders={orders} key={orders._id} />)
                                    })
                            }
                        </div>
                    </div>
                    <div className="py-3">
                        <h2 className="pt-5">Historiska ordrar</h2>
                        <div className="order pt-3 ml-3">
                            {
                                orderList
                                    .filter(order => order.status === 'finished')
                                    .map(orders => {
                                        return (<SavedOrdersProduct orders={orders} key={orders._id} />)
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    else return null
}
