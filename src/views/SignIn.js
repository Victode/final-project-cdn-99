import { AuthContext } from "../contexts/AuthProvider"
import { useContext } from 'react';
import { Route, useNavigate, Link } from "react-router-dom";

export default function SignIn() {
    const { login, user, loginN } = useContext(AuthContext)
    let redirect = useNavigate();

    return (
        <div>
            <div className="row">
                <div className="col-5 ml-2 mt-4">
                    <div className="card px-4 py-4  sign-Incard">
                        <h2 className="py-5 my-5 pb-3 text-center font-weight-bold"> Sign In to your Account </h2>
                        <form className="mb-3 mx-5">
                            <input type="email" placeholder="Enter Email" className="form-control mb-3" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </form>
                        <form className="mb-3 mx-5 ">



                            <input type="password" placeholder="Enter Password" className="form-control"
                                id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div className="text-left ml-5 mt-2">
                                <input className="form-check-input " type="checkbox" value="" id="form2Example3" />
                                <label className="form-check-label text-white mt-1" for="form2Example3">
                                    Remember me
                                </label>
                            </div>
                            <Link to="/">
                                <button onClick={loginN} type="submit"
                                    className="btn btn-outline-dark w-50 text-dark mt-5 button-sign mb-2">Sign In
                                </button>
                            </Link>
                            <p className="text-center"> Or log in with your Google Account</p>
                        </form>


                        <Link to="/">
                            <button onClick={login} className="btn btn-secondary w-50">
                                Google login
                            </button>
                        </Link>
                        <p className="mt-4 pt-1">Dont have an Account?</p>
                        <Link to="/register">
                            <button type="submit" className="btn btn-secondary w-50  mb-2 button-sign">
                                Register here
                            </button>
                        </Link>

                    </div>
                </div>
                <div className="col-6 containers">
                    <img width="119%" className="opas-img" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg" />
                    <h1 className="top-right">
                        "Technically, I'm not a guitar player, all I play is truth and emotion.”
                    </h1>
                    <h1 className="top-rights">
                        -Jimi Hendrix
                    </h1>


                </div>
            </div>
        </div>
    )

}
