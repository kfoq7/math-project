import { useProducts } from '@/hooks/useProducts'

export default function TitleSection() {
  const { orderByPrice, restoreOrder } = useProducts()

  return (
    <div className="pb-2 mx-auto flex flex-wrap items center justify-between">
      <h1 className="text-xl mt-2">Lista de productos</h1>

      <div className="pt-2 w-full md:block md:w-auto">
        <button
          type="button"
          onClick={orderByPrice}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Mayor Precio
        </button>
        <button
          type="button"
          onClick={restoreOrder}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Restaurar
        </button>
      </div>
    </div>
  )
}
