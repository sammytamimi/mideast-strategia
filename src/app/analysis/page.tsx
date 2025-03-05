import Image from "next/image";
import Link from "next/link";

export default function Analysis() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-6 py-16 max-w-6xl">
        {/* Analysis Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <a href="/pdfs/china-saudi-relations.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group">
            <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
              <Image 
                src="/china-saudi-handshake.avif" 
                alt="China and Saudi Arabia relations" 
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold">China and Saudi Arabia: Strategic Ties in a Shifting Global Order</h2>
                <Image src="/file.svg" alt="PDF Document" width={20} height={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-gray-900 font-medium text-sm flex items-center group-hover:underline">
                View PDF
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </a>
          
          {/* Card 2 */}
          <a href="/pdfs/china-mideast-relations.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group">
            <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
              <Image 
                src="/china-middle-east.jpg" 
                alt="China's Middle East Strategy" 
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold">China's Middle East Strategy: Economic Influence and Geopolitical Balancing</h2>
                <Image src="/file.svg" alt="PDF Document" width={20} height={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-gray-900 font-medium text-sm flex items-center group-hover:underline">
                View PDF
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </a>
          
          {/* Card 3 */}
          <a href="/pdfs/qatar-lng.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group">
            <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
              <Image 
                src="/qatar-lng.avif" 
                alt="Qatar's LNG" 
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold">Qatar's LNG: Balancing Global Demand, Geopolitics, and Renewables</h2>
                <Image src="/file.svg" alt="PDF Document" width={20} height={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-gray-900 font-medium text-sm flex items-center group-hover:underline">
                View PDF
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Card 4 - GCC Visions */}
          <div className="flex flex-col h-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
            <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
              <Image 
                src="/gcc-report.jpg" 
                alt="GCC Visions" 
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">GCC Visions: Connecting Regional Stability to Economic Diversification</h2>
              <div className="flex justify-between items-center">
                <Link href="https://www.ispionline.it/en/publication/economic-cooperation-a-driver-of-stability-in-the-mena-region-195341" className="text-blue-600 hover:underline font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}