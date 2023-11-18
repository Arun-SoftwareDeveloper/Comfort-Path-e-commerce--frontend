import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/NavBar";
import AboutContainer from "./Components/AboutContainer";
import MainContainerCourosel from "./Components/MainContainerCourosel";
import MenShoes from "./Components/MenShoes";
import AddToCart from "./Components/AddToCart";
import WishList from "./Components/WishList";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import ForgotPassword from "./Forms/ForgotPassword";
import ResetPassword from "./Forms/ResetPassword";
import Home from "./Components/Home";

function App({ handleToggleWishlist }) {
  const [cart, setCart] = useState([]);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [token, setToken] = useState(null);

  const handleLogin = (userToken) => {
    setToken(userToken);

    toast.success("User is logged in with token", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
