import { useContext } from 'react'
import './Product.css'
import { ProductsContext } from '../../../context/products'

export const Product = ({ product }) => {
  const { products, setProducts } = useContext(ProductsContext)

  const handleDelete = () => {
    fetch('https://products-api-dev-mneb.1.ie-1.fl0.io/api/product/' + product._id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        window.alert('Se eliminó la tarea ' + response.product.name)
        setProducts(products.filter(product => product._id !== response.product._id))
      })
  }

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>
        <button>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  )
}
