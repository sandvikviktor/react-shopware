import actionTypes from '../actionTypes'
import axios from 'axios'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


// Registrerar en användare
export const userRegister = (user) => {
    return dispatch => {
        return axios.post('http://localhost:9999/api/users/register', user)
            .then(res => {
                if (res.status === 201) {
                    console.log('Success!');
                    history.push('/login')
                }
            })
    }
}


// Loggar in användare
export const userLogin = (user) => {
    return dispatch => {
        return axios.post('http://localhost:9999/api/users/login', { email: user.email, password: user.password })
            .then(res => {
                if (res.status === 200) {
                    dispatch(setUser(res.data))
                }
            })
    }
}
export const setUser = (res) => {
    return {
        type: actionTypes().user.login,
        payload: {
            auth: true,
            user: res.user,
            token: res.token
        }
    }
}


// Loggar ut användare
export const userLogout = () => {
    return {
        type: actionTypes().user.logout,
        payload: false
    }
}


// Hämta alla användare
export const getUsers = () => {
    return dispatch => {
        return axios.get('http://localhost:9999/api/users')
            .then(res => {
                dispatch(setUsers(res.data))
            })
    }
}
export const setUsers = (users) => {
    return {
        type: actionTypes().users.set,
        payload: users
    }
}


// Hämta en användare
export const getUserById = (id) => {
    console.log(id);
    return dispatch => {
        return axios.get('http://localhost:9999/api/users/' + id)
        .then(res => {
            dispatch(setUserById(res.data.user))
        })
    }
}
export const setUserById = (user) => {
    return {
        type: actionTypes().users.setOne,
        payload: user
    }
}

