import { SELECTED_PRODUCTS } from './cartTypes'

const initialState = {
  cart: [],
  itemLength:0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCTS: return {
      ...state,
      cart: action.payload,
      itemLength:action.payload.length
    }

    default: return state
  }
}

export default cartReducer
