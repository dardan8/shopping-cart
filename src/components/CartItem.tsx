import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import "./cartitem.css";
import { FaTrashAlt } from "react-icons/fa";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <div className='cart-card-item'>
      <div className='cart-card-item-left'>
        <img src={item.imgUrl} className='card-item-image' />

        <div className='card-item-data-cart'>
          <p className='carditem-data-name'>
            {" "}
            {item.name}{" "}
            {quantity > 1 && (
              <span className='carditem-data-quantity'> x {quantity}</span>
            )}
          </p>

          <p className='carditem-data-price'>{formatCurrency(item.price)}</p>
          <p className='carditem-data-totalprice'>
            {formatCurrency(item.price * quantity)}
          </p>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className='deleteitem-button'
      >
        <FaTrashAlt className='deleteitem-icon' />
      </button>
    </div>
  );
}
