import { Link, NavLink } from "react-router-dom";

export function Header() {
  let loggedInStatus;

  if (localStorage.jwt) {
   loggedInStatus = (
    <Link to="/logout">Log Out</Link>



    // <>
    //   <li className="nav-item">
    //     <NavLink className="nav-link" to="/logout">Log Out</NavLink>
    //   </li>
    // </>
    )
  } else {
    loggedInStatus = (
      <>
        <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
      </>



    // <>
    //   <li className="nav-item">
    //     <NavLink className="nav-link" to="/login" >Login</NavLink>
    //   </li>
    //   <li className="nav-item">
    //     <NavLink className="nav-link" to="/signup">Sign Up!</NavLink>
    //   </li>
    // </>
    )
  }

  return (
    <header>
      <nav>
       <Link to="/">Home</Link> | <Link to="/newproduct">New Product</Link> | <Link to="/cart">Cart</Link> | <Link to="/orders">Orders</Link> | {loggedInStatus} |
      </nav>
    </header>




    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">Navi-Gator</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/cart">Cart</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/orders">Orders</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/newproduct">New Product</NavLink>
    //         </li>
    //         {/* <li className="nav-item">
    //           <NavLink className="nav-link" to="/chart">You want a chart?</NavLink>
    //         </li> */}

    //         {loggedInStatus}


    //       </ul>
    //       <form className="d-flex" role="search">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  )
}
