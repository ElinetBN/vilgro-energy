"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
//
export default function AboutPage() {
  return (
    <>
    <Navigation/>
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <section className="bg-white border-b border-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">HOME</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-700 font-medium">ABOUT VILGRO ENERGY</span>
        </div>
      </section>

      {/* Hero Section with Heading and Image */}
        <section className="relative bg-white min-h-[calc(100vh-64px)] flex items-center">
         <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Powering Africa's Future Through <span className="text-[#0d10c0]">Energy Solutions</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Vilgro Energy, we believe energy is more than just a commodity — it's the heartbeat of progress, industry, and everyday life. Born from a shared vision of bold, independent leadership in the African energy landscape, we are a proudly Level 1 BBBEE company with a singular focus: securing Africa's energy future.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            In a region where the shutdown of crude refineries and a deepening electricity crisis have made South Africa and its neighbours increasingly dependent on imported fuels, we saw more than just a challenge — we saw an opportunity. An opportunity for local ownership, for African-led solutions, and for a trusted partner to reshape the region's energy narrative.
          </p>
        </div>
        <div className="md:w-1/2 relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/about.jpeg"
            alt="Vilgro Energy Team"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>

  {/* Our Story Section - Updated for Vilgro Energy */}
<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
    {/* Heading with decorative elements */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0033a1] mb-6 leading-tight">
        Our <span className="text-[#0d10c0]">Story</span>
      </h2>
      <div className="flex justify-center mb-8">
        <div className="w-20 h-1 bg-[#0d10c0]"></div>
      </div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our journey in monetizing Southern Africa's gas resources through strategic infrastructure and trading solutions
      </p>
    </div>

   {/* Content with cards and hover effects */}
   <div className="grid md:grid-cols-2 gap-8">
      {/* Vision Card */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-[#0d10c0] group">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0d10c0] to-[#0d10c0] rounded-lg flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#0d10c0] group-hover:text-[#0d10c0] transition-colors duration-300">Our Expertise</h3>
        </div>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Vilgro Energy specializes in trading and infrastructure for liquid petroleum products and natural gas, focusing on monetizing Southern Africa's gas discoveries to support industrialization and greener energy transitions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our founders have decades of experience in gas monetization projects globally, including critical roles in the Mozambique Secunda Project - Africa's most successful cross-border gas project featuring the cheapest per-unit-kilometer pipeline built in sub-Saharan Africa.
          </p>
        </div>
        <div className="mt-10 pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-[#0d10c0] font-medium">
            <span>Gas Monetization</span>
            <div className="ml-2 w-2 h-2 bg-[#0d10c0] rounded-full"></div>
            <span className="ml-2">Infrastructure Development</span>
          </div>
        </div>
      </div>
      
      {/* Mission Card */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-[#00a3e0] group">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#00a3e0] to-[#0033a1] rounded-lg flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#0d10c0] group-hover:text-[#0d10c0] transition-colors duration-300">Regional Opportunity</h3>
        </div>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We believe Southern Africa offers unique opportunities to monetize gas discoveries for industrialization while supporting the transition to greener energy. South Africa represents one of the world's largest remaining developed gas markets yet to be adequately supplied.
          </p>
          <div className="bg-gradient-to-r from-[#f5f9ff] to-[#e8f4fd] p-6 rounded-lg border-l-4 border-[#00a3e0] group-hover:shadow-inner transition-all duration-300 ">
            <p className="italic text-gray-900 font-medium">
              "Our regional networks and regulatory knowledge accelerate market entry for partners through proven business models in gas monetization and energy trading."
            </p>
          </div>
        </div>
        <div className="mt-1 pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-[#0d10c0] font-medium">
            <span>Energy Transition</span>
            <div className="ml-2 w-2 h-2 bg-[#0d10c0] rounded-full"></div>
            <span className="ml-2">Market Solutions</span>
          </div>
        </div>
      </div>
    </div>

    {/* Timeline or additional content would go here */}
    
    {/* Decorative element at bottom */}
    <div className="flex justify-center mt-16">
      <div className="w-32 h-1 bg-gray-200"></div>
    </div>
  </div>
</section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <div className="w-20 h-1 bg-[#0d10c0] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0d10c0] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#33ca34] text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold text-white mb-3">Strategic Partnerships</h3>
              <p className="text-white">
                We cultivate strong relationships with global refiners, traders, and governments to ensure reliable energy supply chains.
              </p>
            </div>
            
            <div className="bg-[#0d10c0] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#33ca34] text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold text-white mb-3">End-to-End Solutions</h3>
              <p className="text-white">
                From sourcing to logistics, we manage the complete value chain to deliver seamless energy solutions.
              </p>
            </div>
            
            <div className="bg-[#0d10c0] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#33ca34] text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold text-white mb-3">Regional Expertise</h3>
              <p className="text-white">
                Our deep understanding of African markets allows us to navigate complexities and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="w-20 h-1 bg-[#0d10c0] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/pic1.jpg"
               alt="Our Impact" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Vilgro Energy plays a vital role in keeping industries operational and economies growing across Southern Africa. Our work directly contributes to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#0d10c0] mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Energy security for businesses and communities</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Job creation and skills development</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Sustainable energy transition initiatives</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Local content and transformation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     

 

    </div>
    <Footer/>
    </>
  )
}