export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-6 md:px-12 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl text-left text-sm text-gray-500">
        <p>&copy; {currentYear} MidEast Strategia. All Rights Reserved.</p>
      </div>
    </footer>
  );
} 