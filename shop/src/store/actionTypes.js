export default () => {
    return {
        productCatalog: {
            set: 'SET_PRODUCTS',
            delete: 'DELETE_PRODUCT'
        },
        
        product: {
            set: 'SET_PRODUCT'
        },

        user: {
            register: 'USER_REG',
            login: 'USER_LOGIN',
            logout: 'USER_LOGOUT',
            isAdmin: 'IS_ADMIN',
            isAuthenticated: 'IS_AUTHENTICATED'
        },

        cart: {
            add: 'ADD_TO_CART',
            remove: 'REMOVE_FROM_CART',
            delete: 'DELETE_FROM_CART',
            checkout: 'CHECKOUT_CART',
            clear: 'CLEAR_CART'
        },
        
        orders: {
            save: 'SAVE_ORDER',
            setById: 'SET_BY_ID',
            delete: 'DELETE_ORDER'
        }
    }
}