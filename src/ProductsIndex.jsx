import { useState } from "react"

export function ProductsIndex(props) {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <h1>Products</h1>
      <p>Search: <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value) } list="names" /> </p>
      <datalist id="names">
        {props.products.map(product => (
          <option key={product.id}>{product.name}</option>
        ))}
      </datalist>
      {props.products.filter(
          product => product.name.toLowerCase()
          .includes(searchTerm.toLowerCase())
        )
        .map((product) => (
        <div key={product.id}>
          <img src={product.images[0].url} width="300"alt="Nice Image!"></img>
            <div>
              <h5 >{product.name}</h5>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Inventory:{product.inventory}</p>
              <button onClick={() => props.onShowProduct(product)}>See some stuff</button>
            </div>
          <br />
        </div>
      ))}
    </div>
  );
}
