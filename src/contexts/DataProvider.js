import { useState, useEffect, useContext, createContext } from 'react'
import { getFirestore, getDoc, getDocs, collection, collectionGroup, doc, addDoc, Timestamp, query, orderBy } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

// function for getting items from firebase database 

export const DataProvider = function(props) {
    const [products, setProducts] = useState([])
    const db = getFirestore()

    useEffect(() => {

        const getProducts = async function() {
            const collectionRef = collection(db, 'car')
            const collectionSnap = await getDocs(collectionRef)

            const productsArr = []

            collectionSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                productsArr.push({
                    ...doc.data(),
                    id: doc.id
                })
            })

            setProducts(productsArr)
        }
        getProducts()
    }, [])

    const getProduct = async function(id, callback) {

        const docRef = doc(db, "car", id)
        const docSnap = await getDoc(docRef)

        const product = {
            ...docSnap.data(),
            id: docSnap.id
        }

        callback(product)
    }

    const value = {
        products: products,
        getProduct: getProduct
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}