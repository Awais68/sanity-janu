import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 ">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s"
              alt="logo"
              width={40}
              height={40}
            />
            <span className="ml-3 text-xl">Saylani Tech Limited</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href="/products" className="mr-5 hover:text-gray-900">
              Products
            </Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              Contact Us{" "}
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login
          </button>
        </div>
      </header>
    </div>
  );
}
