import actionTypes from '../actionTypes'
import axios from 'axios'

export const saveOrder = (order) => {
    return dispatch => {
        return axios.post('http://localhost:9999/api/orders/saveorder', { userId: order.userId, userName: order.userName, order: order.order, total: order.total, status: order.status })
            .then(res => {
                if (res.status === 201) {
                    console.log("Success");
                    console.log(order);
                }
            })
    }
}

export const getOrdersById = (currentUserId) => {
    return dispatch => {
        return axios.get('http://localhost:9999/api/orders/getorders/' + currentUserId).then(res => {
            dispatch(setOrdersById(res.data))
        })
    }
}

export const setOrdersById = (orders) => {
    return {
        type: actionTypes().orders.setById,
        payload: orders
    }
}

export const updateOrderStatus = (order) => {
    return dispatch => {
        return axios.put('http://localhost:9999/api/orders/updateorder/' + order.id)
            .then(res => {
                if(res.status === 200) {
                    console.log('Order updated');
                    console.log(order);
                }
                else {
                    console.log('Failed to update');
                    console.log(res.status);
                }
            })
    }
}