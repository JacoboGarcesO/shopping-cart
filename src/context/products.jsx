import { createContext, useState } from 'react'

// 1.
export const ProductsContext = createContext()

// 2. Proveer
export const ProductsProvider = ({ children }) => {
  const [state, setState] = useState({
    products: [],
    currentProduct: null
  })

  return (
    <ProductsContext.Provider value={{ state, setState }}>
      {children}
    </ProductsContext.Provider>
  )
}
