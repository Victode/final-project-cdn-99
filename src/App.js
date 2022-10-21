import './App.css';
import Shop from "./views/Shop";
import Home from "./views/Home";
import PostSingle from "./views/PostSingle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthContext } from './contexts/AuthProvider';
import { useContext } from 'react';
import About from './views/About';
import Cart from './views/Cart';
import Tabs from './views/Tabs';
import SignIn from './views/SignIn';
import Acoustic from './views/ShopAcoustic';
import Ukulele from './views/ShopUkulele';
import Accessories from './views/ShopAccessories';
import Checkout from './views/Checkout';
import Register from './views/Register';

function App() {
    const { logout, user } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-color ">
                <a className="navbar-brand mx-4" href="/">
                    <h3 className="font-weight-bold mt-2 pr-2 web-name"> PROJECT GUITAR </h3>
                </a>
                <div
                    className="collapse navbar-collapse "
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <Link className="nav-link mx-4" to="/">
                            <h6 className="mt-3">Home </h6>
                        </Link>
                        <Link className="nav-link mx-4" to="/shop">
                            <h6 className="mt-3">Shop </h6>
                        </Link>
                        <Link className="nav-link mx-4" to="/about">
                            <h6 className="mt-3">About</h6>
                        </Link>
                        <Link className="nav-link mx-4" to="/tabs">
                            <h6 className="mt-3">Guitar Tabs</h6>
                        </Link>
                    </div>

                    <div className="navbar-nav ml-auto">

                        
                        {user.loggedIn ? (
                            <>
                                <h6 className='mt-3 pt-1 pr-3'> Welcome, {user.username}!</h6>
                                <Link className="nav-link pr-3">
                                    <button onClick={logout} className="btn btn-secondary sign-in-button">
                                        Logout
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link className="nav-link" to="/signin">
                                    <button className="btn btn-secondary mx-1 sign-in-button">
                                        <span>Sign In</span>
                                    </button>
                                </Link>

                            </>
                        )}

                        <div class="vl"></div>
                        <Link className="nav-link mx-2 mr-4 " to="/cart">
                            <button type="button" className="btn cart-logo">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            <div >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post">
                        <Route path=":uid">
                            <Route path=":id" element={<PostSingle />} />
                        </Route>
                    </Route>
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/tabs" element={<Tabs />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/shop-acoustic" element={<Acoustic />} />
                    <Route path="/shop-ukulele" element={<Ukulele />} />
                    <Route path="/shop-accessories" element={<Accessories />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/register" element={<Register />} />


                </Routes>
            </div>
            
            <div className="card bfg">
                <div className=" text-center card-body ">
                    <h2 className="font-weight-bold mt-3 mb-2 text-footer">Become a member today!</h2>
                    <h5 className="font-weight-bold my-4 text-footer">Let's get started</h5>

                    <button className="btn btn-light btn-sm font-weight-bold rounded-lg  px-4 mb-4 mt-1">
                        Upgrade to member
                    </button>
                 
                    <p className="mb-1">&copy; 2016-2022 Project Guitar</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Privacy</a></li>
                        <li className="list-inline-item"><a href="#">Terms</a></li>
                        <li className="list-inline-item"><a href="#">Support</a></li>
                    </ul>
   

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
