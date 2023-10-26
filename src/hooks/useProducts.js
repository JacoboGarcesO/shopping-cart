import { useContext, useEffect } from 'react'
import { ProductsContext } from '../context/products'
import { getProducts } from '../services/products'

export const useProducts = () => {
  const { state, setState } = useContext(ProductsContext)

  useEffect(() => {
    getProducts().then(products => setState({ ...state, products }))
  }, [])
}
