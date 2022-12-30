import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/store'>Store</NavLink>
        </li>
      </ul>
      <button onClick={openCart}>
        <FaShoppingCart className='shoppingcart-icon' />
        <div className='rounded-circle'>{cartQuantity}</div>
      </button>
    </nav>
  );
};
