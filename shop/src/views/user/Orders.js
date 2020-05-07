import React from 'react'
import '../../App.css'
import SavedOrders from '../../components/user/SavedOrders'

export default function Orders() {
    return (
        <div className="pt text-center">
            <h1>Aktuella Ordrar</h1>
            <SavedOrders />
        </div>
    )
}
