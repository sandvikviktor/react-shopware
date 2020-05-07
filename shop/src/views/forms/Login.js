import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userLogin } from '../../store/actions/userActions'


export default function Login(props) {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuthenticated)
    const userEmail = useRef()
    const userPassword = useRef()

    useEffect(() => {
        if (isAuth)
        props.history.replace('/')
    }, [props, isAuth])

    // if (isAuth)
    //     props.history.replace('/')

    const loginSubmit = (e) => {
        e.preventDefault()

        if(userEmail.current.value === '' || userPassword.current.value === '')
            return

        dispatch(userLogin({
            email: userEmail.current.value,
            password: userPassword.current.value
        }))
    }

    return (
        <div id="login" className="vh-100 w-100 d-flex align-items-center">
            <div className="container my-5 z-10">
            {/* <!--Section: Content--> */}
            <section className="px-md-5 mx-md-5 text-center text-lg-left">
                {/* <!--Grid row--> */}
                <div className="row d-flex grid-row justify-content-center">
                {/* <!--Grid column--> */}
                <div className="col-md-12 col-lg-10 col-xl-6">
                    {/* <!-- Default form login --> */}
                    <form onSubmit={loginSubmit} className="text-center">
                    <p className="h4 mb-4 font-weight-normal">Logga in</p>

                    <input
                        name="email"
                        type="email"
                        ref={userEmail}
                        className="form-control mb-4"
                        placeholder="E-mail" 
                        autoComplete="off"
                    />

                    <input
                        name="password"
                        type="password"
                        ref={userPassword}
                        className="form-control mb-4"
                        placeholder="Lösenord"
                        autoComplete="off"
                    />

                    <div className="d-flex justify-content-around">
                        <div>
                        {/* <!-- Forgot password --> */}
                        <Link to="/login" className="font-weight-normal">Glömt lösenord?</Link>
                        </div>
                    </div>

                    {/* <!-- Sign in button --> */}
                    <button className="btn btn-indigo btn-block my-4" type="submit">Logga in</button>

                    {/* <!-- Register --> */}
                    <p>
                        Inte registrerad?
                        <Link to="/register"> Skapa konto här</Link>
                    </p>
                    </form>
                    {/* <!-- Default form login --> */}
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
