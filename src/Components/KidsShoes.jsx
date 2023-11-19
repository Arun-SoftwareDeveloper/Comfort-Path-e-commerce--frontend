import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import SearchBar from "../Components/SearchBar";
import FooterContainer from "./FooterContainer";
import CategoriesBar from "./CategoriesBar";
import KidsProducts from "../Products/KidsProducts";
import "../Styles/MenShoes.css";

const KidsShoes = ({ handleAddToCart }) => {
  const [products, setProducts] = useState(KidsProducts);
  const [sortOption, setSortOption] = useState("relevance");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const navigate = useNavigate();

  const handleShowFilterModal = () => setShowFilterModal(true);
  const handleCloseFilterModal = () => setShowFilterModal(false);

  const sortProducts = (option) => {
    let sortedProducts = [...products];
    switch (option) {
      case "relevance":
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
            <p className="card-text price">Price: ₹{product.price}</p>
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

  const handleSortChange = (option) => setSortOption(option);

  const filterProducts = (searchQuery) => {
    const filteredProducts = KidsProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleFilterByPrice = () => {
    let filteredProducts = [...KidsProducts];

    if (minPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= parseInt(minPrice, 10)
      );
    }

    if (maxPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseInt(maxPrice, 10)
      );
    }

    setProducts(filteredProducts);
    handleCloseFilterModal();
  };

  return (
    <div className="container mt-4">
      <h1>Welcome to Comfort Path</h1>
      <p>
        Explore our wide range of products and enjoy a comfortable shopping
        experience.
      </p>

      <CategoriesBar />

      <SearchBar onSearch={filterProducts} />

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

      <div className="mt-2">
        <Button
          className="btn btn-primary ml-2"
          onClick={handleShowFilterModal}
        >
          Filter by Price
        </Button>
        <Modal show={showFilterModal} onHide={handleCloseFilterModal}>
          <Modal.Header closeButton>
            <Modal.Title>Filter by Price Range</Modal.Title>
            <Button variant="secondary" onClick={handleCloseFilterModal}>
              Close
            </Button>
          </Modal.Header>
          <Modal.Body>
            <p>Enter the price range:</p>
            <div>
              <label>Min Price:</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div>
              <label>Max Price:</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </Modal.Body>
          {/* Remove the close button from Modal.Footer if you only want one close button */}
          <Modal.Footer>
            <Button variant="primary" onClick={handleFilterByPrice}>
              Apply Filter
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="row" id="productList">
        {generateProductCards()}
      </div>

      <FooterContainer />
    </div>
  );
};

export default KidsShoes;
