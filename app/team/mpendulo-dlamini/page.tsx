import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function MpenduloDlamini() {
  return (
    <>
        <Navigation/>
    <>
      <Head>
        <title>Mpendulo Dlamini - GM Trading & Business Development | Your Company Name</title>
        <meta name="description" content="Mpendulo Dlamini leads our liquid petroleum products and natural gas trading operations as GM of Trading & Business Development." />
      </Head>

      {/* Hero Section with Geometric Pattern */}
      <section className="relative bg-blue-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-xl"></div>
          <div className="absolute left-0 top-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-overlay filter blur-xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/mpendulo.jpeg"
                  alt="Mpendulo Dlamini"
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-3/5 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Mpendulo Dlamini</h1>
              <p className="text-xl font-light mb-6 text-blue-200">GM Trading & Business Development</p>
              <div className="flex justify-center lg:justify-start space-x-6">
                <a href="https://www.linkedin.com/in/mpendulo-dlamini-a0584a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white hover:text-blue-300 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative pb-4">
              Trading & Market Expertise
              {/* <span className="mb-2 absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-75"></span> */}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mpendulo Dlamini leads our liquid petroleum products and natural gas trading operations with strategic market insight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Professional Experience */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-blue-600">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Commercial Leadership</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  </div>
                  <span>Extensive experience in liquid petroleum products trading</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  </div>
                  <span>Specialized in natural gas market operations</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  </div>
                  <span>Proven track record in business development and market expansion</span>
                </li>
              </ul>
            </div>

            {/* Market Expertise */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-green-500">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 text-white p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Market Strategies</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  </div>
                  <span>Develops and implements innovative trading strategies</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  </div>
                  <span>Expert in risk management and hedging techniques</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  </div>
                  <span>Strong relationships with key industry partners</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            {/* <div className="bg-white p-8 rounded-xl border-2 border-blue-100 hover:border-blue-200 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Education & Credentials
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900">Bachelor's in Business Commerce</h4>
                  <p className="text-gray-600">[University Name]</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Advanced Trading Certification</h4>
                  <p className="text-gray-600">[Institution Name]</p>
                </div>
              </div>
            </div> */}

            {/* Achievements */}
            {/* <div className="bg-blue-50 p-8 rounded-xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
              <div className="absolute -right-5 -bottom-5 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Career Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-4 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Grew trading portfolio by 40% over three years</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-4 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Established key partnerships with international suppliers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-4 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Recognized as Top Performer in 2021 and 2022</span>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Back to Team Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/team" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Our Team
          </Link>
        </div>
      </section>
    </>
    <Footer/>
    </>
  );
}