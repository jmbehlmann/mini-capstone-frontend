import { useState } from "react"

export function ProductsIndex(props) {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <h1>Products</h1>
      <p>Search: <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value) } lits="names" /> </p>
      {props.products
        .filter(
          product => product.name.toLowerCase()
          .includes(searchTerm.toLowerCase())
        )
        .map((product) => (
        <div key={product.id}>
          <div className="row">
            <div className="col-6">
              <div className="card mb-6">
              <img src={product.images[0].url} className="card-img-top" alt="Nice Image!"></img>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.inventory}</p>
                  <button className="btn btn-primary" onClick={() => props.onShowProduct(product)}>See some stuff</button>
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
