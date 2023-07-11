import { useRouter } from 'next/router'
import { AiFillStar, AiOutlineFileSearch } from 'react-icons/ai'
import Card from '@/components/card'
import TitleSection from '@/components/title-section'
import { useProducts } from '@/hooks/useProducts'

export default function Products() {
  const router = useRouter()
  const { products } = useProducts()

  return (
    <div className="p-2 px-5 h-full bg-gray-200">
      <TitleSection />

      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full rounded-xl">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-2 p-3 text-sm font-semibold tracking-wide text-center">
                ID
              </th>
              <th className="w-10 p-3 text-sm font-semibold tracking-wide text-center">
                Titulo
              </th>
              <th className="w-14 p-3 text-sm font-semibold tracking-wide text-center">
                Descipcion
              </th>
              <th className="w-5 p-3 text-sm font-semibold tracking-wide text-center">
                Precio
              </th>
              <th className="w-2 p-3 text-sm font-semibold tracking-wide text-center">
                Total Ventas
              </th>
              <th className="w-2 p-3 text-sm font-semibold tracking-wide text-center">
                Popularidad
              </th>
              <th className="w-2 p-3 text-sm font-semibold tracking-wide text-center">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map(({ id, title, price, description, rating }) => (
                <tr className="bg-white border-b border-gray-200" key={id}>
                  <td className="p-3 text-sm text-gray-700 text-center">
                    {id}{' '}
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-center">
                    {title}
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-justify">
                    {description}
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-center">
                    ${price}
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-center">
                    {rating.count}
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-center">
                    <div className="flex justify-center items-center">
                      <div className="p-2">
                        <AiFillStar className="text-yellow-500 text-xl" />
                      </div>
                      <span>{rating.rate}</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-center">
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => router.push(`/products/${id}`)}
                        className="flex justify-center items-center space-between text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        <div className="p-2">
                          <AiOutlineFileSearch />
                        </div>
                        <span>Inspecionar</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-4 md:hidden">
        {products &&
          products.map(({ id, title, description, rating, price }) => (
            <Card
              key={id}
              title={title}
              description={description}
              price={price}
              rating={rating}
            />
          ))}
      </div>
    </div>
  )
}
