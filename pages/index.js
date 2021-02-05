import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="w-full h-full bg-dblue flex items-center">
      <div className="relative mx-auto">
          <p className="text-fgreen text-lg leading-none font-mono">✨ The most simple</p>
          <h1 className="text-fgreen huge leading-none mb-4">Todo list</h1>
          <div className="flex gap-2">
              <Link href="/app">
                <a className="btn-green-outline h-10 w-1/2">Go</a>
              </Link>
              <a className="btn-green h-10 w-1/2" href="https://github.com/jacobhq/todo" target="_blank">View source</a>
          </div>
      </div>
    </div>
  )
}
