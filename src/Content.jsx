import axios from 'axios';
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew"
import { Modal } from "./Modal"
import { ProductsShow } from './ProductsShow';

export function Content() {

  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState (false);
  const [currentProduct, setCurrentProduct] = useState({});


  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  };

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  }

  useEffect(handleIndexProducts, [])

  return (
    <main>
      <h1>Welcome to This Mess!</h1>
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <h1>Check this stuff out!</h1>
        <ProductsShow product ={currentProduct} />
      </Modal>
    </main>
  )
}
