import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function ProductsNew(props) {
  const [suppliers, setSuppliers] = useState([])
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
    navigate('/');
  };

  const suppliersIndex = () => {
    console.log("suppliersIndex")
    axios.get(`http://localhost:3000/suppliers.json`)
      .then((response) => {
        setSuppliers(response.data)
      })
  }

  useEffect(suppliersIndex, [])

  return (
    <div>

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
        <select name="supplier" className="form-select" aria-label="Default select example">
          <option selected>Supplier</option>
          {suppliers.map(supplier => (
            <option>{supplier.name}</option>
          ))}
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}
