import actionTypes from '../actionTypes'
import axios from 'axios'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

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

export const userLogout = () => {
    return {
        type: actionTypes().user.logout,
        payload: false
    }
}