import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"


export default function NaturalGasPage() {
  return (
    <>
     <Navigation/>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#33ca34] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">Natural Gas & Liquefied Natural Gas Solutions</h1>
              <p className="text-xl mb-8 text-white">
                Monetizing Southern Africa's gas discoveries to drive industrialization and sustainable energy transition.
              </p>
              <Link href="/contact" passHref>
              <Button className="bg-white text-[#33ca34] hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:scale-105 transition-transform">
                Contact Our Gas Experts
              </Button>
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
              <Image
                src="/images/pic 1.jpeg"
                alt="Natural Gas Infrastructure"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Southern Africa's Gas Opportunity</h2>
            <div className="w-24 h-1 bg-[#33ca34] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-[#33ca34] bg-gray-50 rounded-r-lg">
                <p className="text-gray-700">
                  Vilgro Energy's trading and related infrastructure activities are focused on liquid petroleum products and natural gas. We believe the Southern African region now offers unique opportunities for various gas discoveries to be monetized and contribute to industrialization while supporting the transition to greener energy.
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="bg-[#33ca34] p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Natural gas has a competitive advantage as it can not only be utilized to generate power, but also serves as a reliable and cost-effective fuel source for commercial and industrial users as well as for chemical production.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-inner border border-gray-200">
              <h3 className="text-xl font-semibold text-[#33ca34] mb-6 pb-2 border-b border-gray-200">Key Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-3 hover:bg-gray-100 rounded-lg transition">
                  <div className="bg-[#33ca34] text-green-800 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Cost-effective energy source for power generation</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-gray-100 rounded-lg transition">
                  <div className="bg-[#33ca34] text-green-800 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Versatile industrial and chemical applications</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-gray-100 rounded-lg transition">
                  <div className="bg-[#33ca34] text-green-800 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Supports transition to cleaner energy</span>
                </li>
                <li className="flex items-start gap-3 p-3 hover:bg-gray-100 rounded-lg transition">
                  <div className="bg-[#33ca34] text-green-800 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Abundant regional discoveries awaiting monetization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Natural Gas Fundamentals</h2>
            <div className="w-24 h-1 bg-[#33ca34] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#33ca34] p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#33ca34]">Composition & Properties</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Natural gas in its pure form is obtained from gas fields and is also extracted in association with crude petroleum from oil fields. Its principal heat producing constituents are methane (CH₄) and hydrogen (H₂).
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-medium text-gray-800">For chemical production:</p>
                  <p>The key process step is the production of synthesis gas from gas reforming or gasification, which is synthesized into various hydrocarbon products. Synthesis gas is a combination of Carbon Monoxide (CO) and Hydrogen (H₂).</p>
                </div>
                <p>
                  Natural gas also contains ethane (C₂H₆), propane (C₃H₈), butane (C₄H₁₀), and pentane (C₅H₁₂) in varying proportions. Propane and butane are the main constituents of LPG (Liquefied Petroleum Gas).
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#33ca34] p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#33ca34]">Processing & Transportation</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#33ca34] text-green-800 rounded-full h-10 w-10 flex items-center justify-center">
                      1
                    </div>
                  </div>
                  <p>
                    Natural gas may contain impurities such as Hydrogen Sulphide (H₂S) which must be removed prior to transportation. During processing, marketable products known as Natural Gas Liquids (NGLs) can be extracted and sold.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#33ca34] text-green-800 rounded-full h-10 w-10 flex items-center justify-center">
                      2
                    </div>
                  </div>
                  <p>
                    LNG (Liquefied Natural Gas) was developed as a means of transporting natural gas over long distances (3000km). LNG takes up about 1/600th the volume of natural gas in gaseous state.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#33ca34] text-green-800 rounded-full h-10 w-10 flex items-center justify-center">
                      3
                    </div>
                  </div>
                  <p>
                    The first LNG exports began in 1969 from Alaska to Japan, initiating the growth of what is now the largest natural gas demand center in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Discoveries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Southern African Gas Landscape</h2>
            <div className="w-24 h-1 bg-[#33ca34] mx-auto"></div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Historical Discoveries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#33ca34] transition-colors group">
                <div className="bg-[#33ca34] text-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[#33ca34] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Pande & Temane (1961-1967)</h4>
                <p className="text-gray-700">
                  Discovered by Gulf Oil, these fields remained stranded for 40 years until monetization began in 2004 when Sasol provided an anchor market. Initial reserves were approximately 5 TCF.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#33ca34] transition-colors group">
                <div className="bg-[#33ca34] text-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[#33ca34] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Kudu Gas Field (1974)</h4>
                <p className="text-gray-700">
                  Located offshore Namibia, this discovery has yet to be fully developed but represents significant potential for the region's energy needs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#33ca34] transition-colors group">
                <div className="bg-[#33ca34] text-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[#33ca34] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">EM & Satellite Fields (1984)</h4>
                <p className="text-gray-700">
                  Located in Bredasdorp Block 9 off South Africa's Western Cape, these fields remain important potential sources for regional energy supply.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recent Developments</h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-[#33ca34] text-green-800 rounded-full h-6 w-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p>
                  Of particular regional interest are recent world-class gas discoveries in Mozambique and Namibia, which require proactive involvement from South Africa as the region's most developed natural gas market.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-[#33ca34] text-green-800 rounded-full h-6 w-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p>
                  South Africa is now surrounded by major gas discoveries as well as "stranded" gas fields awaiting market solutions. Notably, international players from Italy, Japan, India, and Thailand are participating in Mozambique's Rovuma LNG development, while South African entities remain conspicuously absent.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-[#33ca34] text-green-800 rounded-full h-6 w-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p>
                  The potential of shale gas reserves in South Africa is large, though environmental, regulatory and infrastructure challenges remain critical barriers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vilgro Energy's Gas Expertise</h2>
            <div className="w-24 h-1 bg-[#33ca34] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-8 border-[#33ca34]">
                <p className="text-gray-700">
                  Vilgro Energy's founders have decades of experience in gas monetization projects globally, including critical roles in the Mozambique-Secunda Project - a showcase of successful cross-border cooperation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-700">
                  This project involved construction of the most cost-effective pipeline (per unit kilometer) built in sub-Saharan Africa, operating uninterrupted for 21 years.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Partnering with Vilgro Energy provides access to extensive regional networks, regulatory knowledge, and experience with business models for gas monetization that can accelerate market entry.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/contact" passHref>
                <Button className="bg-[#33ca34] hover:bg-green-800">
                  Contact Our Gas Team
                </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/images/shipping.jpeg"
                alt="Gas Pipeline Infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent flex items-end p-6">
                <p className="text-white font-medium">Our team has hands-on experience with major gas infrastructure projects across Africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
    <Footer/>
    </>
  )
}