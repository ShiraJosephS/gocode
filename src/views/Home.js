import MyContext from "../MyContext";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Products from "../Components/Products/Products";
import Cart from "../Components/Cart/Cart";

function Home() {
  const [productsDetails, setProductsDetails] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [categoriesList, setcategoriesList] = useState([]);

  const [productsByPrice, setProductsByPrice] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((allProducts) => {
        //let allProducts = res.map((p) => ({ ...p, amountInCart: 0 }));
        //console.log(allProducts);
        setProductsDetails(allProducts);
        setProductsByCategory(allProducts);
        setcategoriesList(
          allProducts
            .map((p) => p.category)
            .filter((value, index, array) => array.indexOf(value) === index)
        );
      });
  }, []);

  const categoryChange = (categoryName) => {
    if (categoryName === "Categories") {
      setProductsByCategory(productsDetails);
    } else {
      setProductsByCategory(
        productsDetails.filter((product) => product.category === categoryName)
      );
    }
  };
  const ChangeSlider = (minMaxValues) => {
    setProductsByCategory(
      productsDetails.filter(
        (product) =>
          product.price >= minMaxValues[0] && product.price <= minMaxValues[1]
      )
    );
  };

  return (
    <React.Fragment>
      <div className="App">
        <Header
          categoryList={categoriesList}
          onChangeCategory={categoryChange}
          onChangeSlider={ChangeSlider}
        />
        <Products productsDetails={productsByCategory} />
        <Cart />
      </div>
    </React.Fragment>
  );
}

export default Home;
