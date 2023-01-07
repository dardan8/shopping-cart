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
        <h3>{name}</h3>
        <h1>{formatCurrency(price)}</h1>
      </div>

      {quantity === 0 ? (
        <div className='card-item-actions'>
          <button
            className='addtocart-button'
            onClick={() => increaseCartQuantity(id)}
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <div className='card-item-actions-active'>
          <div className='card-item-actionbtns'>
            <button
              className='actionbutton-card'
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </button>
            <span className='actionbutton-card-text'> {quantity} in cart</span>

            <button
              className='actionbutton-card'
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </button>
          </div>
          <button
            className='delete-button-card'
            onClick={() => removeFromCart(id)}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
