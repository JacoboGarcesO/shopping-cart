import { API_URL } from '../env'

export const getProducts = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(response => response.products)
} // Retorna  [productos...]

export const deleteProduct = (productId) => {
  return fetch(API_URL + '/' + productId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => response.product)
}

export const createProduct = (body) => {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(response => response.product)
}

export const updateProduct = (body) => {
  return fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(response => response.product)
}
