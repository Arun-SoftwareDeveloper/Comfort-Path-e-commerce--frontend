import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../Styles/Bill.css"; // Import your custom styles

const Bill = () => {
  const items = [
    { id: 1, description: "Item 1", amount: 10000 },
    { id: 2, description: "Item 2", amount: 12000 },
    { id: 3, description: "Item 3", amount: 3000 },
  ];

  const subtotal = items.reduce((total, item) => total + item.amount, 0);
  const taxRate = 0.1; // 10%
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="container mt-4">
      {" "}
      {/* Add Bootstrap container class */}
      <h2 className="text-center mb-4">Invoice</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.description}</td>
              <td>₹{item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Subtotal</td>
            <td>₹{subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="2">Tax ({(taxRate * 100).toFixed(0)}%)</td>
            <td>₹{tax.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="2">Total</td>
            <td>₹{total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Bill;
