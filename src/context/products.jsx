import { createContext, useState } from 'react'

// 1.
export const ProductsContext = createContext()

// 2. Proveer
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState()

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}
