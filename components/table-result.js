export default function TableResult({ header, data }) {
  return (
    <div className="py-5 relative overflow-x-autoo">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-200 bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-l-lg">
              Fecha
            </th>
            {header.map(titleHead => (
              <th
                key={titleHead}
                scope="col"
                className="px-6 py-3 last:rounded-r-lg"
              >
                {titleHead}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-center">
            <th
              scoop="row"
              classname="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Ultimo mes
            </th>
            {data[0].map((value, index) => (
              <th
                key={value}
                scoop="row"
                classname="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap"
              >
                {data[0].lenght - 1 === index ? `$${value}` : value}
              </th>
            ))}
          </tr>
          <tr className="bg-white text-center">
            <th
              scoop="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Mes actual
            </th>
            {data[1].map((value, index) => (
              <th
                key={value}
                scoop="row"
                classname="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {data[0].lenght - 1 === index ? `$${value}` : value}
              </th>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
