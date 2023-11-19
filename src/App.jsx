import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/NavBar";
import MenShoes from "./Components/MenShoes";
import WomenShoesPage from "./Components/WomenShoes";
import AddToCart from "./Components/AddToCart";
import WishList from "./Components/WishList";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import ForgotPassword from "./Forms/ForgotPassword";
import ResetPassword from "./Forms/ResetPassword";
import Home from "./Components/Home";
import KidsShoes from "./Components/KidsShoes";
import Bill from "./Components/Bill";

function App({ handleToggleWishlist }) {
  const [cart, setCart] = useState([]);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [token, setToken] = useState(null);

  const handleLogin = (userToken) => {
    setToken(userToken);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handleCheckout = () => {
    if (isValidEmail(recipientEmail)) {
      console.log("Checkout successful!");
      setCart([]);
      setRecipientEmail("");
    } else {
      alert("Please enter a valid recipient email!");
    }
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              token ? (
                <Navigate to="/menShoes" />
              ) : (
                <Login onLogin={handleLogin} token={token} />
              )
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route
            path="/resetPassword/:resetToken"
            element={<ResetPassword />}
          />
          <Route
            path="/menShoes"
            element={
              <MenShoes
                setCart={setCart}
                handleAddToCart={handleAddToCart}
                handleToggleWishlist={handleToggleWishlist}
                token={token}
              />
            }
          />
          <Route
            path="/addToCart"
            element={
              <AddToCart
                setCart={setCart}
                cart={cart}
                calculateTotalPrice={calculateTotalPrice}
                setRecipientEmail={setRecipientEmail}
                handleCheckout={handleCheckout}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/wishList"
            element={<WishList handleToggleWishlist={handleToggleWishlist} />}
          />
          <Route
            path="/womenShoes"
            element={
              <WomenShoesPage
                setCart={setCart}
                handleAddToCart={handleAddToCart}
                handleToggleWishlist={handleToggleWishlist}
                token={token}
              />
            }
          />
          <Route
            path="/kidsShoes"
            element={
              <KidsShoes
                setCart={setCart}
                handleAddToCart={handleAddToCart}
                handleToggleWishlist={handleToggleWishlist}
                token={token}
              />
            }
          />
          <Route path="/bill" element={<Bill />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
