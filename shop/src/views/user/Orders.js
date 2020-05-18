import React from 'react'
import '../../App.css'
import SavedOrders from '../../components/orders/SavedOrders'

export default function Orders() {
    return (
        <div>
            {/* <h1>Aktuella Ordrar</h1> */}
            <SavedOrders />
        </div>
    )
}
