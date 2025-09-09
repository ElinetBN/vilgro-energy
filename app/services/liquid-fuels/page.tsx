import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function LiquidFuelsPage() {
  return (
    <>
     <Navigation/>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Liquid Fuels Solutions</h1>
              <p className="text-xl mb-8 text-blue-100">
                Reliable supply and trading of petroleum products across Southern Africa's energy markets.
              </p>
              <Link href="/contact" passHref>
              <Button className="bg-white text-blue-800 hover:bg-gray-100">
                Contact Our Fuels Team
              </Button>
            </Link>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/liq.jpg"
                alt="Liquid Fuels Infrastructure"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Southern Africa's Fuel Supply Chain</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-700 mb-6">
                Vilgro Energy specializes in the trading, sourcing, and distribution of refined petroleum products including gasoline, diesel, jet fuel, and other specialty products across the Southern African region.
              </p>
              <p className="text-gray-700 mb-6">
                Our integrated supply chain solutions ensure reliable access to quality fuels even in remote locations, supported by strategic storage facilities and transportation networks.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Core Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Crude oil trading and procurement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Regional refined product distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Strategic storage solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Supply chain optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fuel Products</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Gasoline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Various grades including unleaded and premium formulations meeting regional specifications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Diesel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Ultra-low sulfur and standard diesel for transportation and industrial use.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Jet Fuel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Jet A-1 meeting international quality standards for aviation sector.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Specialty Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Including lubricants, bitumen, and other petroleum derivatives.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/place-order" passHref>
              <Button size="lg" variant="outline" className="text-blue-700 mt-12 border-blue-700 hover:bg-blue-50">
                Place Order
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supply Chain Infrastructure</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-gray-700">
              <p>
                Vilgro Energy has developed strategic partnerships with storage terminals, pipelines, and transportation providers across the SADC region to ensure reliable fuel supply even during market disruptions.
              </p>
              <p>
                Our network includes access to key port facilities in Durban, Maputo, and Walvis Bay, with inland storage in Johannesburg, Lusaka, and Harare.
              </p>
              <p>
                We continuously invest in supply chain resilience through inventory management systems and diversified sourcing strategies.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/pic2.jpg"
                alt="Fuel Storage Terminal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Reliable Fuel Supply?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Contact Vilgro Energy to discuss your liquid fuels requirements and supply chain solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
             
            </Link>
            <Link href="/services" passHref>
              <Button size="lg" variant="outline" className="text-blue-700 border-blue-700 hover:bg-blue-50">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  )
}