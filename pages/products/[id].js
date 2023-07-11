import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { AiFillStar } from 'react-icons/ai'
import Paragrah from '@/components/paragrah'
import { useProducts } from '@/hooks/useProducts'

export default function ProductDetail() {
  const [price, setPrice] = useState([])
  const router = useRouter()
  const { findProduct, calculatePrice } = useProducts()

  const product = findProduct(router.query.id)
  console.log(product)
  const handleCalculatePrice = () => {
    const { prices, rating } = product.previous

    const result = calculatePrice({
      matrix1: [prices.lastMonth, prices.currentMonth],
      matrix2: [rating.count.lastMonth, rating.count.currentMonth]
    })

    console.log({ result })

    setPrice(result)
  }

  return (
    <div className="p-5 w-full h-screen bg-gray-100 md:px-10">
      <h1 className="text-4xl font-extrabold text-gray-700 py-4 text-center">
        Detalles del producto
      </h1>

      <div className="space-y-8 md:space-y-0 md:flex md:space-between md:justify-center">
        <div className="pr-4 border-r border-gray-200">
          <Link href="/products" className="text-lg text-blue-600">
            Home
          </Link>
        </div>

        {product && (
          <div className="w-full">
            <section className="flex align-center justify-center">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
            </section>

            <section className="mt-5 px-5">
              <Paragrah title="Descripción">{product.description}</Paragrah>

              <section className="flex align-center justify-between md:justify-center mt-4">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Actulizar
                </button>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Eliminar
                </button>
              </section>

              <div className="flex justify-between py-2">
                <div>
                  <div className="flex pt-5">
                    {product.previous.prices.currentMonth.map(price => (
                      <div
                        key={price}
                        className="px-2 flex justify-center items-center first:border-r border-gray-300 last:border-l"
                      >
                        ${price}
                      </div>
                    ))}
                  </div>

                  <div className="flex pt-5">
                    {product.previous.rating.count.currentMonth.map(count => (
                      <div
                        key={count}
                        className="px-2 flex justify-center items-center first:border-r border-gray-300 last:border-l"
                      >
                        {count}
                      </div>
                    ))}
                  </div>

                  <div className="flex pt-5">
                    {product.previous.rating.rate.currentMonth.map(rating => (
                      <div
                        key={rating}
                        className="px-2 flex justify-center items-center first:border-r border-gray-300 last:border-l"
                      >
                        <div className="pr-2">
                          <AiFillStar className="text-yellow-500 text-xl" />
                        </div>
                        <span>{rating}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="m-3.5">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={handleCalculatePrice}
                  >
                    Calcular Ganancia
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  )
}
