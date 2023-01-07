import { Link } from "react-router-dom";

import "./home.css";
import HeroImage from "../../public/images/hero-image.png";

const Home = () => {
  return (
    <div className='home-container'>
      <div className='left'>
        <h1>Shop your favorite tech gadgets at the best price</h1>
        <h3>
          A wide selection of all the technology tools you need to enhance your
          daily work. 100% authentic products at the best price.
        </h3>
        <Link to='/shopping-cart/store'>
          <button className='shop-button-primary'>Go to Store</button>
        </Link>
      </div>
      <div className='right'>
        <Link to='/shopping-cart/store'>
          <img
            src={HeroImage}
            alt='iPhone mockup from uimaterial.com/mockups'
            className='hero-image'
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
