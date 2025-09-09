import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Fuel, Zap, Building, TrendingUp, Handshake } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      title: "Liquid Fuels",
      icon: <Fuel className="h-8 w-8 text-white" />, // bigger icon
      image: "/images/liquid-fuel.jpeg",
      url: "/services/liquid-fuels"
    },
    {
      title: "Natural Gas &  Liquefied Natural Gas",
      icon: <Zap className="h-8 w-8 text-white" />,
      image: "/images/liq2.jpeg",
      url: "/services/natural-gas"
    },
    {
      title: "Infrastructure Development",
      icon: <Building className="h-8 w-8 text-white" />,
      image: "/images/landing.jpeg",
      url: "/services/infrastructure"
    },
    {
      title: "Strategic Advisory",
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      image: "/images/advisory.jpeg",
      url: "/services/strategic-advisory"
    },
    {
      title: "Mergers & Acquisitions",
      icon: <Handshake className="h-8 w-8 text-white" />,
      image: "/images/acquisition.jpeg",
      url: "/services/mergers-acquisitions"
    }
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        {/* Header */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-[#0d10c0] mb-6">Our Services</h1>
            <div className="flex justify-center mb-8">
        <div className="w-20 h-1 bg-[#0d10c0]"></div>
      </div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy solutions designed to power Africa's future through innovation and sustainability.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link href={service.url} key={index} passHref>
                  <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col cursor-pointer border border-gray-200 rounded-2xl">
                    <CardHeader className="p-6 pb-2">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-14 h-14 bg-[#33ca34] rounded-full flex items-center justify-center">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-800">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-grow">
                      <div className="relative h-56 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <Button className="w-full bg-[#33ca34] hover:bg-[#33ca34]text-lg py-6 rounded-xl">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
