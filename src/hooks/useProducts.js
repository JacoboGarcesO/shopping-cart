import { useContext, useEffect } from 'react'
import { ProductsContext } from '../context/products'
import { getProducts } from '../services/products'

export const useProducts = () => {
  const { dispatch } = useContext(ProductsContext)

  useEffect(() => {
    getProducts().then(products => dispatch({ type: 'GET_PRODUCTS', payload: products }))
  }, [])
}
