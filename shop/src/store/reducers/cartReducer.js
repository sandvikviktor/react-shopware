import actionTypes from '../actionTypes'
import jwt from 'jsonwebtoken'
const secretKey = 'c218b83b09494a81bf7afe03e160b1cf'

const initState = {
    shoppingcart: [],
    totalCartQuantity: 0,
    totalCartAmount: 0
}

export default (state = initState, action) => {

    let itemIndex

    switch(action.type) {
        case actionTypes().cart.add:
            try {
                itemIndex = state.shoppingcart.findIndex(product => product.id === action.product.id)

                itemIndex < 0
                    ? state.shoppingcart = [...state.shoppingcart, action.product]
                    : state.shoppingcart[itemIndex].quantity += 1

                state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
                state.totalCartAmount = getTotalAmount(state.shoppingcart)

                localStorage.setItem('c_c218b83b09494a81bf7afe03e160b1cf', jwt.sign(state, secretKey))
            }
            catch {}

            return state
        
        case actionTypes().cart.remove:

            try {
                itemIndex = state.shoppingcart.findIndex(product => product.id === action.id)

                state.shoppingcart[itemIndex].quantity === 1
                    ? state.shoppingcart = state.shoppingcart.filter(item => item.id !== action.id)
                    : state.shoppingcart[itemIndex].quantity -= 1

                state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
                state.totalCartAmount = getTotalAmount(state.shoppingcart)

                localStorage.setItem('c_c218b83b09494a81bf7afe03e160b1cf', jwt.sign(state, secretKey))
            }
            catch {}

            return state

        case actionTypes().cart.delete:
            try {
                state.shoppingcart.forEach(product => {
                    product.quantity = 1
                })
                state.shoppingcart = state.shoppingcart.filter(product => product.id !== action.id)
                state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
                state.totalCartAmount = getTotalAmount(state.shoppingcart)

                // state.product.quantity = 1


                localStorage.setItem('c_c218b83b09494a81bf7afe03e160b1cf', jwt.sign(state, secretKey))
            }
            catch{}
            
            return state

        case actionTypes().cart.clear:
            try {
                state.shoppingcart.forEach(product => {
                    product.quantity = 1
                })

                state.shoppingcart = []
                state.totalCartAmount = 0
                state.totalCartQuantity = 0

                localStorage.removeItem('c_c218b83b09494a81bf7afe03e160b1cf')
            }
            catch {}

            return state

        default: 
            let cart = jwt.decode(localStorage.getItem('c_c218b83b09494a81bf7afe03e160b1cf'))

            if (cart)
                state = cart
                
            return state
    }
}

const getTotalQuantity = (items) => {
    let totalQuantity = 0

    items.forEach(product => {
        totalQuantity += product.quantity
    });

    return totalQuantity
}

const getTotalAmount = (items) => {
    let totalAmount = 0

    items.forEach(product => {
        totalAmount += product.price * product.quantity
    });

    return totalAmount
}