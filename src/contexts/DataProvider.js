import { useState, useEffect, useContext, createContext } from 'react'
import { getFirestore, getDoc, getDocs, collection, collectionGroup, doc, addDoc, Timestamp, query, orderBy, deleteDoc } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = function (props) {
    const [posts, setPosts] = useState([])
    const [carts, setCarts] = useState([])
    const { user } = useContext(AuthContext)
    const db = getFirestore()

    // get guitars
    useEffect(() => {

        const getPosts = async function () {
            const collectionRef = collectionGroup(db, 'guitar-shop')
            const q = query(collectionRef, orderBy('dateCreated', 'desc'))
            const collectionSnap = await getDocs(q)

            const postsArr = []

            collectionSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                postsArr.push({
                    ...doc.data(),
                    id: doc.id,
                    uid: doc.ref.parent.parent.id,
                })
            })

            setPosts(postsArr)
        }
        getPosts()
    }, [user])


// get single guitar
    const getPost = async function (uid, id, callback) {

        const docRef = doc(db, "users", uid, "guitar-shop", id)
        const docSnap = await getDoc(docRef)

        const post = {
            ...docSnap.data(),
            id: docSnap.id
        }

        callback(post)
    }
   
    // add to cart function 
    const addCart = async function (id) {
        const itemDoc = doc(db, "users", "in-cart", id)
        await addDoc(itemDoc)
    }


    // need a function to add up items in the cart 



    // delete item from cart

    const removeItem = async (id, uid) => {
        const itemDoc = doc(db, "users", uid, "in-cart", id)
        await deleteDoc(itemDoc)

    }

// get cart items 

    useEffect(() => {

        const getCart = async function () {
            const collectionRef = collectionGroup(db, 'in-cart')
            const q = query(collectionRef, orderBy('dateCreated', 'desc'))
            const collectionSnap = await getDocs(q)

            const cartsArr = []

            collectionSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                cartsArr.push({
                    ...doc.data(),
                    id: doc.id,
                    uid: doc.ref.parent.parent.id,
                })
            })

            setCarts(cartsArr)
        }
        getCart()
    }, [user])



    const addPost = async function (title, body) {
        const post = {
            title: title,
            body: body,
            dateCreated: Timestamp.now()
        }

        const collectionRef = collection(db, 'users', user.uid, 'guitar-shop')
        const docRef = await addDoc(collectionRef, post)

        post.id = docRef.id

        setPosts([post, ...posts])
    }


    const getPokemon = async function (pokemonId, callback) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        const data = await res.json()
        callback(data)
        console.log(data)
    }


    const value = {
        posts: posts,
        carts: carts,
        getPost: getPost,
        getPokemon: getPokemon,
        addPost: addPost,
        addCart: addCart,
        removeItem: removeItem
    }


    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}