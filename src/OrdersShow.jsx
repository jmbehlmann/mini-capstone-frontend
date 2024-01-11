import axios from "axios"
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';


export function OrdersShow({}) {

  const {orderId} = useParams();
  console.log(orderId)

  const [order, setOrder] = useState ({})

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
                  <p className="card-text">Date: </p>
                  <p className="card-text">Subtotal: {order.subtotal}</p>
                  <p className="card-text">Tax: {order.tax}</p>
                  <p className="card-text">Total: {order.total}</p>
                </div>
              </div>
              <br />
            </div>
          </div>

        </div>
      {/* <button className="btn btn-primary" onClick={createOrder}>Checkout</button> */}
    </div>
  )
}
