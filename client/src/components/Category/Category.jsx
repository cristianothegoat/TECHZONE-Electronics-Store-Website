import "./Category.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";

const Category = () => {
  const { id } = useParams();

  // Fetch products based on category ID
  const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

  // State for the price range filter
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [showFiltered, setShowFiltered] = useState(false); // State to toggle filtered products

  // Filter products based on the selected price range
  const filteredProducts = data?.data?.filter((product) => {
    const productPrice = product?.price || 0;
    return productPrice >= minPrice && productPrice <= maxPrice;
  });

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const toggleFilter = () => {
    setShowFiltered(!showFiltered);
  };

  // Determine if no products exist
  const noProducts = showFiltered ? filteredProducts?.length === 0 : data?.data?.length === 0;

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          {data?.data?.[0]?.categories[0]?.title}
        </div>

        {/* Price Filter Section */}
        <div className="price-filter">
          <label>
            Min Price: 
            <input
              type="number"
              value={minPrice}
              onChange={handleMinPriceChange}
              min="0"
              step="1"
            />
          </label>

          <label>
            Max Price: 
            <input
              type="number"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              min="0"
              step="1"
            />
          </label>

          {/* Toggle Button */}
          <button onClick={toggleFilter}>
            {showFiltered ? "Show All Products" : "Show Filtered Products"}
          </button>
        </div>

        {/* Show message when no products are available */}
        {noProducts ? (
          <div className="no-products-message">
            <p>No such products available in this category.</p>
          </div>
        ) : (
          <div className="product-section">
            {/* Show either filtered or all products based on the toggle */}
            {showFiltered ? (
              <Products innerPage={true} products={{ data: filteredProducts }} />
            ) : (
              <Products innerPage={true} products={{ data: data?.data }} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
