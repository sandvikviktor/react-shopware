import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../store/actions/userActions'

export default function AdminDropdown() {

    const dispatch = useDispatch()

    return (
        <div className="text-center">
            <ul className="user-dropdown list-group list-group-flush p-0">
               <li className="list-group-item">
                  <Link to="/admin">
                     <div>
                        <i className="fas fa-user-shield"></i>
                        <div>Admin</div>
                     </div>
                  </Link>
               </li>
               <li className="list-group-item">
                  <Link to="/admin/orders">
                     <div>
                        <i className="fas fa-clipboard-list"></i>
                        <div>Orderhantering</div>
                     </div>
                  </Link>
               </li>
               <li className="list-group-item">
                  <Link to="/login">
                     <div onClick={() => dispatch(userLogout())}>
                        <i className="fas fa-sign-out-alt"></i>
                        <div>Logga ut</div>
                     </div>
                  </Link>
               </li>
            </ul>
        </div>
    )
}
