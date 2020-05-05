import actionTypes from '../actionTypes'
import axios from 'axios'

export const addProductToCart = (product) => {
    return {
        type: actionTypes().cart.add,
        product
    }
}

export const removeFromCart = (id) => {
    return {
        type: actionTypes().cart.remove,
        id
    }
}

export const deleteFromCart = (id) => {
    return {
        type: actionTypes().cart.delete,
        id
    }
}

export const clearCart = () => {
    return {
        type: actionTypes().cart.clear
    }
}

export const checkOutCart = (cart) => {
    return dispatch => {
        if(cart.length > 0)
            axios.post('http://localhost:9999/api/cart/checkout' + cart)
            .then(res => {
                if(res.status === 200)
                    dispatch(clearCart())
            })
    }
}

