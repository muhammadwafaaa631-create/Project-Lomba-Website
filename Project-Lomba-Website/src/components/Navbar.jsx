import { Link } from "react-router-dom"

function Navbar() {
    return (
        <header className="w-full bg-white border-b">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">

                <h1 className="text-lg font-semibold">
                    Logo
                </h1>

                <nav className="flex gap-6 text-sm">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/about" className="hover:text-blue-600">About</Link>
                    <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                </nav>

            </div>
        </header>
    )
}

export default Navbar