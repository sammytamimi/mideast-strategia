import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6 px-6 md:px-12 border-b border-gray-200">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight">
            MidEast<span className="font-light">Strategia</span>
          </Link>
        </div>
        <nav className="flex space-x-10">
          <Link href="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="/analysis" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Analysis
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
} 