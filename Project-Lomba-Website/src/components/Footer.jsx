import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="w-full bg-gray-100 border-t mt-auto">
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">

                <p>© {new Date().getFullYear()} Nama</p>

                <nav className="flex gap-4 mt-2 md:mt-0">
                    <Link to="/" className="hover:text-black">Home</Link>
                    <Link to="/about" className="hover:text-black">About</Link>
                    <Link to="/contact" className="hover:text-black">Contact</Link>
                </nav>

            </div>
        </footer>
    )
}

export default Footer