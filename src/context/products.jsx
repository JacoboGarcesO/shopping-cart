import { createContext, useReducer } from 'react'
import { initialState, reducer } from '../reducers/products'

// 1.
export const ProductsContext = createContext()

// 2. Proveer
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  )
}
