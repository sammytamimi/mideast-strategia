'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto max-w-6xl text-left text-sm text-gray-500 py-6 px-4 sm:px-6">
        {isHomePage && (
          <p className="mb-4">* These outlets have published work authored by the founder in a personal capacity. Their logos are displayed for reference only and do not imply endorsement of MidEast Strategia. All trademarks and logos remain the property of their respective owners.</p>
        )}
        <p>&copy; {currentYear} MidEast Strategia. All Rights Reserved.</p>
      </div>
    </footer>
  );
} 