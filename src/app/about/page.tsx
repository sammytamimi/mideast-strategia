import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight text-center md:text-left">About</h1>
      
      {/* Profile Section */}
      <div>
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* Left Column - Image */}
          <div className="w-2/3 mx-auto md:w-1/3 md:mx-0">
            <div className="bg-gray-100 aspect-[3/4] w-full relative">
              {/* Placeholder for profile image */}
              <div className="w-full h-full flex items-center justify-center">
              
              <Image 
                src="/potrait.jpg" 
                alt="Political Imagery"
                width={500}  
                height={500} 
                className="w-full h-full object-cover" 
              />
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
                  Dr. Naser al-Tamimi is the founder of MidEast Strategia, a consultancy specialising in geostrategy, energy politics, and China-Gulf relations. He also serves as a Senior Associate Research Fellow at the Institute for International Political Studies (ISPI) in Milan, Italy, and a Senior Associate Fellow at the Global Institute for Strategic Research (GISR) in Doha, Qatar. His research primarily focuses on the Middle East, especially the Gulf region, with a particular interest in the interplay between energy dynamics and the diplomatic relationships between GCC countries and Asia, particularly China. Al-Tamimi earned his PhD in IR from the University of Durham (UK), where his thesis examined the bilateral ties between China and Saudi Arabia.
                </p>
                
                <p>
                  He has extensively written on Saudi Arabia, the Gulf, and the Middle East for academic and popular outlets. His work has also appeared in major research centers like Brookings, ECFR, MERICS, and Friedrich-Ebert-Stiftung. He authored China-Saudi Arabia Relations, 1990-2012 (Routledge, 2014).
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 