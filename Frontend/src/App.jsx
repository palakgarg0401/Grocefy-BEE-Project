import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Cart from "./pages/Cart.jsx";
import WishList from "./pages/WishList.jsx";
import Checkout from "./pages/Checkout.jsx";
import AddAddress from "./pages/AddAddress.jsx";
import MyOrder from "./pages/MyOrder.jsx";
import Navbar from "./components/Navbar.jsx";
import { Toaster } from "react-hot-toast";


const App = () => {

  const adminPath = useLocation().pathname.includes("admin");
  return (
    <>
      <Toaster />
      <div>
        {!adminPath && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/add-address" element={<AddAddress />}></Route>
          <Route path="/my-orders" element={<MyOrder />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App
