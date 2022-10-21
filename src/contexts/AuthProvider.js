import { createContext, useEffect, useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth'

export const AuthContext = createContext()

export const AuthProvider = function(props) {
    const [user, setUser] = useState({ loggedIn: false })



    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    const login = async function() {
        const result = await signInWithPopup(auth, provider) 

        console.log(result)
    }

    const logout = async function() {
        const result = await signOut(auth)

        console.log(result)
    }
    // create a user
    const createUser = (email, password, username) => {
        return createUserWithEmailAndPassword(auth, email, password, username);
      };
    //login 
    const loginN = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
      }

    useEffect(() => {
        onAuthStateChanged(auth, function(userInfo) {
            if (userInfo) {
                // HANDLE USER LOGGING IN
                setUser({
                    username: userInfo.displayName,
                    email: userInfo.email,
                    uid: userInfo.uid,
                    photoURL: userInfo.photoURL,
                    loggedIn: true
                })
            } else {
                // HANDLE USER LOGGING OUT
                setUser({ loggedIn: false })
            }
        })
    }, [])

    

    const value = {
        login: login,
        loginN:loginN,
        logout: logout,
        createUser:createUser,
        user: user
    }
    

    return (
        <AuthContext.Provider value={value}>
            { props.children }
        </AuthContext.Provider>
    )
}