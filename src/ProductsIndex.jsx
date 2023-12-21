export function ProductsIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      {props.products.map((products) => (
        <div key={products.id}>
          <h2>{products.name}</h2>
          <p>{products.description}</p>
          <p>Price: {products.price}</p>
          <p>Inventory: {products.inventory}</p>
          <p>Supplier ID: {products.supplier.id}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
