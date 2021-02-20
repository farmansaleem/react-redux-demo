import { SELECTED_PRODUCTS } from './cartTypes'

export const updateCart = (data) => {
  return {
    type: SELECTED_PRODUCTS,
    payload: data
  }
}
