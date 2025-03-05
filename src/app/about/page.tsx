import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-6 py-16 max-w-6xl">

        
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
                  <p>
                  Dr. Naser al-Tamimi is a UK-based political economist specialising in the Middle East, particularly the Gulf region. He is a Senior Associate Research Fellow at ISPI (Milan) and GISR (Doha). His research focuses on energy dynamics and Saudi/GCC-Asia relations, especially with China. He holds a Ph.D. in International Relations from Durham University, where he studied China-Saudi ties. With decades of experience, he has worked as a researcher and journalist across the UK and Arab countries. His writings appear in major institutions like Brookings, ECFR, MERICS, and Al Jazeera Centre for Studies. He authored China-Saudi Arabia Relations, 1990-2012: Marriage of Convenience or Strategic Alliance (Routledge, 2014).
                  </p>
                  
                  
                  
                  <div className="pt-4">
                  <h2 className="text-3xl font-bold mb-8">Contact</h2>
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