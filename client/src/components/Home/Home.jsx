import { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Product from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts,productId } = useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi(`/api/products?populate=*&filters[id][$ne]=${productId}&pagination[start]=0&pagination[limit]=12`).then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  const getCategories = () => {
    fetchDataFromApi(`/api/categories?populate=*`).then((res) => {
      console.log(res);
      setCategories(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          {/* Add id to categories section to target it for scrolling */}
          <section id="categories-section" className="categories-section">
            <Category categories={categories} />
          </section>
          {/* Products section */}
          <Product products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
