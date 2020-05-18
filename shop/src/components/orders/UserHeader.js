import React from 'react'
import { Link } from 'react-router-dom'

export default function UserHeader({ user }) {

    const path = window.location.pathname

    return (
        <div id="userHeader" className="d-flex justify-content-center position-relative">
            <div id="userName" className="position-absolute text-white">
                <h4 className="text-capitalize m-0">{user.firstName} {user.lastName}</h4>
                <div>
                    {
                        (() => {
                            switch (path) {
                                case "/manage": return <div><p className="text-muted">Mitt konto</p></div>
                                case "/orders": return <div><p className="text-muted">Mina ordrar</p></div>
                                case `/admin/orders/user/${user.id}`: return <div><p className="text-muted">Orderhantering</p><Link to="/admin/orders"><i className="fas fa-angle-double-left"></i> Tillbaka</Link></div>
                                default: return ''
                            }
                        })()
                    }
                </div>
            </div>

            <div id="profileBorder" className="white">
                <div id="profile" className="d-flex justify-content-center align-items-center">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg" className="rounded-circle" alt="woman avatar"></img>
                </div>
            </div>
        </div>
    )
}
