import PostList from '../components/ShopList'
import PostForm from '../components/PostForm'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Shop() {
    const { user } = useContext(AuthContext)

    return (

        <div>
            <div className='container'>

                <nav class="navbar navbar-expand-lg navbar-light bg-light my-4">
                  
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/shop">Electric<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/shop-acoustic">Acoustics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/shop-ukulele">Ukulele</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/shop-accessories">Accessories</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <PostList />
            </div>
            <h1 className="text-center my-5">Shopping Page</h1>
            {
                (user.loggedIn) ?
                    (
                        <>
                            <p className="text-center">Welcome, {user.username}</p>
                        </>
                    )
                    :
                    ''
            }

        </div>
    )
}