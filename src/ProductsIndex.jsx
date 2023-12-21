export function ProductsIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>image url? {product.images.url}</p>
          <p>Inventory: {product.inventory}</p>
          <p>Supplier ID: {product.supplier.id}</p>
          <button onClick={() => props.onShowProduct(product)}>See some stuff</button>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
}
