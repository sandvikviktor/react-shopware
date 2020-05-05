import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from '../../store/actions/userActions'


export default function UserDropdown() {

   const dispatch = useDispatch()

   const isAuth = useSelector(state => state.user.isAuthenticated)

   return (
      <div className="text-center">
         {
            isAuth ?
            <ul className="list-group list-group-flush p-0">
               <li className="list-group-item">
                  <Link to="/manage">
                     <div>
                        <i className="fas fa-user"></i>
                        <div>Mitt konto</div>
                     </div>
                  </Link>
               </li>
               <li className="list-group-item">
                  <Link to="/orders">
                     <div>
                        <i className="fas fa-clipboard-list"></i>
                        <div>Mina ordrar</div>
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
            : 
            <ul className="list-group list-group-flush">
               <li className="list-group-item">
                  <Link to="/register">
                     <div>
                        <i className="fas fa-user-plus"></i>
                        <div>Registrera</div>
                     </div>
                  </Link>
               </li>
               <li className="list-group-item">
                  <Link to="/login">
                     <div>
                        <i className="fas fa-sign-in-alt"></i>
                        <div>Logga in</div>
                     </div>
                  </Link>
               </li>
            </ul>         
         }         
      </div>
   )
}
