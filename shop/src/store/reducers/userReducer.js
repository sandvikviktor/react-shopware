import actionTypes from '../actionTypes'

const isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated')) || false
const isAdmin = JSON.parse(sessionStorage.getItem('isAdmin')) || false

const initState = {
    isAuthenticated: isAuthenticated,
    isAdmin: isAdmin,
    currentUser: {},
    token: ''
}

export default (state = initState, action) => {
    switch(action.type) {
        case actionTypes().user.login:
            state.isAuthenticated = action.payload.auth
            state.currentUser = action.payload.user
            state.token = action.payload.token
            sessionStorage.setItem('isAuthenticated', state.isAuthenticated)
            sessionStorage.setItem('currentUserId', state.currentUser.id)
            sessionStorage.setItem('currentUserName', state.currentUser.name)
            return state

        case actionTypes().user.logout:
            state.isAuthenticated = action.payload
            state.currentUser = {}
            state.token = ''
            sessionStorage.setItem('isAuthenticated', state.isAuthenticated)
            sessionStorage.removeItem("currentUserId")
            sessionStorage.removeItem("currentUserName")
            return state

        default:
            return state
    }
}