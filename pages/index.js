import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="w-full h-full bg-dblue flex items-center">
      <div className="relative mx-auto">
          <p className="text-fgreen text-lg leading-none font-mono">✨ The most simple</p>
          <h1 className="text-fgreen huge leading-none mb-4">Todo list</h1>
          <Link href="/app">
              <a className="btn-green h-10 w-full absolute">Go</a>
          </Link>
      </div>
    </div>
  )
}
