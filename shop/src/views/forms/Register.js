import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
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
                    <form className="text-center">
                    <p className="h4 mb-4 font-weight-normal">Registrera</p>

                    <div className="form-row mb-4">
                        <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Förnamn"
                        />
                        </div>
                        <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Efternamn"
                        />
                        </div>
                    </div>

                    <input
                        type="text"
                        className="form-control mb-4"
                        placeholder="E-mail"
                    />

                    <input
                        type="password"
                        className="form-control"
                        placeholder="Lösenord"
                    />

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
