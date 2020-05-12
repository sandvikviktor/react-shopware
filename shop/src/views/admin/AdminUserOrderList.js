import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../store/actions/userActions';
import { Link } from 'react-router-dom';
import AdminUserOrder from './AdminUserOrder';
import { getOrdersById } from '../../store/actions/orderActions';

export default function AdminUserOrders({ match }) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const orderList = useSelector(state => state.orders.orders)

    useEffect(() => {
        dispatch(getUserById(match.params.id))
        dispatch(getOrdersById(match.params.id))
    }, [dispatch, match.params.id])

    useEffect(() => {
        console.log(orderList);
    }, [dispatch, match.params.id, orderList])


    if (user) {
        return (
            <div className="pt text-center">
                <div id="orders" className="vh-100 w-100 container-fluid">
                    <div className="rounded px-0 z-10">
                        <h1 className="text-capitalize">{user.firstName} {user.lastName}</h1>
                        <div className="py-3">
                            <h3 className="pt-4">Aktuella Ordrar</h3>
                            <div className="order pt-3 pb-5">
                            {
                                orderList
                                .filter(order => order.status === 'pending')
                                .map((orders) => {
                                    return (
                                        <AdminUserOrder orders={orders} key={orders._id} />                                         
                                    )
                                })
                            }
                            </div>
                        </div>

                        <div className="py-3">
                            <h3 className="pt-4">Historiska Ordrar</h3>
                            <div className="order pt-3 pb-5">
                            {
                                orderList
                                .filter(order => order.status === 'finished')
                                .map((orders) => {
                                    return (                                            
                                        <AdminUserOrder orders={orders} key={orders._id} />
                                    )
                                })
                            }
                            </div>
                        </div>

                        {/* <Link className="fixed-bottom mb-4" to="/admin/orders">Tillbaka</Link> */}
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

}
