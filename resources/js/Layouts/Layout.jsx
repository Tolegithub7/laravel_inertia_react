import { Link } from "@inertiajs/react"
function Layout({children}) {
  return (
    <div>
      <header>
        <nav className="text-white font-2xl font-bold">
            <Link href="/">Home</Link>
            <Link href="/create">Create</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
