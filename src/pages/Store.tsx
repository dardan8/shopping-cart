import "./store.css"

import storeItems from "../data/items.json"
import { StoreItem } from '../components/StoreItem';

const Store = () => {
  console.log(storeItems);

  return (
    <div className='store-container'>
        {storeItems.map(item => (
              <StoreItem {...item}/>
          )
        )}
    </div>
  )
}

export default Store