import axios from 'axios'

export function ProductsShow(props) {

  const addToCart = (event) => {
    console.log('adding to cart')
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post('http://localhost:3000/carted_products.json', params).then(response => {
      console.log(response.data)
    })
  }

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
      <p>Price: {props.product.price}</p>
      <p>Inventory: {props.product.inventory}</p>

      <form onSubmit={addToCart}>
        <div>
          <input name="product_id" type="hidden" defaultValue={props.product.id} />
        </div>
        <div>
          Quantity: <input name="quantity" type="text" />
        </div>
        <button className="btn btn-primary" type="submit">Add To Cart</button>
      </form>



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
        <button className="btn btn-primary" type="submit">Are you really gonna submit that?</button>
        </div>
        <br/>
      </form>
      <button className="btn btn-primary" onClick={handleClick}>DESTROY!</button>
    </div>
  );
}
