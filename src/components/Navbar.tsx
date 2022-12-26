import React from 'react'
import "./navbar.css";
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  return (
<nav>
<ul>
    <li>
        <NavLink to="/">
        Home
        </NavLink>
    </li>
    <li>
    <NavLink to="/about">
        About
        </NavLink>
    </li>
    <li>
    <NavLink to="/store">
        Store
        </NavLink>
    </li>

</ul>
<button>
    <FaShoppingCart className='shoppingcart-icon'/>
    <div className='rounded-circle'>3</div>
</button>
</nav>  )
}

