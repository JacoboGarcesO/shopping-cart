import { useContext } from 'react'
import './Product.css'
import { ProductsContext } from '../../../context/products'
import { deleteProduct } from '../../../services/products'

export const Product = ({ product }) => {
  const { state, setState } = useContext(ProductsContext)

  const handleDelete = () => {
    deleteProduct(product._id)
      .then(product => {
        window.alert('Se eliminó el producto ' + product.name)
        const filteredProducts = state.products.filter(_product => _product._id !== product._id)
        setState({ ...state, products: filteredProducts })
      })
  }

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>
        <button onClick={() => setState({ ...state, currentProduct: product })}>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  )
}
