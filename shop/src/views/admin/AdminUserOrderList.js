import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../store/actions/userActions';
import AdminUserOrder from './AdminUserOrder';
import { getOrdersById } from '../../store/actions/orderActions';
import UserHeader from '../../components/user/UserHeader';

export default function AdminUserOrders({ match }) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const orderList = useSelector(state => state.orders.orders)

    useEffect(() => {
        dispatch(getUserById(match.params.id))
        dispatch(getOrdersById(match.params.id))
    }, [dispatch, match.params.id])


    if (user) {
        return (
            <div>                
                <UserHeader user={user}/>
                <div className="pt orders vh-100 w-100 container-fluid text-center">

                    <div className="d-flex justify-content-center">
                    <div className="py-3">                            
                            <h2 className="pt-5">Aktuella Ordrar</h2>
                            <div className="order pt-3 mr-3">
                                {
                                    orderList
                                        .filter(order => order.status === 'pending')
                                        .map(orders => {
                                            return (
                                                <AdminUserOrder orders={orders} key={orders._id} />
                                            )
                                        })
                                }
                            </div>
                        </div>
                        <div className="py-3">
                            <h2 className="pt-5">Historiska Ordrar</h2>
                            <div className="order pt-3 ml-3">
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
                    </div>

                   
                </div>
            </div>
        )
    } else {
        return null
    }

}
