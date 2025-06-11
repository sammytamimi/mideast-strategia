import Image from "next/image";
import Link from "next/link";

const FOUNDER_PUBS_HEADING = "Articles by Our Founder Published In";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-16 max-w-6xl">
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="order-2 md:order-1 max-w-md mx-auto md:max-w-3xl md:mx-0">
            <h1 className="hidden md:block text-4xl md:text-5xl font-bold mb-12 leading-tight">
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
          
          <div className="order-1 md:order-2 aspect-square w-full">
            <Image 
              src="/china-gulf-map.jpeg" 
              alt="Political Imagery"
              width={500}  
              height={500} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Animated Social Proof Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8">
            {FOUNDER_PUBS_HEADING}
            <sup className="text-xs align-super">*</sup>
          </h2>
          <div className="scrolling-logos-container">
            <div className="scrolling-logos">
              {/* First set of logos */}
              <Image src="/logos/brookings.svg" alt="Brookings" width={160} height={40} className="h-10 w-auto" />
              <Image src="/logos/ispi.png" alt="ISPI" width={120} height={40} className="h-10 w-auto" />
              <Image src="/logos/ecfr.svg.png" alt="ECFR" width={160} height={40} className="h-10 w-auto" />
              <Image src="/logos/merics.png" alt="MERICS" width={180} height={40} className="h-10 w-auto" />
              <Image src="/logos/GN_Logo_full_colour-400x165.png" alt="Global Neighbours" width={180} height={40} className="h-10 w-auto" />
              <Image src="/logos/gisr.png" alt="GISR" width={180} height={40} className="h-10 w-auto" />
              {/* Second set of logos (for seamless loop) */}
              <Image src="/logos/brookings.svg" alt="Brookings" width={160} height={40} className="h-10 w-auto" />
              <Image src="/logos/ispi.png" alt="ISPI" width={120} height={40} className="h-10 w-auto" />
              <Image src="/logos/ecfr.svg.png" alt="ECFR" width={160} height={40} className="h-10 w-auto" />
              <Image src="/logos/merics.png" alt="MERICS" width={180} height={40} className="h-10 w-auto" />
              <Image src="/logos/GN_Logo_full_colour-400x165.png" alt="Global Neighbours" width={180} height={40} className="h-10 w-auto" />
              <Image src="/logos/gisr.png" alt="GISR" width={180} height={40} className="h-10 w-auto" />
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-md mx-auto md:max-w-none">
          <div className="p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">The Relations Between China and Saudi Arabia: Continuity Amid New Challenges</h3>
            </div>
            <p className="text-gray-700 mb-4">Saudi Arabia and China have deepened their economic and diplomatic ties, driven by energy trade, strategic investments, and geopolitical recalibrations, while Riyadh carefully balances its longstanding security alliance with the U.S. amid evolving regional and global dynamics.</p>
            <div className="mb-4">
              <h4 className="font-semibold text-sm text-gray-800 mb-2">Key Takeaways:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Analysis of energy trade and strategic investments.</li>
                <li>Saudi Arabia's balance with its U.S. alliance.</li>
                <li>Impact of evolving regional dynamics.</li>
              </ul>
            </div>
            <a href="/pdfs/china-saudi-relations.pdf" target="_blank" rel="noopener noreferrer" className="mt-auto inline-block text-center bg-black text-white font-semibold text-sm py-2 px-4 hover:bg-gray-800 transition-colors">
              View PDF
            </a>
          </div>
          
          <div className="p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">China-Middle East Relations: Growing Amidst Turmoil</h3>
            </div>
            <p className="text-gray-700 mb-4">China is expanding its influence in the Middle East through economic ties, energy security, and strategic partnerships while balancing relations with the U.S. and advancing global initiatives like the Belt and Road and BRICS.</p>
            <div className="mb-4">
              <h4 className="font-semibold text-sm text-gray-800 mb-2">Key Takeaways:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>China's growing economic and strategic influence.</li>
                <li>The role of the Belt and Road Initiative (BRI).</li>
                <li>Balancing relations with the U.S. in the region.</li>
              </ul>
            </div>
            <a href="/pdfs/china-mideast-relations.pdf" target="_blank" rel="noopener noreferrer" className="mt-auto inline-block text-center bg-black text-white font-semibold text-sm py-2 px-4 hover:bg-gray-800 transition-colors">
              View PDF
            </a>
          </div>
          
          <div className="p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Qatar's LNG Between the Ukraine War and Renewable: Prospects and Challenges</h3>
            </div>
            <p className="text-gray-700 mb-4">Qatar has strengthened its position as the world's leading LNG exporter, benefiting from rising global demand amid the Ukraine war, but faces challenges from increasing U.S. competition, the shift to renewables, and the need for long-term contracts to sustain its economic and geopolitical influence.</p>
            <div className="mb-4">
              <h4 className="font-semibold text-sm text-gray-800 mb-2">Key Takeaways:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Impact of the Ukraine war on LNG demand.</li>
                <li>Challenges from U.S. competition and renewables.</li>
                <li>Qatar's long-term economic strategy.</li>
              </ul>
            </div>
            <a href="/pdfs/qatar-lng.pdf" target="_blank" rel="noopener noreferrer" className="mt-auto inline-block text-center bg-black text-white font-semibold text-sm py-2 px-4 hover:bg-gray-800 transition-colors">
              View PDF
            </a>
          </div>
          

        </div>
      </main>
    </div>
  );
}
