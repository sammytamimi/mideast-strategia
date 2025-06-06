import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1 max-w-md mx-auto md:max-w-3xl md:mx-0">
            <h1 className="text-4xl hidden md:block md:text-5xl font-bold mb-8 leading-tight">
              MidEast Strategia
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Welcome to MidEast Strategia. A premier source for in-depth analysis of the Middle East's evolving strategic landscape, with a special focus on China-Gulf relations.
              </p>
              
              <p className="text-lg text-gray-700">
                Our mission is to offer straightforward, well-researched content that informs policymakers, business leaders, and academics about the key trends driving China-Gulf engagements.
              </p>
              
            </div>
          </div>
          
          <div className="order-1 md:order-2 bg-gray-100 aspect-square w-full max-w-sm mx-auto md:ml-auto mb-8 md:mb-0">
  <Image 
    src="/china-gulf-map.jpeg" 
    alt="Political Imagery"
    width={500}  
    height={500} 
    className="w-full h-full object-cover" 
  />
</div>
        </div>
        
        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-md mx-auto md:max-w-none">
          <a href="/pdfs/china-saudi-relations.pdf" target="_blank" rel="noopener noreferrer" className="p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">The Relations Between China and Saudi Arabia: Continuity Amid New Challenges</h3>
            </div>
            <p className="text-gray-700 mb-4">Saudi Arabia and China have deepened their economic and diplomatic ties, driven by energy trade, strategic investments, and geopolitical recalibrations, while Riyadh carefully balances its longstanding security alliance with the U.S. amid evolving regional and global dynamics.</p>
            <span className="text-blue-600 font-medium text-sm flex items-center group-hover:underline mt-auto">
              View PDF
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          
          <a href="/pdfs/china-mideast-relations.pdf" target="_blank" rel="noopener noreferrer" className="p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">China–Middle East Relations: Growing Amidst Turmoil</h3>
            </div>
            <p className="text-gray-700 mb-4">China is expanding its influence in the Middle East through economic ties, energy security, and strategic partnerships while balancing relations with the U.S. and advancing global initiatives like the Belt and Road and BRICS.</p>
            <span className="text-blue-600 font-medium text-sm flex items-center group-hover:underline mt-auto">
              View PDF
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          
          <a href="/pdfs/qatar-lng.pdf" target="_blank" rel="noopener noreferrer" className="p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Qatar's LNG Between the Ukraine War and Renewable: Prospects and Challenges</h3>
            </div>
            <p className="text-gray-700 mb-4">Qatar has strengthened its position as the world's leading LNG exporter, benefiting from rising global demand amid the Ukraine war, but faces challenges from increasing U.S. competition, the shift to renewables, and the need for long-term contracts to sustain its economic and geopolitical influence.</p>
            <span className="text-blue-600 font-medium text-sm flex items-center group-hover:underline mt-auto">
              View PDF
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          

        </div>
      </main>
    </div>
  );
}
