export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto max-w-6xl text-left text-sm text-gray-500 py-6 px-4 sm:px-6">
        <p>&copy; {currentYear} MidEast Strategia. All Rights Reserved.</p>
      </div>
    </footer>
  );
} 