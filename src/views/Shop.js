import ShopList from '../components/ShopList'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Link } from 'react-router-dom';


export default function Shop() {
    const { user } = useContext(AuthContext)

    return (

        <div>
            <div className='container'>

                <nav className="navbar navbar-expand-lg navbar-light bg-light my-4 navbar-shop">
                  
                   
                <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/shop">
                                    <a className="nav-link text-white">Electric<span className="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop-acoustic">
                                    <a className="nav-link text-white">Acoustics</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop-ukulele">
                                    <a className="nav-link text-white">Ukulele</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop-accessories">
                                    <a className="nav-link text-white" >Accessories</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ShopList />
            </div>
           

        </div>
    )
}