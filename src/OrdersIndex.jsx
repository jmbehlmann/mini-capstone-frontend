import axios from "axios"
import {useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"


export function OrdersIndex() {
  const navigate = useNavigate();
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
          <h5 className="card-title">Order #{order.id}</h5>
          <p className="card-text">Date: </p>
          <p className="card-text">Total: {order.total}</p>
          <Link to={`/orders/${order.id}`}>
            <button>Order Details</button>
          </Link>
        </div>
      ))}
    </div>
  )
}
