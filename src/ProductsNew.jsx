export function ProductsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <br/>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <br/>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <br/>
        <div>
          Inventory: <input name="inventory" type="text" />
        </div>
        <br/>
        <div>
          Supplier ID: <input name="supplier_id" type="text" />
        </div>
        <br/>
        <br/>
        <div>
        <button type="submit">Are you really gonna submit that?</button>
        </div>
        <br/>
      </form>
      <hr />
    </div>
  );
}
