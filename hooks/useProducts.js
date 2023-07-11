import { useContext } from 'react'
import { ProductContext } from '@/context/product'
import { multiplyMatrix } from '@/services/products'

export function useProducts() {
  const context = useContext(ProductContext)

  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider')
  }

  const { products, ...restContext } = context

  const calculatePrice = matrix => {
    return multiplyMatrix(matrix)
  }

  const findProduct = id => {
    return products.find(product => product.id === parseInt(id))
  }

  return { products, findProduct, calculatePrice, ...restContext }
}
