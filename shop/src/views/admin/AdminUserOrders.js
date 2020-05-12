import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../store/actions/userActions';
import { Link } from 'react-router-dom';

export default function AdminUserOrders({match}) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        dispatch(getUserById(match.params.id))
    }, [dispatch, match.params.id])


    if(user) {
        return (
            <div className="vh-100 container text-center">
                <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-capitalize">{user.firstName} {user.lastName}</h1>
                    <Link to="/admin/orders">Tillbaka</Link>
                </div>
            </div>
        )
    } else {
        return null
    }

}
