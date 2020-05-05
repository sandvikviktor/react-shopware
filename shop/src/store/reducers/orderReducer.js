import actionTypes from '../actionTypes'

const initState = {
    orders: []
}

export default (state = initState, action) => {
    switch(action.type) {
        case actionTypes().orders.setById:
            state.orders = action.payload
            return state

        default:
            return state
    }
}