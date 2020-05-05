import actionTypes from '../actionTypes'

const initState = {}

export default (state = initState, action) => {
    switch(action.type) {
        case actionTypes().product.set:
            state = action.payload
            return state

        default:
            return state
    }
}