import axios from 'axios'
import {
  SELECTED_PRODUCTS,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './productsTypes'


export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest())
    axios
      .get('https://run.mocky.io/v3/e1cfaec9-85cb-4bf1-97b1-e5bb337c0e78')
      .then(response => {
        // response.data is the products
        const products = response.data
        dispatch(fetchProductsSuccess(products))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchProductsFailure(error.message))
      })
  }
}

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}

export const fetchProductsSuccess = products => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export const fetchProductsFailure = error => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}
