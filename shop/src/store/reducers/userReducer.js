import actionTypes from '../actionTypes'

const isAdmin = JSON.parse(sessionStorage.getItem('isAdmin')) || false
const isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated')) || false


const initState = {
    users: [],
    user: {},
    isAuthenticated: isAuthenticated,
    isAdmin: isAdmin,
    currentUser: {},
    token: ''
}

export default (state = initState, action) => {
    switch(action.type) {
        case actionTypes().user.login:

            if(action.payload.user.role === 'admin')
                sessionStorage.setItem('isAdmin', action.payload.auth)

            state.isAuthenticated = action.payload.auth
            state.currentUser = action.payload.user
            state.token = action.payload.token

            sessionStorage.setItem('isAuthenticated', state.isAuthenticated)
            sessionStorage.setItem('currentUserId', state.currentUser.id)
            sessionStorage.setItem('currentUserName', state.currentUser.name)

            return state

        case actionTypes().user.logout:
            state.isAuthenticated = action.payload
            state.isAdmin = action.payload
            state.currentUser = {}
            state.token = ''
            // sessionStorage.setItem('isAuthenticated', state.isAuthenticated)
            // sessionStorage.setItem('isAdmin', state.isAuthenticated)
            sessionStorage.removeItem('isAuthenticated')
            sessionStorage.removeItem('isAdmin')
            sessionStorage.removeItem("currentUserId")
            sessionStorage.removeItem("currentUserName")
            return state


        case actionTypes().users.set:
            state.users = action.payload
            return state
        
        case actionTypes().users.setOne:
            state.user = action.payload
            return state

        default:
            return state
    }
}