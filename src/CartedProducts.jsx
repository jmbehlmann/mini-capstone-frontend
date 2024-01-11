import axios from "axios"
import { useState, useEffect } from "react";


export function CartedProducts() {
  const [cartedProducts, setCartedProducts] = useState([]);

  const handleCartedProducts = () => {
    console.log("handleCartedProducts");
    axios.get("http://localhost:3000/carted_products.json").then((response) => {
      console.log(response.data);
      setCartedProducts(response.data);
    });
  };

  useEffect(handleCartedProducts, [])


  return (
    <div>
      <h1>Your Cart</h1>
      {cartedProducts.map((carted_product) => (
        <div key={carted_product.id}>
          <div className="row">
            <div className="col-6">
              <div className="card mb-6">
                <div className="card-body">
                  <h5 className="card-title">{carted_product.product.name}</h5>
                  <p className="card-text">Price: {carted_product.product.price}</p>
                  <p className="card-text">Quantity: {carted_product.quantity}</p>
                </div>
              </div>
              <br />
            </div>
          </div>

        </div>
      ))}
    </div>



  );
}

          // <h2>{carted_product.product.name}</h2>
          // <h2>{carted_product.product.price}</h2>
          // <h2>{carted_product.quantity}</h2>
