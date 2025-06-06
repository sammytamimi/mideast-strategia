import Image from "next/image";
import Link from "next/link";

export default function Analysis() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight text-center md:text-left">Analysis</h1>
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
          <div className="px-6 py-4 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold">The Relations Between China and Saudi Arabia: Continuity Amid New Challenges</h2>
            </div>
            <span className="text-blue-600 font-medium text-sm flex items-center group-hover:underline mt-auto">
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
          <div className="px-6 py-4 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold">China–Middle East Relations: Growing Amidst Turmoil</h2>
            </div>
            <span className="text-blue-600 font-medium text-sm flex items-center group-hover:underline mt-auto">
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
          <div className="px-6 py-4 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold">Qatar’s LNG Between the Ukraine War and Renewable: Prospects and Challenges</h2>
            </div>
            <span className="text-blue-600 font-medium text-sm flex items-center group-hover:underline mt-auto">
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
        <a href="https://www.ispionline.it/en/publication/economic-cooperation-a-driver-of-stability-in-the-mena-region-195341" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group">
          <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
            <Image 
              src="/gcc-report.jpg" 
              alt="GCC Visions" 
              width={400}
              height={300}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="px-6 py-4 flex flex-col flex-grow">
            <h2 className="text-xl font-bold mb-2">GCC Visions: Connecting Regional Stability to Economic Diversification</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-blue-600 group-hover:underline font-medium">
                Read More
              </span>
            </div>
          </div>
        </a>

        {/* Card 5 - Qatar's Growing Investments in Asia */}
        <a href="https://www.ispionline.it/en/publication/qatars-growing-investments-in-asia-economics-vs-geopolitics-177964" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group">
          <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
            <Image 
              src="/qatar_0.jpg" 
              alt="Flag of Qatar" 
              width={400}
              height={300}
              className="w-full h-full object-cover object-left hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="px-6 py-4 flex flex-col flex-grow">
            <h2 className="text-xl font-bold mb-2">Qatar's Growing Investments in Asia: Economics vs Geopolitics</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-blue-600 group-hover:underline font-medium">
                Read More
              </span>
            </div>
          </div>
        </a>

        {/* Card 6 - Saudi Arabia and China Partnership */}
        <a href="https://merics.org/en/saudi-arabias-once-marginal-relationship-china-has-grown-comprehensive-strategic-partnership" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full border border-gray-200 hover:border-ray-300 hover:shadow-md transition-all cursor-pointer group">
          <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
            <Image 
              src="/saudi_train.jpg" 
              alt="Haramain high-speed train in Saudi Arabia" 
              width={400}
              height={300}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="px-6 py-4 flex flex-col flex-grow">
            <h2 className="text-xl font-bold mb-2">Saudi Arabia's once marginal relationship with China has grown into a comprehensive strategic partnership</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-blue-600 group-hover:underline font-medium">
                Read More
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}