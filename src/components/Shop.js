import { Link } from 'react-router-dom';


export default function Shop(props) {
    return (
        <div className="card">
            <div className="card-header">
                {
                    (!props.preview) ?
                    (

                         <h2>{ props.shop.guitar }</h2>
                        
                    )
                    :
                    <Link to={`/car/${props.shop.id}`}>{ props.shop.guitar}</Link>
                }
            </div>
            {
                (!props.preview) ?
                (
                    <div className="card-body">
                        <p>{ props.shop.price }</p>
                    </div>
                )
                :
                ''
            }
        </div>
    )
}