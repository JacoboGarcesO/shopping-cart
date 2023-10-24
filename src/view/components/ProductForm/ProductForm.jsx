import { useContext } from 'react'
import './ProductForm.css'
import { ProductsContext } from '../../../context/products'

export const ProductForm = () => {
  const { products, setProducts } = useContext(ProductsContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    let body = {}
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }

    fetch('https://products-api-dev-mneb.1.ie-1.fl0.io/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(response => {
        window.alert('Se creó correctamente el producto' + response.product.name)
        setProducts([response.product, ...products])
        event.target.reset()
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear producto</h2>
      <fieldset>
        <div>
          <label htmlFor='name'>Nombre: </label>
          <input name='name' type='text' id='name' required />
        </div>
        <div>
          <label htmlFor='category'>Categoría: </label>
          <input name='category' type='text' id='category' required />
        </div>
        <div>
          <label htmlFor='price'>Precio: </label>
          <input name='price' type='number' id='price' required />
        </div>
        <div>
          <label htmlFor='stock'>Unidades disponibles: </label>
          <input name='stock' type='number' id='stock' required />
        </div>
      </fieldset>
      <fieldset className='form__fieldset-textarea'>
        <div>
          <label htmlFor='description'>Descripción: </label>
          <textarea name='description' id='description' cols='30' rows='10' required />
        </div>
      </fieldset>
      <button type='submit'>Crear</button>
    </form>
  )
}
