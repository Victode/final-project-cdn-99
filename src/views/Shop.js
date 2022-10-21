import ShopList from '../components/ShopList'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'


export default function Shop() {
    const { user } = useContext(AuthContext)

    return (

        <div>
            <div className='container'>

                <nav className="navbar navbar-expand-lg navbar-light bg-light my-4 navbar-shop">
                  
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link text-white" href="/shop">Electric<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/shop-acoustic">Acoustics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/shop-ukulele">Ukulele</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/shop-accessories">Accessories</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ShopList />
            </div>
           

        </div>
    )
}