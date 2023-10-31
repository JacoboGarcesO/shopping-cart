export const initialState = {
  products: [],
  currentProduct: null
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_PRODUCT':
      return { ...state, products: [action.payload, ...state.products] }
    case 'UPDATE_PRODUCT': {
      const index = state.products.findIndex(product => product._id === action.payload._id)
      state.products[index] = action.payload
      return { ...state, currentProduct: null }
    }
    case 'GET_PRODUCTS':
      return { ...state, products: action.payload }
    case 'DELETE_PRODUCT':
      return { ...state, products: state.products.filter(product => product._id !== action.payload) }
    case 'SET_CURRENT_PRODUCT':
      return { ...state, currentProduct: action.payload }
    default:
      return state
  }
}
