import { Link, NavLink } from "react-router-dom";

export function Header() {
  let loggedInStatus;

  if (localStorage.jwt) {
    loggedInStatus = (
      <Link to="/logout">Log Out</Link>
    )
  } else {
    loggedInStatus = (
      <>
        <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
      </>
    )
  }

  return (
    <header>
      <nav>
       <Link to="/">Home</Link> | <Link to="/newproduct">New Product</Link> | <Link to="/cart">Cart</Link> | <Link to="/orders">Orders</Link> | {loggedInStatus} |
      </nav>
    </header>
  )
}
