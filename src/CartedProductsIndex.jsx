import axios from "axios"
import { useState, useEffect } from "react";


export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([]);

  const getCartedProducts = () => {
    console.log("handleCartedProducts");
    axios.get("http://localhost:3000/carted_products.json").then((response) => {
      console.log(response.data);
      setCartedProducts(response.data);
    });
  };

  const createOrder = () => {
    console.log("creating order")
    axios.post("http://localhost:3000/orders.json").then ((response) => {
      console.log(response.data)
      window.location.href = `/orders/${response.data.id}`
    })
  }

  useEffect(getCartedProducts, [])


  return (
    <div>
      <h1>Your Cart</h1>
      <button onClick={createOrder}>Checkout</button>
      {cartedProducts.map((carted_product) => (
        <div key={carted_product.id}>
          <h5 >{carted_product.product.name}</h5>
          <img src={carted_product.images[0].url} width="300" alt="Nice Image!"></img>
          <p>Price: {carted_product.product.price}</p>
          <p>Quantity: {carted_product.quantity}</p>


        </div>
      ))}
      {/* <button className="btn btn-primary" onClick={createOrder}>Checkout</button> */}
    </div>
  );
}

