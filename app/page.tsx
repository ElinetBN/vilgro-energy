
"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, Lightbulb, Heart, Zap, Globe, Building2, Factory, CheckCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"


export default function HomePage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const heroVideos = [
    // "/images/fire2.mp4",
    "/images/pole.mp4",
    "/images/moving-truc.mp4",
    "/images/boat.mp4"
    
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === heroVideos.length - 1 ? 0 : prevIndex + 1
      )
    }, 10000) // Change every 10 seconds

    return () => clearInterval(interval)
  }, [heroVideos.length])

  return (
    <>
    <Navigation/>

    <div>
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen bg-black overflow-hidden">
          {/* Background Videos */}
          <div className="absolute inset-0">
            {heroVideos.map((video, index) => (
              <video
                key={index}
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentVideoIndex ? "opacity-70" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                  VILGRO ENERGY
                </h1>
                <div className="w-24 h-1 bg-green-500 mx-auto rounded-full" />
              </div>

              {/* Tagline */}
              <div className="space-y-4">
                <p className="text-lg md:text-2xl text-white font-medium leading-snug">
                  Contributing towards solving Africa's Energy Security, One Shipment at a Time.
                </p>
                <p className="text-base md:text-lg font-bold text-green-300 font-bold tracking-wide">
                  We trade, develop, and advise on energy solutions for Southern Africa.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 flex-wrap">
                <Link href="/about">
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-xl shadow-md transition">
                    Learn More About Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="bg-green-600 hover:bg-[#33ca34] text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition">
                    Our Products
                  </button>
                </Link>

                <Link href="/place-order">
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-xl shadow-md transition">
                    Place an Order
                  </button>
                </Link>
              </div>

              {/* Video Indicators */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentVideoIndex
                        ? "bg-[#33ca34] scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Mission & Vision Text */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-bold text-[#33ca34] mb-4">Our Mission</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To power Africa's future through reliable and sustainable energy solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#33ca34] mb-4">Our Vision</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To be a trusted partner in enabling access to reliable, innovative, and cleaner energy solutions across
                    Africa—powering progress, resilience, and shared prosperity.
                  </p>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="flex justify-center">
                <img
                  src="/images/truck2.jpeg"
                  alt="Mission and Vision"
                  className="rounded-xl shadow-lg w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Products/Services Section */}
        <section className="py-16 bg-gray-50 border border-gray-300 rounded-xl shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Services</h2>
              <div className="w-24 h-1 bg-[#33ca34] mx-auto"></div>
            </div>

            {/* Services Flex Row - Force single line */}
            <div className="flex flex-row flex-nowrap justify-between space-x-6 overflow-x-auto">
              {/* Service 1 */}
              <div className="w-1/5 min-w-[200px] text-center">
                <div className="w-20 h-20 bg-[gray-50] rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/images/fuel2.png" 
                    alt="Liquid Fuels" 
                    className="w-25 h-25 object-contain"
                  />
                </div>
                <h3 className="text-[20px] font-semibold text-[#0d10c0] mb-2">Liquid Fuels</h3>
                <p className="text-black text-sm leading-relaxed">
                  Comprehensive liquid fuel trading, sourcing, and supply chain management across Southern Africa.
                </p>
              </div>

              {/* Service 2 */}
              <div className="w-1/5 min-w-[200px] text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/images/liq3.png" 
                    alt="Natural Gas & LNG" 
                    className="w-25 h-25 object-contain"
                  />
                </div>
                <h3 className="text-[20px] font-semibold text-[#0d10c0] mb-2">Natural Gas & Liquefied Natural Gas</h3>
                <p className="text-black text-sm leading-relaxed">
                  Natural gas and LNG solutions for power generation, industrial processes, and energy security.
                </p>
              </div>

              {/* Service 3 */}
              <div className="w-1/5 min-w-[200px] text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/images/infra2.png" 
                    alt="Infrastructure Development" 
                    className="w-25 h-25 object-contain"
                  />
                </div>
                <h3 className="text-[20px] font-semibold text-[#0d10c0] mb-2">Infrastructure Development</h3>
                <p className="text-black text-sm leading-relaxed">
                  Strategic infrastructure development to enhance energy security and distribution capabilities.
                </p>
              </div>

              {/* Service 4 */}
              <div className="w-1/5 min-w-[200px] text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/images/strategy1.png" 
                    alt="Strategic Advisory" 
                    className="w-25 h-25 object-contain"
                  />
                </div>
                <h3 className="text-[20px] font-semibold text-[#0d10c0] mb-2">Strategic Advisory</h3>
                <p className="text-black text-sm leading-relaxed">
                  Expert advisory services for energy market navigation, risk management, and strategic planning.
                </p>
              </div>

              {/* Service 5 */}
              <div className="w-1/5 min-w-[200px] text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/images/merge2.png" 
                    alt="Mergers & Acquisitions" 
                    className="w-25 h-25 object-contain"
                  />
                </div>
                <h3 className="text-[20px] font-semibold text-[#0d10c0] mb-2">Mergers & Acquisitions</h3>
                <p className="text-black text-sm leading-relaxed">
                  M&A advisory and transaction support for energy sector consolidation and growth opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Image */}
              <div className="relative">
                <div className="relative h-[40rem] w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/vil.jpeg"
                    alt="Team collaboration and values"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-full opacity-20 blur-xl"></div>
              </div>

              {/* Right side - Values List */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                <div className="w-24 h-1 bg-[#33ca34] mb-8"></div>
                <p className="text-xl text-gray-600 mb-8">
                  At the core of Vilgro Energy is a commitment to:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#33ca34] rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Centricity</h3>
                      <p className="text-gray-600">We exist to serve and empower our customers.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#33ca34] rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                      <p className="text-gray-600">
                        We operate with honesty, transparency, and accountability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#33ca34] rounded-full flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                      <p className="text-gray-600">
                        We pioneer smart, forward-looking energy solutions that lead the way
                        toward a more secure, lower-carbon future.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#33ca34] rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety</h3>
                      <p className="text-gray-600">
                        We place the safety of our people, partners, and communities above all
                        else.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#33ca34] rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Impact</h3>
                      <p className="text-gray-600">
                        We believe energy must drive not only economies—but also social progress
                        and community development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



      {/* Environmental Stewardship Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Environmental Stewardship</h2>
      <div className="w-24 h-1 bg-[#33ca34] mx-auto"></div>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        At Vilgro Energy, sustainability is at the heart of every decision we make. 
        From responsible sourcing and clean energy adoption to innovative logistics, 
        we are committed to reducing our environmental footprint and safeguarding 
        Africa’s natural resources for future generations.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
      {/* Commitment 1 */}
      <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
        <div className="mx-auto w-16 h-16 bg-[#33ca34] rounded-full flex items-center justify-center mb-4 shadow-lg">
          <Globe className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[#0d10c0] mb-2">Sustainable Operations</h3>
        <p className="text-gray-600">
          We integrate eco-conscious practices across our supply chain, prioritizing efficiency and minimal waste.
        </p>
      </div>

      {/* Commitment 2 */}
      <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
        <div className="mx-auto w-16 h-16 bg-[#33ca34] rounded-full flex items-center justify-center mb-4 shadow-lg">
          <Zap className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[#0d10c0] mb-2">Clean Energy Transition</h3>
        <p className="text-gray-600">
          Supporting the move to lower-carbon fuels, renewable energy solutions, and innovative power systems.
        </p>
      </div>

      {/* Commitment 3 */}
      <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
        <div className="mx-auto w-16 h-16 bg-[#33ca34] rounded-full flex items-center justify-center mb-4 shadow-lg">
          <Heart className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[#0d10c0] mb-2">Protecting Communities</h3>
        <p className="text-gray-600">
          We prioritize safety, air quality, and environmental protection in the communities we serve.
        </p>
      </div>
    </div>
  </div>
</section>



        
        {/* Why Work with Us Section */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">Why Work with Us?</h2>
              <p className="text-xl text-gray-600 leading-relaxed w-full text-left">
              Partner with Africa's leading energy solutions provider. We deliver reliable, innovative, and sustainable energy solutions that power progress across the continent.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start space-x-4 text-left">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-[#33ca34]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Security of Supply</h3>
                  <p className="text-gray-600">
                    Ensuring consistent and dependable energy supply chains across the region.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-left">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-[#33ca34]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Networks</h3>
                  <p className="text-gray-600">
                    Leveraging global partnerships and local expertise for optimal solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-left">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-[#33ca34]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Agility & Expertise</h3>
                  <p className="text-gray-600">Rapid response capabilities backed by decades of industry experience.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-left">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-[#33ca34]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Transition</h3>
                  <p className="text-gray-600">
                    Supporting the transition to cleaner, more sustainable energy solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-left md:col-span-2">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-[#33ca34]" />
                </div>
                <div className="max-w-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Centric Energy Solutions</h3>
                  <p className="text-gray-600">
                    Tailored solutions designed around your specific energy needs and challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">Who We Serve?</h2>
              <div className="w-24 h-1 bg-[#33ca34] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-[#33ca34] rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Factory className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-[#0d10c0]">Industrial Clients</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Manufacturing, mining, and industrial operations requiring reliable energy supply.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-[#33ca34] rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-[#0d10c0]">Governments and Commercial Policymakers</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Public sector entities focused on energy security and policy implementation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-[#33ca34] rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-[#0d10c0]">Global Energy Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    International energy corporations seeking African market access and partnerships.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-xl">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-[#33ca34] rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-[#0d10c0]">Independent Power Producers</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    IPPs requiring fuel supply and strategic advisory for power generation projects.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Companies We've Worked With Section - With Scrolling Animation */}
<section className="py-16 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-black mb-4">Our Customers and Partners</h2>
      <div className="w-24 h-1 bg-[#33ca34] mx-auto"></div>
    </div>

    <div className="space-y-8">
      {/* Top Row - Scrolling Right */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll-right space-x-12">
          {/* First set of logos */}
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/mercuria.png" 
              alt="Mercuria" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/q8-oils.jpeg" 
              alt="Q8 Oils" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/sasol.jpeg" 
              alt="Sasol" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-24 min-w-[200px]">
            <img 
              src="/images/logos/marine-lng.png" 
              alt="Marine LNG" 
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/eqt.jpg" 
              alt="EQT" 
              className="h-20 w-auto object-contain"
            />
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/mercuria.png" 
              alt="Mercuria" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/q8-oils.jpeg" 
              alt="Q8 Oils" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/sasol.jpeg" 
              alt="Sasol" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-24 min-w-[200px]">
            <img 
              src="/images/logos/marine-lng.png" 
              alt="Marine LNG" 
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/eqt.jpg" 
              alt="EQT" 
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Row - Scrolling Left */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll-left space-x-12">
          {/* First set of logos */}
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/gl-africa.png" 
              alt="GL Africa Energy" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/sekta.png" 
              alt="SEKTA" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/intel-log.jpeg" 
              alt="Intel" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/enpc.png" 
              alt="Enpc" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/kearney.png" 
              alt="Kearney" 
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/gl-africa.png" 
              alt="GL Africa Energy" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/sekta.png" 
              alt="SEKTA" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/intel-log.jpeg" 
              alt="Intel" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/enpc.png" 
              alt="Enpc" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-32 min-w-[200px]">
            <img 
              src="/images/logos/kearney.png" 
              alt="Kearney" 
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
      </div>
    </div>
    <Footer/>         
    </>
  )
}
