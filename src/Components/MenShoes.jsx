import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import menProducts from "../Products/MenProducts";
import FooterContainer from "./FooterContainer";
import NavigationBar from "../Components/NavBar";
import CategoriesBar from "./CategoriesBar";
import "../Styles/MenShoes.css";

const MenShoes = ({ handleAddToCart }) => {
  const [products, setProducts] = useState(menProducts);
  const [sortOption, setSortOption] = useState("relevance");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();

  const sortProducts = (option) => {
    let sortedProducts = [...products];
    switch (option) {
      case "relevance":
        // No specific sorting, use the original order
        break;
      case "highest":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "lowest":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    return sortedProducts;
  };

  const generateProductCards = () => {
    const sortedProducts = sortProducts(sortOption);

    return sortedProducts.map((product, index) => (
      <div key={index} className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div
            id={`productCarousel${index}`}
            className="carousel slide"
            data-ride="carousel"
            data-interval="3000"
          >
            <div className="carousel-inner">
              {product.images.map((image, i) => (
                <div
                  key={i}
                  className={`carousel-item${i === 0 ? " active" : ""}`}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Image ${i + 1}`}
                  />
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href={`#productCarousel${index}`}
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href={`#productCarousel${index}`}
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Price: ₹{product.price}</p>
            <p className="card-text">{product.description}</p>
            <Link to="/addToCart">
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const filterProducts = () => {
    let filteredProducts = menProducts;

    // Filter by price range
    if (minPrice !== "" && maxPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= parseInt(minPrice) &&
          product.price <= parseInt(maxPrice)
      );
    }

    // Add more filter options (brands, etc.) as needed

    setProducts(filteredProducts);
  };

  const applyFilters = () => {
    filterProducts();

    // Close the modal after applying filters
    document.getElementById("filterModalClose").click();
  };

  return (
    <div className="container mt-4">
      <h1>Welcome to Comfort Path</h1>
      <p>
        Explore our wide range of products and enjoy a comfortable shopping
        experience.
      </p>
      <CategoriesBar />

      {/* SearchBar */}
      <SearchBar onSearch={filterProducts} />

      {/* Sort options */}
      <div className="btn-group mt-2">
        <button
          type="button"
          className={`btn btn-secondary ${
            sortOption === "relevance" ? "active" : ""
          }`}
          onClick={() => handleSortChange("relevance")}
        >
          Relevance
        </button>
        <button
          type="button"
          className={`btn btn-secondary ${
            sortOption === "highest" ? "active" : ""
          }`}
          onClick={() => handleSortChange("highest")}
        >
          Price (Highest First)
        </button>
        <button
          type="button"
          className={`btn btn-secondary ${
            sortOption === "lowest" ? "active" : ""
          }`}
          onClick={() => handleSortChange("lowest")}
        >
          Price (Lowest First)
        </button>
      </div>

      {/* Filter button */}
      <button
        type="button"
        className="btn btn-secondary ml-2 filter-button"
        data-toggle="modal"
        data-target="#filterModal"
        style={{ width: "100px" }}
      >
        Filter
      </button>

      {/* Filter Modal */}
      <div
        className="modal fade"
        id="filterModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                Filter Options
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Add filter options here */}
              <div className="form-group">
                <label htmlFor="minPrice">Min Price:</label>
                <input
                  type="number"
                  id="minPrice"
                  className="form-control"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="maxPrice">Max Price:</label>
                <input
                  type="number"
                  id="maxPrice"
                  className="form-control"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={applyFilters}
              >
                Apply Filters
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                id="filterModalClose"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product listings container */}
      <div className="row" id="productList">
        {generateProductCards()}
      </div>

      {/* Footer */}
      <FooterContainer />
    </div>
  );
};

export default MenShoes;
