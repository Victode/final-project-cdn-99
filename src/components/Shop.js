import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from "react"
import { DataContext } from "../contexts/DataProvider"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


// guitar posts we need the title of the guitar with the price 
// user should be able to click a link or the image picture of the item to transfer them to a page featuring only that item
// Once they are transferred to that page, they should be able add the item to the cart if they choose to
// maybe add a feature where they're able to buy multiple items? we'll see if we got time me

//Setting up the database 
// had a slight hiccup where to place data 


// creating data 
// instead of accessing a data I wrote, i'm only able to access the id that the function from "addPost" creates why is that? im not sure yet 
//  but it's most likely the "get" function is connected to the "add" function id, need to look into it 

export default function Post(props) {
    const { uid, id } = useParams()
    const { removeItem, addCart } = useContext(DataContext)


    return (
        <>
            <div div className='container border border-dark pt-4 card-column my-2' >
                <div className='row  flex'>
                    <div className=' px-5 mx-5 '>
                        <div className="  mx-2">
                            <div className="card  mb-4 card-bgs">
                                <div className="card-header ">
                                    {
                                        (!props.preview) ?
                                            (
                                                <>
                                                    <h4>{props.post.guitar}</h4>
                                                    <img className="mt-3" src={props.post.image} width="220" height="260" />

                                                </>

                                            )
                                            :
                                            <Link style={{ color: 'black' }} to={`/post/${props.post.uid}/${props.post.id}`}>
                                                <div className='containers'>
                                                    <img className="center image" src={props.post.image} width="180" height="200" />
                                                    <p className="card-title text-center"> {props.post.guitar}</p>
                                                    <div className="middle">
                                                        <div className="text">Inspect guitar</div>
                                                    </div>
                                                    <p className="card-text text-center">Price: ${props.post.price}</p>
                                                </div>
                                            </Link>
                                    }
                                </div>
                                {
                                    (!props.preview) ?
                                        (
                                            <>
                                                <div className="card-body">
                                                    <h6>Price: ${props.post.price} </h6>
                                                </div>

                                                <div className="card-footer">
                                                    <button onClick={() => { addCart(id) }} type="button" className="btn btn-secondary btn-sm mx-2"> Add to Cart </button>
                                                    <button onClick={() => { removeItem(id, uid) }} type="button" className="btn btn-secondary btn-sm mx-2" > Delete item</button>

                                                </div>

                                            </>
                                        )
                                        :
                                        ''
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

