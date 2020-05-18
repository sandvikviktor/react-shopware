import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userRegister } from '../../store/actions/userActions'

export default function Register(props) {

    const dispatch = useDispatch()

    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const admin = useRef()

    const regSubmit = (e) => {
        e.preventDefault()

        if(firstName.current.value === '' || lastName.current.value === '' || email.current.value === '' || password.current.value === '')
            return
    
        if(admin.current.checked) {
            dispatch(userRegister({
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                email: email.current.value,
                role: 'admin',
                password: password.current.value             
           }))
           props.history.replace('/login')
        } else {
            dispatch(userRegister({
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                email: email.current.value,
                role: 'user',
                password: password.current.value             
           }))
           props.history.replace('/login')
        }

    }

    return (
        <div id="register" className="vh-100 w-100 d-flex align-items-center">
            <div className="container my-5 z-10">
            {/* <!--Section: Content--> */}
            <section className="px-md-5 mx-md-5 text-center text-lg-left">
                {/* <!--Grid row--> */}
                <div className="row d-flex grid-row justify-content-center">
                {/* <!--Grid column--> */}
                <div className="col-md-12 col-lg-10 col-xl-6">
                    {/* <!-- Default form register --> */}
                    <form onSubmit={regSubmit} className="text-center">
                    <p className="h4 mb-4 font-weight-normal">Registrera</p>

                    <div className="form-row mb-4">
                        <div className="col">
                        <input
                            name="firstName"
                            ref={firstName}
                            type="text"
                            className="form-control"
                            placeholder="Förnamn"
                            autoComplete="off"
                        />
                        </div>
                        <div className="col">
                        <input
                            name="lastName"
                            ref={lastName}
                            type="text"
                            className="form-control"
                            placeholder="Efternamn"
                            autoComplete="off"
                        />
                        </div>
                    </div>

                    <input
                        name="email"
                        ref={email}
                        type="text"
                        className="form-control mb-4"
                        placeholder="E-mail" 
                        autoComplete="off"
                    />

                    <input
                        name="password"
                        ref={password}
                        type="password"
                        className="form-control"
                        placeholder="Lösenord"
                    />

                    <div className="custom-control custom-checkbox pt-4 mr-auto">
                        <input name="admin" ref={admin} type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                        <label className="custom-control-label" htmlFor="defaultUnchecked">Admin</label>
                    </div>

                    <button className="btn btn-indigo my-4 btn-block" type="submit">Skapa nytt konto</button>
                    <p>
                        <span>Redan registrerad?</span>
                        <Link to="/login"> Logga in här</Link>
                    </p>
                    </form>
                    {/* <!-- Default form register --> */}
                </div>
                {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
            </section>
            {/* <!--Section: Content--> */}
            </div>
        </div>
    )
}
