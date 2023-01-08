import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import "./shoppingcart.css";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <div>
      {isOpen ? (
        <div className='shoppingcart-container'>
          <div className='shoppingcart-container-header'>
            <h1> Your items: </h1>

            <button onClick={closeCart} className='close-cart'>
              X
            </button>

            <div className='shoppingcart-total'>
              Total:{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </div>
          <div className='shoppingcart-items'>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
