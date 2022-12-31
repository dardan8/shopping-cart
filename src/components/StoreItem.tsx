import "./storeitem.css";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className='card-item'>
      <div className='card-image-container'>
        <img src={imgUrl} className='card-image' />
      </div>
      <div className='card-item-data'>
        <h1>{name}</h1>
        <h3>{formatCurrency(price)}</h3>
      </div>

      {quantity === 0 ? (
        <div className='card-item-actions'>
          <button onClick={() => increaseCartQuantity(id)}>Add to Cart</button>
        </div>
      ) : (
        <>
          <div className='card-item-actions'>
            <button
              className='button-card'
              onClick={() => decreaseCartQuantity(id)}
            >
              {" "}
              -{" "}
            </button>
            {quantity} in cart
            <button
              className='button-card'
              onClick={() => increaseCartQuantity(id)}
            >
              {" "}
              +
            </button>
          </div>
          <button className='button-card' onClick={() => removeFromCart(id)}>
            Remove
          </button>
        </>
      )}
    </div>
  );
}
