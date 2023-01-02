import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import "./cartitem.css";

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
      <img src={item.imgUrl} className='card-item-image' />
      <div>
        {item.name}
        {quantity > 1 && <span> x{quantity}</span>}
        <div>{formatCurrency(item.price)}</div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <button
        onClick={() => removeFromCart(item.id)}
        className='deleteitem-button'
      >
        x
      </button>
    </div>
  );
}
