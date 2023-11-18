// MenShoes.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import menProducts from "../Products/MenProducts";
import FooterContainer from "./FooterContainer";
import { Navbar } from "react-bootstrap";
import NavigationBar from "../Components/NavBar";
import "../Styles/MenShoes.css";
import CategoriesBar from "./CategoriesBar";

const MenShoes = ({ handleAddToCart }) => {
  const [products, setProducts] = useState(menProducts);
  const [sortOption, setSortOption] = useState("relevance");
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
            {/* <button
              className={`btn btn-${
                product.isInWishlist ? "danger" : "outline-secondary"
              }`}
              onClick={() => handleToggleWishlist(index)}
            >
              {product.isInWishlist
                ? "Remove from Wishlist"
                : "Add to Wishlist"}
            </button>
            {!product.isInWishlist && (
              <Link to="/wishList">
                <button className="btn btn-primary ml-2">
                  View Men's Shoes
                </button>
              </Link>
            )} */}
          </div>
        </div>
      </div>
    ));
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const filterProducts = (searchQuery) => {
    const filteredProducts = menProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setProducts(filteredProducts);
  };

  const handleToggleWishlist = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      isInWishlist: !updatedProducts[index].isInWishlist,
    };
    setProducts(updatedProducts);
    if (!updatedProducts[index].isInWishlist) {
      navigate("/wishList");
    }
  };

  return (
    <div className="container mt-4">
      {/* <NavigationBar /> */}

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
