"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto max-w-6xl flex justify-between items-center py-6 px-4 sm:px-6">
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
          <Link href="/contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-white z-50 transform transition-transform ease-in-out duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-bold tracking-tight">
              MidEast<span className="font-light">Strategia</span>
            </Link>
            <button onClick={() => setIsOpen(false)} className="p-2 -mr-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <nav className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-base text-gray-900 hover:text-gray-600">Home</Link>
              <Link href="/analysis" onClick={() => setIsOpen(false)} className="text-base text-gray-900 hover:text-gray-600">Analysis</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-base text-gray-900 hover:text-gray-600">About</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-base text-gray-900 hover:text-gray-600">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
} 