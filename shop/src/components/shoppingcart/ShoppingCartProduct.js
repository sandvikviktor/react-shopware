import React from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCart, removeFromCart, deleteFromCart } from '../../store/actions/cartActions'

export default function ShoppingCartProduct({item}) {

    const dispatch = useDispatch()

    const cartIncrement = () => {
        dispatch(addProductToCart(item))
    }

    const cartDecrement = () => {
        dispatch(removeFromCart(item.id))
    }

    const cartDelete = () => {
        dispatch(deleteFromCart(item.id))
    }

    return (
        <div className="cart-item">
            <div className="p-2 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={item.image} className="img-fluid image-width" alt="" />
                    <div>
                        <div>
                            <strong>{item.name}</strong>
                        </div>
                        <div>
                            <small>{item.quantity} x {item.price} SEK</small>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="btn-group btn-group-sm" role="group" aria-label="quantity">
                        <button type="button" className="btn btn-grey px-3" onClick={cartDecrement}>-</button>
                        <button
                            type="button"
                            className="btn btn-grey px-3"
                            onClick={cartIncrement}
                        >+</button>
                    </div>

                    <div className="btn-group btn-group-sm">
                        <button
                            className="btn btn-red px-3"
                            onClick={cartDelete}
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="dropdown-divider"></div>
        </div>
    )
}
