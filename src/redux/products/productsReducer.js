import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './productsTypes'

const initialState = {
  loading: false,
  productsList: [],
  error: '',
}

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        productsList: action.payload.data,
        error: ''
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        productsList: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer