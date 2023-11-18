import React from "react";
import "../Styles/CategoriesBar.css";
import { Link } from "react-router-dom";

function CategoriesBar() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Link to="/menShoes">
            <p className="text">Men</p>
          </Link>
        </div>
        <div className="col">
          <Link to="/womenShoes">
            <p className="text">Women</p>
          </Link>
        </div>
        <div className="col">
          <Link to="/kidsShoes">
            <p className="text">Kids</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoriesBar;
