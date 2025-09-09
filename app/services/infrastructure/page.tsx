import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function InfrastructurePage() {
  return (
    <>
     <Navigation/>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">          
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900">Energy Infrastructure Development</h1>
              <p className="text-xl mb-8 text-gray-600">
                Building Africa's energy backbone to power economic growth.
              </p>
              <Button className="bg-[#33ca34] hover:bg-[#33ca34] text-white">
                Discuss Your Project
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/images/vilgro.jpeg"
                alt="Energy Infrastructure"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Infrastructure Solutions</h2>
            <div className="w-24 h-1 bg-[#33ca34] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Storage Terminals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Strategic bulk storage with modern automation and safety systems.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Pipeline Networks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Efficient fuel transportation reducing road congestion.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">LNG Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Regasification terminals and small-scale LNG solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
          
            <Link href="/services" passHref>
              <Button size="lg" variant="outline" className="text-[#33ca34] border-[#33ca34] hover:bg-[#33ca34]">
                View All Services
              </Button>
            </Link>
          
        </div>
      </section>
    </div>
    <Footer/>
    </>
  )
}