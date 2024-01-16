import axios from "axios"
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';


export function OrdersShow({}) {
  const {orderId} = useParams();
  const [order, setOrder] = useState ({carted_products:[]})


  const getOrder = () => {
    console.log("getting order");
    axios.get(`http://localhost:3000/orders/${orderId}.json`).then((response) => {
      console.log(response.data);
      setOrder(response.data);
    })
  }

  useEffect(getOrder, [])

  return (
    <div>
      <h1>Your Order</h1>
      <div key={order.id}>
        <div className="row">
          <div className="col-6">
            <div className="card mb-6">
              <div className="card-body">
                <h5 className="card-title">Order #{order.id}</h5>
                <p className="card-text">Date: {order.created_at}</p>
                <p className="card-text">Subtotal: {order.subtotal}</p>
                <p className="card-text">Tax: {order.tax}</p>
                <p className="card-text">Total: {order.total}</p>
                {/* loop through products */}
                <p>  -  </p>
                <p>Products in this order:</p>
                {order.carted_products.map(carted_product =>
                  <div key={carted_product.id}>
                    <p>Name: {carted_product.name}</p>
                    <p>Image: :)</p>
                    <p>Price: {carted_product.price}</p>
                    <p>Quantity: {carted_product.quantity}</p>
                    {/* <p>Image: {carted_product.quantity}</p> */}
                    <p>-</p>
                  </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
