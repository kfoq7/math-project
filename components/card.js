import { useRouter } from 'next/router'
import { AiFillStar } from 'react-icons/ai'

export default function Card({ id, title, description, rating, price }) {
  const router = useRouter()

  return (
    <div className="bg-white space-y-3 p-4 rounded-lg shadow ">
      <div className="flex items-center space-x-2 text-sm">
        <div className="flex-auto">{title}</div>
        <div className="flex justify-center items-center">
          <div className="p-2">
            <AiFillStar className="text-yellow-500 text-xl" />
          </div>
          <span>{rating.rate}</span>
        </div>
      </div>
      <div className="text-sm text-justify text-gray-700">{description}</div>

      <div className="flex align-center justify-between">
        <div className="text-sm font-medium text-block">${price}</div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => router.push(`/products/${id}`)}
        >
          Inspectionar
        </button>
      </div>
    </div>
  )
}
