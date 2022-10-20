import { AuthContext } from "../contexts/AuthProvider"
import { useContext } from 'react';
import { Route, useNavigate } from "react-router-dom";

export default function SignIn() {
    const { login, user } = useContext(AuthContext)
    let redirect = useNavigate();

    return (
        <>
            <body className="col-md-6 offset-md-3">
                <div className="container black-bg">
                    <header className="row my-5">
                        {/* just for space  */}
                    </header>
                    <main>

                        <div className="row justify-content-md-center ">
                            <div className="col-6">
                                <div className="card px-4 sign-card">
                                    <h3 className="py-2 my-3 mb-4 pb-3 text-center"> Project Guitar </h3>
                                    <form className="mb-3">

                                        <input type="email" placeholder="Enter Email" className="form-control mb-3" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" />
                                    </form>
                                    <form className="mb-3">



                                        <input type="email" placeholder="Enter Password" className="form-control mb-3"
                                            id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <button type="submit"
                                            className="btn btn-outline-dark w-100 text-dark mb-3 button-sign">Sign In</button>
                                    </form>

                                    <p className="text-center"><small> Or log in with your Google Account </small></p>
                                    <button onClick={login} className="btn btn-secondary mb-4">
                                        Google Login
                                    </button>
                                </div>
                            </div>
                        </div>

                    </main>

                    <div className="row justify-content-md-center mt-2">
                        <div className="col-md-auto mb-3">
  
                            <blockquote className="blockquote text-center">
                                <p><small className="signin-color">If you don't have an account</small></p>
                            </blockquote>
              
                    </div>
                    </div>
                    {/* <Route path="/register"> */}
                    
                    {/* </Route> */}

                    <div className="row justify-content-md-center px-5 mb-4">
                        <button type="submit" className="btn btn-outline-dark w-50 button-register text-dark mb-5">Register here</button>
                </div>
                </div>
            </body>

        </>
    )

}
