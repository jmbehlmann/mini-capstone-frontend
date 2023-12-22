export function ProductsIndex(props) {
  return (
    <div>
      <h1>Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
              <img src="..." class="card-img-top" alt="Nice Image!"></img>
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
