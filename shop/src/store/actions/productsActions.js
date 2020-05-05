import actionTypes from '../actionTypes'
import axios from 'axios'

// Get Products
export const getProducts = () => {
    return dispatch => {
        return axios.get('http://localhost:9999/api/products').then(res => {
            dispatch(setProducts(res.data))
        })
    }
}
export const getProductById = (id) => {
    return dispatch => {
        return axios.get('http://localhost:9999/api/products/' + id).then(res => {
            dispatch(setProduct(res.data.product))
        })
    }
}

// Set Products
export const setProducts = (products) => {
    return {
        type: actionTypes().productCatalog.set,
        payload: products
    }
}
export const setProduct = (product) => {
    return {
        type: actionTypes().product.set,
        payload: product
    }
}