import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

import "./store.css";

const Store = () => {
  return (
    <div className='store-container'>
      {storeItems.map((item) => (
        <StoreItem {...item} />
      ))}
    </div>
  );
};

export default Store;
