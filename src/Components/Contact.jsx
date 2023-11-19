import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Contact.css"; // Assuming you have a stylesheet for the Contact component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formOnClick = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Additional email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address.");
      return;
    }

    try {
      // Simulate a successful form submission
      // Replace this with your actual form submission logic
      // (e.g., using axios to send a POST request)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Error sending message. Please try again.");
    }
  };

  return (
    <div className="container" id="contact">
      <h1 className="Categories-title" style={{ color: "orange" }}>
        Contact
      </h1>
      <form
        className="contact-form"
        action="https://formspree.io/f/mleyzorw"
        method="post"
        // onSubmit={handleFormSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Leave your comment here"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={formOnClick}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
