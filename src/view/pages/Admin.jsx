import { useEffect, useContext } from 'react'
import { Container } from '../components/Container/Container'
import { ProductsList } from '../components/ProductsList/ProductsList'
import { ProductsContext } from '../../context/products'

export const Admin = () => {
  const { products, setProducts } = useContext(ProductsContext)
  // Se ejecuta al cargar el componente
  // Se ejecuta mínimo 1 vez y de ahí palante, todas las que quieran
  useEffect(() => {
    // Retorna una promesa
    // Trato especial
    fetch('https://products-api-dev-mneb.1.ie-1.fl0.io/api/product')
      .then(response => response.json())
      .then(response => setProducts(response.products))
  }, [])

  return (
    <Container>
      <ProductsList products={products} />
    </Container>
  )
}
