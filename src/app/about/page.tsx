import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-16 max-w-6xl">

        
        {/* Profile Section */}
        <div>
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            {/* Left Column - Image */}
            <div className="md:w-1/3">
              <div className="bg-gray-100 aspect-[3/4] w-full relative">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center">
                
                <Image 
    src="/potrait.jpg" 
    alt="Political Imagery"
    width={500}  
    height={500} 
    className="rounded-lg w-full h-full object-cover" 
  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 text-white p-4">
                  <p className="text-sm text-gray-300">Founder, MidEast Strategia</p>
                </div>
              </div>
              

            </div>
            
            {/* Right Column - Bio */}
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-8">Naser Al-Tamimi</h2>
              
              <div className="space-y-8">
                
                <div className="text-lg text-gray-700 space-y-6">
                  <div className="mb-6">
                    <p className="font-semibold text-gray-900 mb-2">Founder, MidEastStrategia</p>
                    <p className="mb-2"><span className="font-medium">Regional expertise:</span> Gulf, Middle East & North Africa (MENA), China (Asia)-MENA relations, and Saudi Arabia</p>
                    <p><span className="font-medium">Specialist knowledge:</span> Geostrategy, Energy Politics, and Political Economy.</p>
                  </div>
                  
                  <p>
                    Dr. Naser al-Tamimi is the founder of MidEast Strategia, a think tank specialising in geostrategy, energy politics, and China-Gulf relations. He also serves as a Senior Associate Research Fellow at the Institute for International Political Studies (ISPI) in Milan, Italy, and a Senior Associate Fellow at the Global Institute for Strategic Research (GISR) in Doha, Qatar. His research primarily focuses on the Middle East, especially the Gulf region, with a particular interest in the interplay between energy dynamics and the diplomatic relationships between GCC countries and Asia, particularly China. Al-Tamimi earned his PhD in IR from the University of Durham (UK), where his thesis examined the bilateral ties between China and Saudi Arabia.
                  </p>
                  
                  <p>
                    He has extensively written on Saudi Arabia, the Gulf, and the Middle East for academic and popular outlets. His work has also appeared in major research centers like Brookings, ECFR, MERICS, and Friedrich-Ebert-Stiftung. He authored China-Saudi Arabia Relations, 1990-2012 (Routledge, 2014).
                  </p>
                  
                  <div id="contact" className="pt-8 scroll-mt-24">
                    <h2 className="text-3xl font-bold mb-8">Contact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Email Card */}
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.452a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Email</h3>
                            <p className="text-sm text-gray-600">Get in touch directly</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <a href="mailto:contact@mideaststrategia.com" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            Contact via Email
                          </a>
                        </div>
                      </div>

                      {/* Twitter Card */}
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Twitter/X</h3>
                            <p className="text-sm text-gray-600">Follow for updates</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <a href="https://twitter.com/nasertamimi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            @nasertamimi
                          </a>
                        </div>
                      </div>

                      {/* LinkedIn Card */}
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                            <p className="text-sm text-gray-600">Professional network</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <a href="https://www.linkedin.com/in/dr-naser-al-tamimi-1332a229/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 