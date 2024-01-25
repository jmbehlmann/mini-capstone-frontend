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

        <h5>Order #{order.id}</h5>
        <p>Date: {order.created_at}</p>
        <p>Subtotal: {order.subtotal}</p>
        <p>Tax: {order.tax}</p>
        <p>Total: {order.total}</p>
        {/* loop through products */}
        <p>  -  </p>
        <p>Products in this order:</p>
        {order.carted_products.map(carted_product =>
          <div key={carted_product.id}>
            <p>Name: {carted_product.name}</p>
            <img src={carted_product.images[0].url} width="300" alt="Nice Image!"></img>
            <p>Price: {carted_product.price}</p>
            <p>Quantity: {carted_product.quantity}</p>
            <p>-</p>
          </div>
          )}
      </div>
    </div>
  )
}
