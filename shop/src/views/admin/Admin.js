import React, { useEffect } from 'react'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBNav, MDBNavItem} from "mdbreact";
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/actions/userActions'
import { Link } from 'react-router-dom'

export default function Admin() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    // useEffect(() => {
    //     console.log(users);
    // }, [users])

    return (
        <div className="vh-100 text-center">
            <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <h1>Admin Page</h1>
            <MDBDropdown>
                <MDBDropdownToggle caret color="outline-black">
                    Välj En Användare
            </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                    <MDBNav className="flex-column font-weight-bold py-1 px-2">
                        {
                            users.map(user => {
                                if(user.role === 'user')
                                    return <MDBNavItem key={user._id}><Link className="black-text" to={`/admin/user/${user._id}`}>{user.firstName} {user.lastName}</Link></MDBNavItem>
                                else 
                                    return ''
                            })
                        }
                    </MDBNav>
                </MDBDropdownMenu>
            </MDBDropdown>
            </div>
        </div>
    )
}
