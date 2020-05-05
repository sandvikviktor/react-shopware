import actionTypes from '../actionTypes'

const isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated')) || false

const initState = {
    isAuthenticated: isAuthenticated,
    currentUser: {},
    token: ''
}

export default (state = initState, action) => {
    switch(action.type) {
        case actionTypes().user.login:
            state.isAuthenticated = action.payload.auth
            state.currentUser = action.payload.user
            sessionStorage.setItem('isAuthenticated', state.isAuthenticated)
            sessionStorage.setItem('currentUserId', state.currentUser.id)
            sessionStorage.setItem('currentUserName', state.currentUser.name)
            return state

        case actionTypes().user.logout:
            state.isAuthenticated = action.payload
            state.currentUser = {}
            sessionStorage.setItem('isAuthenticated', state.isAuthenticated)
            sessionStorage.removeItem("currentUserId")
            sessionStorage.removeItem("currentUserName")
            return state

        default:
            return state
    }
}