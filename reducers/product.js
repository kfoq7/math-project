import { useReducer } from 'react'
import { products } from '@/data/products'

const initialState = {
  products,
  default: products
}

const PRODUCT_ACTION_TYPES = {
  SET_DEFAULT_VALUES: 'SET_DEFAULT_VALUES',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT',
  ORDER_BY_PRICE: 'ORDER_BY_PRICE'
}

const UPDATE_STATE_BY_ACTION = {
  [PRODUCT_ACTION_TYPES.SET_DEFAULT_VALUES]: (state, _aciton) => {
    return {
      ...state,
      products: state.default
    }
  },
  [PRODUCT_ACTION_TYPES.ORDER_BY_PRICE]: (state, _action) => {
    const { products } = state
    const productsOrder = [...products].sort((a, b) => a.price - b.price)

    return {
      ...state,
      products: productsOrder
    }
  }
}

const productReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}

export function useProductReducer() {
  const [{ products }, dispatch] = useReducer(productReducer, initialState)

  const orderByPrice = () => {
    dispatch({ type: 'ORDER_BY_PRICE' })
  }

  const restoreOrder = () => {
    dispatch({ type: 'SET_DEFAULT_VALUES' })
  }

  return { products, orderByPrice, restoreOrder }
}
