import "./storeitem.css"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
 id: number,
 name: string,
 price: number,
 imgUrl: string
}


export function StoreItem ({id, name, price, imgUrl}: StoreItemProps) {
   const quantity = 0;
   
    return (
        <div className="card-item">
            <div className="card-image-container">
                <img src={imgUrl} className="card-image"/>
            </div>
            <div className="card-item-data">
                <h1>{name}</h1>
                <h3>{formatCurrency(price)}</h3>
            </div>

            {
                quantity === 0 ?

               ( 
               <><div className="card-item-actions">
                <button className="button-card"> - </button>
                {quantity} in cart
                <button className="button-card"> +</button>
            </div>
            <button className="button-card">Remove</button>
</>
        )
        :
(        <div className="card-item-actions">
    <button>
        Add to Cart
    </button>
    </div>

)       
            }
         </div>
  
    )
}