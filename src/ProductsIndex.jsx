export function ProductsIndex(props) {
  return (
    <div>
      <h1>Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <div className="row">
            <div className="col-6">
              <div className="card mb-6">
              <img src="..." className="card-img-top" alt="Nice Image!"></img>
              {/* <img src={product.images[0].url} Name="card-img-top" alt="Nice Image!"></img> */}
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
