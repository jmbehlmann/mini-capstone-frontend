import axios from 'axios'
import { redirect } from "react-router-dom"

export function ProductsShow(props) {

  const addToCart = (event) => {
    console.log('adding to cart')
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post('http://localhost:3000/carted_products.json', params).then(response => {
      console.log(response.data)
      props.onClose()
      window.location.href = `/cart`
    })
    return redirect("/")
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
      <h3>{props.product.name}</h3>
      <p>ID: {props.product.id}</p>
      <p>Price: {props.product.price}</p>
      <p>Inventory: {props.product.inventory}</p>
      <form onSubmit={addToCart}>
        <div>
          <input name="product_id" type="hidden" defaultValue={props.product.id} />
        </div>
        <div>
          Quantity: <input name="quantity" type="text" defaultValue="1"/>
        </div>
      <p></p>
        <button type="submit">Add To Cart</button>
      </form>
      <p></p>

      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <p></p>
        <div>
          Description: <input defaultValue={props.product.description} name="description" type="text" />
        </div>
        <p></p>
        <div>
          Price: <input defaultValue={props.product.price} name="price" type="text" />
        </div>
        <p></p>
        <div>
          Inventory: <input defaultValue={props.product.inventory} name="inventory" type="text" />
        </div>
        <p></p>
        <div>
          Supplier ID: <input defaultValue={props.product.supplier.id} name="supplier_id" type="text" />
        </div>
        <p></p>
        <div>
        <button type="submit">Are you really gonna submit that?</button>
        </div>
        <p></p>
      </form>
      <button onClick={handleClick}>DESTROY!</button>
    </div>
  );
}
