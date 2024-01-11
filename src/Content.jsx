import axios from 'axios';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew"
import { Modal } from "./Modal"
import { ProductsShow } from './ProductsShow';
import { Signup } from "./Signup"
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

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

  const handleUpdateProduct = (id, params, successCallback) => {
    console.log("handleUpdatePhoto", params);
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then(response => {
      setProducts(
        products.map((product) => {
          if (product.id === response.data.id) {
            return response.data;
          } else{
            return product;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyProduct = (product) => {
    console.log("handleDestroyProduct", product);
    axios.delete(`http://localhost:3000/products/${product.id}.json`).then ((response) => {
      setProducts(products.filter((p) => p.id !== product.id));
    });
    handleClose();
  };

  useEffect(handleIndexProducts, [])

  return (
    <main>
      <div className="container">
        <h1>Welcome to This Mess!</h1>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogoutLink />} />
          <Route path="/newproduct" element={<ProductsNew onCreateProduct={handleCreateProduct} />} />
        </Routes>
        <ProductsIndex products={products} onShowProduct={handleShowProduct} />
        <Modal show={isProductsShowVisible} onClose={handleClose}>
          <h1>Check this stuff out!</h1>
          <ProductsShow product ={currentProduct} onUpdateProduct={handleUpdateProduct} onDestroyProduct={handleDestroyProduct} />
        </Modal>
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <LogoutLink /> */}
        {/* <ProductsNew onCreateProduct={handleCreateProduct} /> */}
      </div>
    </main>
  )
}
