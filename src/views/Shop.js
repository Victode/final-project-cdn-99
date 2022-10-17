

// Create mock data containing Guitars, accessories such as Capos, Picks, cases, stands, strings, etc.   

import ShopList from '../components/ShopList'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1>Home</h1>
            {
                (user.loggedIn) ?
                (
                    <>
                        <p>Welcome, { user.username }</p>
                    </>
                )
                :
                ''
            }
            <ShopList />
        </div>
    )
}