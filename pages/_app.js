import '@/styles/globals.css'
import { ProductContext } from '@/context/product'
import { useProductReducer } from '@/reducers/product'

export default function App({ Component, pageProps }) {
  const { products, ...rest } = useProductReducer()

  return (
    <ProductContext.Provider value={{ products, ...rest }}>
      <Component {...pageProps} />
    </ProductContext.Provider>
  )
}
