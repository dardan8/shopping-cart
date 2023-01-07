import "./navbar.css";
import { NavLink } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { useShoppingCart } from "../context/ShoppingCartContext";
import LogoImg from "../../public/assets/images/logo.svg";

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <nav>
      <a href='/'>
        <img src={LogoImg} alt='Logo' className='logo-image'></img>
      </a>
      <ul>
        <li>
          <NavLink to='/shopping-cart'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/shopping-cart/store'>Store</NavLink>
        </li>
      </ul>
      <span className='shoppingcart-span'>
        <RiShoppingCartLine className='shoppingcart-icon' onClick={openCart} />
        <div className='rounded-circle'>{cartQuantity}</div>
      </span>
    </nav>
  );
};
