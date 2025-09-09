import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AdvisoryPage() {
  return (
    <>
    <Navigation/>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900">Strategic Energy Advisory</h1>
              <p className="text-xl mb-8 text-gray-600">
                Navigating Africa's energy markets with insight and expertise.
              </p>
              <Link href="/contact" passHref>
              <Button className="bg-[#33ca34] hover:bg-[#33ca34] text-white">
                Consult Our Experts
              </Button>
              </Link>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/images/strategic.jpg"
                alt="Strategic Advisory"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advisory Services</h2>
            <div className="w-24 h-1 bg-[#33ca34] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Market Entry Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Comprehensive analysis for new market entrants.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Policy & Regulation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Guidance on energy policies and compliance.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Energy Transition Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Roadmaps for integrating renewable energy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Energy Market Expertise?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Vilgro Energy's advisors bring practical experience to your challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-[#33ca34] hover:bg-[#33ca34]">
                Request Consultation
              </Button>
            </Link>
            <Link href="/services" passHref>
              <Button size="lg" variant="outline" className="text-[#33ca34] border-[#33ca34] hover:bg-green-50">
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