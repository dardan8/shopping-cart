import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import "./index.css";

function App() {
  return (
    <ShoppingCartProvider>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/shopping-cart' element={<Home />} />
          <Route path='/shopping-cart/store' element={<Store />} />
          <Route path='/shopping-cart/about' element={<About />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
