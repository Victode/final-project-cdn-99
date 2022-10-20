import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from "react"
import { DataContext } from "../contexts/DataProvider"

export default function Cart(props) {

    const { uid, id } = useParams()
    const { removeItem, addCart } = useContext(DataContext)

    return (
        <div className='container'>
            <div className='row'>
                <div className='container px-5 mx-5'>
                    <div className="col mx-2">
                        <div className="card mb-4">
                            <div className="card-header">
                                <img className="center image" src={props.post.image} width="180" height="200" />
                                <p className="card-title text-center"> {props.post.guitar} </p>
                                <div className="middle">
                                    <div className="text">Inspect guitar</div>
                                </div>
                                <p className="card-text text-center">Price: ${props.post.price}</p>
                            </div>
                            <div className="card-footer">
                                <button onClick={() => { removeItem(id, uid) }} type="button" className="btn btn-secondary btn-sm mx-2"> Remove from Cart </button>
                            </div>
                            <a className='btn btn-secondary' href="/checkout">continue to checkout </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}