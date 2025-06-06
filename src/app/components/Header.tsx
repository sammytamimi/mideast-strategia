"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6 px-6 md:px-12 border-b border-gray-200">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight">
            MidEast<span className="font-light">Strategia</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-10">
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
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/analysis" className="text-sm font-medium hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>
              Analysis
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 