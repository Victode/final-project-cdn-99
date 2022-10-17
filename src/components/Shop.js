// import { Link } from 'react-router-dom';


// export default function Shop(props) {
//     return (
//         <div className="card">
//             <div className="card-header">
//                 {
//                     (!props.preview) ?
//                     (

//                          <h2>{ props.shop.guitar }</h2>
                        
//                     )
//                     :
//                     <Link to={`/car/${props.shop.id}`}>{ props.shop.guitar}</Link>
//                 }
//             </div>
//             {
//                 (!props.preview) ?
//                 (
//                     <div className="card-body">
//                         <p>{ props.shop.price }</p>
//                     </div>
//                 )
//                 :
//                 ''
//             }
//         </div>
//     )
// }

import { Link } from 'react-router-dom';

// guitar posts we need the title of the guitar with the price 
// user should be able to click a link or the image picture of the item to transfer them to a page featuring only that item
// Once they are transferred to that page, they should be able add the item to the cart if they choose to
// maybe add a feature where they're able to buy multiple items? we'll see if we got time me

//Setting up the database 
// had a slight hiccup where to place data 


// creating data 
// instead of accessing a data I wrote, i'm only able to access the id that the function from "addPost" creates why is that? im not sure yet 
//  but it's most likely the "get" function is connected to the "add" function id, need to look into it 

export default function Shop(props) {
    return (
        <div className="card">
            <div className="card-header">
                {
                    (!props.preview) ?
                    (
                        <>
                            <p>{ props.post.guitar }</p> 
                            <img src={props.post.image} width="240" height="260"/>
                        </>
                        
                    )
                    :
                    
                    <Link to={`/post/${props.post.uid}/${props.post.id}`}><img src={props.post.image} width="240" height="260"/> { props.post.guitar }  <p>Price: ${ props.post.price }</p></Link>
                }
            </div>
            {
                (!props.preview) ?
                (
                    <div className="card-body">
                        <p>Price: ${ props.post.price } </p>

                    </div>
                )
                :
                ''
            }
        </div>
    )
}