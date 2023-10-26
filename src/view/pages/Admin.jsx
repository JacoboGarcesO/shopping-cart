import { useContext } from 'react'
import { Container } from '../components/Container/Container'
import { ProductsList } from '../components/ProductsList/ProductsList'
import { ProductsContext } from '../../context/products'
import { ProductForm } from '../components/ProductForm/ProductForm'
import { useProducts } from '../../hooks/useProducts'

export const Admin = () => {
  const { state } = useContext(ProductsContext)
  useProducts()

  return (
    <Container>
      <ProductForm />
      <ProductsList products={state.products} />
    </Container>
  )
}
