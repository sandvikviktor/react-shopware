import actionTypes from '../actionTypes'
import axios from 'axios'

export const userLogin = (user) => {
    return dispatch => {
        return axios.post('http://localhost:9999/api/users/login', { email: user.email, password: user.password })
            .then(res => {
                if (res.status === 200) {
                    dispatch(setUser(res.data.user))
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