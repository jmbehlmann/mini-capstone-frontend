export function ProductsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  }

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div>
      <h3>Bad information</h3>
      <p>Name: {props.product.name}</p>
      <p>ID: {props.product.id}</p>
      <p>Width: {props.product.price}</p>
      <p>Height: {props.product.inventory}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <br/>
        <div>
          Description: <input defaultValue={props.product.description} name="description" type="text" />
        </div>
        <br/>
        <div>
          Price: <input defaultValue={props.product.price} name="price" type="text" />
        </div>
        <br/>
        <div>
          Inventory: <input defaultValue={props.product.inventory} name="inventory" type="text" />
        </div>
        <br/>
        <div>
          Supplier ID: <input defaultValue={props.product.supplier.id} name="supplier_id" type="text" />
        </div>
        <br/>
        <br/>
        <div>
        <button type="submit">Are you really gonna submit that?</button>
        </div>
        <br/>
      </form>
      <button onClick={handleClick}>DESTROY!</button>
    </div>
  );
}
