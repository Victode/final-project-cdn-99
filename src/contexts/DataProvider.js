import { useState, useEffect, useContext, createContext } from 'react'
import { getFirestore, getDoc, getDocs, collection, collectionGroup, doc, addDoc, Timestamp, query, orderBy } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [posts, setPosts] = useState([])
    const [posts2, setPosts2] = useState([])
    const { user } = useContext(AuthContext)
    const db = getFirestore()

    useEffect(() => {
        /* fetch('http://127.0.0.1:5000/api/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
                console.log(data)
            }) */
        const getPosts = async function() {
            const collectionRef = collectionGroup(db, 'guitar-shop')
            // const collectionSnap = await getDocs(collectionRef)
            const q = query(collectionRef, orderBy('dateCreated', 'desc'))
            const collectionSnap = await getDocs(q)

            const postsArr = []

            collectionSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                postsArr.push({
                    ...doc.data(),
                    id: doc.id,
                    uid: doc.ref.parent.parent.id, // Move up the firestore tree to find the user grandparent id
                })
            })

            setPosts(postsArr)
        }
        getPosts()
    }, [user])

    useEffect(() => {
        /* fetch('http://127.0.0.1:5000/api/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
                console.log(data)
            }) */
        const getPosts2 = async function() {
            const collectionRef = collectionGroup(db, 'shop')
            // const collectionSnap = await getDocs(collectionRef)
            const q = query(collectionRef, orderBy('dateCreated', 'desc'))
            const collectionSnap = await getDocs(q)

            const postsArr = []

            collectionSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                postsArr.push({
                    ...doc.data(),
                    id: doc.id,
                    uid: doc.ref.parent.parent.id, // Move up the firestore tree to find the user grandparent id
                })
            })

            setPosts2(postsArr)
        }
        getPosts2()
    }, [user])

    const getPost = async function(uid, id, callback) {

        const docRef = doc(db, "users", uid, "guitar-shop", id)
        const docSnap = await getDoc(docRef)

        const post = {
            ...docSnap.data(),
            id: docSnap.id
        }

        callback(post)
    }
    const getPost2 = async function(uid, id, callback) {

        const docRef = doc(db, "users", uid, "shop", id)
        const docSnap = await getDoc(docRef)

        const post2 = {
            ...docSnap.data(),
            id: docSnap.id
        }

        callback(post2)
    }

    const addPost = async function(title, body) {
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
    const addPost2 = async function(title, body) {
        const post2 = {
            title: title,
            body: body,
            dateCreated: Timestamp.now()
        }

        const collectionRef = collection(db, 'users', user.uid, 'shop')
        const docRef = await addDoc(collectionRef, post2)

        post2.id = docRef.id

        setPosts([post2, ...posts])
    }

    /* const getPokemon = function(pokemonId, callback) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then((res) => res.json())
            .then((data) => {
                callback(data)
                console.log(data)
            })
    } */

    const getPokemon = async function(pokemonId, callback) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        const data = await res.json()
        callback(data)
        console.log(data)
    }

    const value = {
        posts: posts,
        posts2: posts2,
        getPost: getPost,
        getPokemon: getPokemon,
        addPost: addPost,
        addPost2: addPost2,
        getPost2: getPost2
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}