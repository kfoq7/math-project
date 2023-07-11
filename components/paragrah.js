export default function Paragrah({ title, children }) {
  return (
    <>
      <div className="text-gray-700 font-bold">{title}</div>

      <p className="text-justify text-gray-700">{children}</p>
    </>
  )
}
