import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen text-white">
      <button className="flex items-center text-lg bg-gray-900 rounded-lg px-4">
        <AiFillGithub className="mr-2" />
        <Link href="https://github.com/kfoq7/math-project">Source Code</Link>
      </button>
    </div>
  )
}
