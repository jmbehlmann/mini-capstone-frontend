export function ProductsShow(props) {
  return (
    <div>
      <h3>Bad information</h3>
      <p>Name: {props.product.name}</p>
      <p>ID: {props.product.id}</p>
      <p>Width: {props.product.price}</p>
      <p>Height: {props.product.inventory}</p>
    </div>
  );
}
