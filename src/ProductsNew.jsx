import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function ProductsNew(props) {
  const [suppliers, setSuppliers] = useState([])
  const [images, setImages] = useState([''])
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

  const addImageBox = () => {
    console.log("addImageBox")
    setImages([...images, ''])
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

      {images.map((image) => (
        <>
          <div className="mb-3">
            <label for="image" className="form-label">Image</label>
            <input name="images[]" type="text" className="form-control" id="image" />
          </div>
        </>
      ))}

      <div className="mb-3">
        <select name="supplier" className="form-select" aria-label="Default select example">
          <option selected>Supplier</option>
          {suppliers.map(supplier => (
            <option key={supplier.idf}>{supplier.name}</option>
          ))}
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <button type="submit" class="btn btn-primary" onClick={addImageBox}>More Images</button>

    </div>
  );
}
