import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function SuccessOverseas() {
  return (
    <>
        <Navigation/>
    <>
      <Head>
        <title>Success Overseas - Data Management & Supply Chain Analyst | Your Company Name</title>
        <meta name="description" content="Success Overseas oversees our data management and supply chain analysis, focusing on collecting, interpreting, and analyzing data to guide strategic decisions." />
      </Head>

      {/* Hero Section with Diagonal Gradient */}
      <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 py-20 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <div className="absolute right-0 -top-20 w-64 h-64 bg-white rounded-full mix-blend-overlay"></div>
          <div className="absolute right-40 top-40 w-32 h-32 bg-white rounded-full mix-blend-overlay"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/success.PNG"
                  alt="Success Mabunda"
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-3/5 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Success Overseas</h1>
              <p className="text-xl font-light mb-6 text-blue-200">Data Management & Supply Chain Analyst</p>
              <div className="flex justify-center lg:justify-start space-x-6">
                <a href="#" className="text-white hover:text-blue-300 transition-colors">
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

      {/* Content Section with Animated Elements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative pb-4">
              Data & Analytics Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Success Overseas oversees our data management and supply chain analysis, focusing on collecting, interpreting, and analyzing data to guide strategic decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Data Management Card */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-blue-600">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Data Management Expertise</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  </div>
                  <span>Comprehensive data collection and interpretation methodologies</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  </div>
                  <span>Advanced analytics to guide strategic business decisions</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  </div>
                  <span>Data-driven insights for operational optimization</span>
                </li>
              </ul>
            </div>

            {/* Supply Chain Analysis Card */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-green-500">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 text-white p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Supply Chain Analysis</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  </div>
                  <span>Storage optimization and efficiency analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  </div>
                  <span>Logistics cost analysis and delivery optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  </div>
                  <span>Streamlined and cost-effective operations management</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Core Capabilities</h3>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Collection</h4>
                  <p className="text-sm text-gray-600">Systematic gathering and validation of operational data</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Analysis</h4>
                  <p className="text-sm text-gray-600">Advanced interpretation and pattern recognition</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Strategic Insights</h4>
                  <p className="text-sm text-gray-600">Actionable recommendations for decision-making</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Efficiency Focus */}
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
              <div className="absolute -right-5 -bottom-5 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Cost Efficiency Specialization</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 p-1 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Storage Efficiencies</h4>
                    <p className="text-sm text-gray-600">Optimizing storage solutions and warehouse management</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 p-1 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Logistics Optimization</h4>
                    <p className="text-sm text-gray-600">Streamlining transportation and distribution networks</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 p-1 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Delivery Cost Management</h4>
                    <p className="text-sm text-gray-600">Minimizing delivery costs while maintaining service quality</p>
                  </div>
                </div>
              </div>
            </div>
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
