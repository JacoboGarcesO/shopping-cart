import { useContext } from 'react'
import './ProductForm.css'
import { ProductsContext } from '../../../context/products'
import { createProduct, updateProduct } from '../../../services/products'

export const ProductForm = () => {
  const { state, setState } = useContext(ProductsContext)

  const text = state.currentProduct ? 'Actualizar' : 'Crear'

  const handleSubmit = (event) => {
    event.preventDefault()
    let body = {}
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }

    state.currentProduct ? update(body, event) : create(body, event)
  }

  const create = (body, event) => {
    createProduct(body)
      .then(product => {
        window.alert('Se creó correctamente el producto' + product.name)
        setState({ ...state, products: [product, ...state.products] })
        event.target.reset()
      })
  }

  const update = (body, event) => {
    updateProduct({ ...body, _id: state.currentProduct._id })
      .then(product => {
        window.alert('Se actualizó correctamente el producto' + product.name)
        const index = state.products.findIndex(_product => _product._id === product._id)
        state.products[index] = product
        setState({ ...state, currentProduct: null })
        event.target.reset()
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{text} producto</h2>
      <fieldset>
        <div>
          <label htmlFor='name'>Nombre: </label>
          <input name='name' type='text' id='name' required defaultValue={state.currentProduct ? state.currentProduct.name : ''} />
        </div>
        <div>
          <label htmlFor='category'>Categoría: </label>
          <input name='category' type='text' id='category' required defaultValue={state.currentProduct ? state.currentProduct.category : ''} />
        </div>
        <div>
          <label htmlFor='price'>Precio: </label>
          <input name='price' type='number' id='price' required defaultValue={state.currentProduct ? state.currentProduct.price : ''} />
        </div>
        <div>
          <label htmlFor='stock'>Unidades disponibles: </label>
          <input name='stock' type='number' id='stock' required defaultValue={state.currentProduct ? state.currentProduct.stock : ''} />
        </div>
      </fieldset>
      <fieldset className='form__fieldset-textarea'>
        <div>
          <label htmlFor='description'>Descripción: </label>
          <textarea name='description' id='description' cols='30' rows='10' required defaultValue={state.currentProduct ? state.currentProduct.description : ''} />
        </div>
      </fieldset>
      <button type='submit'>{text}</button>
    </form>
  )
}
