// import logo from './logo.svg';
// // import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <nav className="flex justify-center space-x-4">
//           <a href="/dashboard" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
//           <link href="/shop" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Shop</link>
//           <a href="/team" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Cart</a>
//           <a href="/team" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Guitar Tabs</a>
//           <a href="/projects" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Login</a>
//           <a href="/reports" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Register</a>
//         </nav>
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="text-3xl font-bold underline">
//           Totally not panicking over this project 
//         </h1>
//       </header>

//     </div>
//   );
// }

// export default App;

import Shop from "./views/Shop";
import Home from "./views/Home";
import FeaturedItem from "./views/Featured-item";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthContext } from './contexts/AuthProvider';
import { useContext } from 'react';

function App() {
    const { login, logout, user } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/shop">
                            Shop
                        </Link>
                    </div>
                    <div className="navbar-nav ml-auto">
                        {user.loggedIn ? (
                            <button
                                onClick={logout}
                                className="btn btn-primary"
                            >
                                Logout
                            </button>
                        ) : (
                            <button onClick={login} className="btn btn-primary">
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post">
                        <Route path=":uid">
                            <Route path=":id" element={<FeaturedItem />} />
                        </Route>
                    </Route>
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
