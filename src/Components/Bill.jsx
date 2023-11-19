import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Bill.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Bill = () => {
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct;
  const [billData, setBillData] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      // Send a request to the server to generate the bill
      fetch("http://localhost:4000/generateBill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedProduct,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setBillData(data.billData);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [selectedProduct]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text("Invoice", 20, 10);
    doc.autoTable({
      head: [["ID", "Description", "Amount"]],
      body: [
        [
          selectedProduct?.id,
          selectedProduct?.name,
          `₹${selectedProduct?.price.toFixed(2)}`,
        ],
      ],
      foot: [
        ["Subtotal", "", `₹${billData?.subtotal}`],
        ["Tax", `(10%)`, `₹${billData?.tax}`],
        ["Total", "", `₹${billData?.total}`],
      ],
    });

    // Save the PDF to the user's device
    doc.save("invoice.pdf");
  };

  if (!selectedProduct) {
    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">Error</h2>
        <p>No product selected for the bill.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
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
          <tr>
            <td>{selectedProduct.id}</td>
            <td>{selectedProduct.name}</td>
            <td>₹{selectedProduct.price.toFixed(2)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Subtotal</td>
            <td>₹{billData?.subtotal}</td>
          </tr>
          <tr>
            <td colSpan="2">Tax ({(10).toFixed(0)}%)</td>
            <td>₹{billData?.tax}</td>
          </tr>
          <tr>
            <td colSpan="2">Total</td>
            <td>₹{billData?.total}</td>
          </tr>
        </tfoot>
      </table>

      <div className="mt-4">
        {/* Download PDF button */}
        <button className="btn btn-primary ml-2" onClick={handleDownloadPDF}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Bill;
