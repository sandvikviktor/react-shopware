import React from 'react'
import '../../App.css'
import UserHeader from '../../components/orders/UserHeader'
import { useSelector } from 'react-redux'

export default function Manage() {

    const user = useSelector(state => state.user.user)

    return (
        <div>
            <UserHeader user={user} />
        </div>
    )
}
