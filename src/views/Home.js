import PostList from '../components/ShopList'
import PostForm from '../components/PostForm'
import ImageSlide from '../components/ImageSlide'
import { useContext } from 'react'
import Concert from '../components/ConcertCard'
import { AuthContext } from '../contexts/AuthProvider'
import Poster from '../components/Poster'

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
        <div>
            {/* {
                (user.loggedIn) ?
                    (
                        <>
                            <p className='text-left ml-5 pl-5 mt-2'>Welcome, {user.username}!</p>
                        </>
                    )
                    :
                    ''
            } */}

            <div className="home-bg">
                <ImageSlide />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 bg-home-color">
                        <div className="mb-4">
                            <h2 className="pt-5 mt-5 display-4 font-weight-bold col-md-auto text-start">Featured Items</h2>
                            <div className="my-5">

                                <p className="text my-5">&#9679;</p>

                                <p className="text my-5">&#9679;</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <hr className="container my-5 border-secondary" /> */}

            <div className="container my-5 py-5 ">
                <div className="row border border-dark rounded-lg mid-bg">
                    <div className="col-8 my-5 py-5">
                        <Concert />
                    </div>
                   
                    <div className="col bgf py-5 pr-5">
                        <div className='container border border-secondary poster-bg '>
                            <Poster />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}