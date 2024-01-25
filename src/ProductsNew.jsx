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
      <div>
        <label for="name" >Product Name</label>
        <input name="name" type="text" id="name" aria-describedby="emailHelp" />
      </div>
      <p></p>
      <div>
        <label for="description" >Description</label>
        <input name="description" type="text" id="description" />
      </div>
      <p></p>
      <div>
        <label for="price" >Price</label>
        <input name="price" type="text" id="price" />
      </div>
      <p></p>
      <div>
        <label for="inventory" >Inventory</label>
        <input name="inventory" type="text" id="inventory" />
      </div>
      <p></p>

      {images.map((image) => (
        <>
          <div>
            <label>Image</label>
            <input name="images[]" type="text" id="image" />
          </div>
        </>
      ))}
      <p></p>

      <div>
        <select name="supplier"  aria-label="Default select example">
          <option selected>Supplier</option>
          {suppliers.map(supplier => (
            <option key={supplier.idf}>{supplier.name}</option>
          ))}
        </select>
      </div>
      <p></p>
      <button type="submit">Submit</button>
    </form>
    <p></p>
    <button type="submit" onClick={addImageBox}>More Images</button>
    </div>
  );
}
