import { AiFillStar } from 'react-icons/ai'

export default function Card({ title, description, rating, price }) {
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
      <div className="text-sm font-medium text-block">${price}</div>
    </div>
  )
}
