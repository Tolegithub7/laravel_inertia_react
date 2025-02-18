import { Link } from "@inertiajs/react"
function Layout({children}) {
  return (
    <div>
      <header>
        <nav className="text-white font-2xl font-bold">
            <Link href="/" className="bg-slate-900 p-2 rounded-lg">Home</Link>
            <Link href="/posts/create" className="bg-slate-900 p-2 rounded-lg">Create</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
