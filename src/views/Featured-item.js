import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Shop from '../components/Shop';
import { DataContext } from '../contexts/DataProvider';

export default function FeaturedItem() {
    const [post, setPost] = useState({})
    const { uid, id } = useParams()
    const { getPost } = useContext(DataContext)

    useEffect(() => {
        getPost(uid, id, setPost)
    }, [])

    return (
        <div>
            <h1>Post Single: {id}</h1>
            <Shop post={post} />
        </div>
    )
}