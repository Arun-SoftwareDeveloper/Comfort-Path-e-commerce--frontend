// AddToCart.jsx
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FooterContainer from "./FooterContainer";
import "../Styles/AddToCart.css";

function AddToCart({
  cart,
  setCart,
  calculateTotalPrice,
  setRecipientEmail,
  handleCheckout,
  handleAddToCart,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    // Add conditions to determine when to open the modal
    if (cart.length > 0) {
      setShowModal(true);
    } else {
      // You can show an alert or perform other actions if the cart is empty
      alert("Your cart is empty.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cart-container mt-4">
      <h2>Add to Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>
                {item.name} - ₹{item.price}
              </p>
            </div>
          ))}
          <p className="total-price">Total Price: ₹{calculateTotalPrice()}</p>
          <Button variant="primary" onClick={handleOpenModal}>
            Checkout
          </Button>
        </div>
      )}
      {/* Recipient Email Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Recipient's Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="recipientEmail">Recipient's Email:</label>
            <input
              type="email"
              className="form-control"
              id="recipientEmail"
              onChange={(e) => setRecipientEmail(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Footer Container */}
      <footer className="bg-dark text-white mt-4 footer">
        <div className="container text-center">
          <p className="footer-container">Copyright &copy; Comfort Path 2023</p>
        </div>
      </footer>{" "}
    </div>
  );
}

export default AddToCart;
