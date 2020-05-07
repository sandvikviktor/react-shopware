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
                   history.replace('/login')
                }
            })
    }
}

export const userLogin = (user) => {
    return dispatch => {
        return axios.post('http://localhost:9999/api/users/login', { email: user.email, password: user.password })
            .then(res => {
                if (res.status === 200) {
                    dispatch(setUser(res.data.user))
                    // history.push('/')
                    // console.log(res.data.user);
                }
            })
    }
}

export const setUser = (userRes) => {
    // console.log(userRes);
    return {
        type: actionTypes().user.login,
        payload: {
            auth: true,
            user: userRes
        }
    }
}

export const userLogout = () => {
    return {
        type: actionTypes().user.logout,
        payload: false
    }
}