import actionTypes from '../actionTypes'

const initState = []

export default (state = initState, action) => {
    switch(action.type) {
        
        case actionTypes().productCatalog.set:
            state = action.payload
            return state
        
        // case actionTypes().products.set:
        //     state.product = action.payload
        //     return state

        default:
            return state
            
    }
}