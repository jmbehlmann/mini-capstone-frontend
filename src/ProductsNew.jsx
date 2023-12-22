export function ProductsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div>
      {/* <h1>New Product</h1>
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
    </div> */}

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="name" className="form-label">Product Name</label>
        <input name="name" type="text" className="form-control" id="name" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text"></div>
      </div>
      <div className="mb-3">
        <label for="description" className="form-label">Description</label>
        <input name="description" type="text" className="form-control" id="description" />
      </div>
      <div className="mb-3">
        <label for="price" className="form-label">Price</label>
        <input name="price" type="text" className="form-control" id="price" />
      </div>
      <div className="mb-3">
        <label for="inventory" className="form-label">Inventory</label>
        <input name="inventory" type="text" className="form-control" id="inventory" />
      </div>
      <div className="mb-3">
        <label for="supplier_id" className="form-label">Supplier ID</label>
        <input name="supplier_id" type="text" className="form-control" id="supplier_id" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}
