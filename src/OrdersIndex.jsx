import axios from "axios"
import {useState, useEffect} from "react"


export function OrdersIndex() {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    console.log("getting orders");
    axios.get("http://localhost:3000/orders.json").then((response) => {
      console.log(response.data);
      setOrders(response.data);
    })
  }

  useEffect(getOrders, [])

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <div className="row">
            <div className="col-6">
              <div className="card mb-6">
                <div className="card-body">
                  <h5 className="card-title">Order #{order.id}</h5>
                  <p className="card-text">Date: </p>
                  <p className="card-text">Total: {order.total}</p>
                  <button className="btn btn-primary">Order Details</button>
                </div>
              </div>
              <br />
            </div>
          </div>

        </div>
      ))}
      {/* <button className="btn btn-primary" onClick={createOrder}>Checkout</button> */}
    </div>
  )
}
