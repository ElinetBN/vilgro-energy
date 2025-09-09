import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const TeamPage = () => {
  return (
    <>
        <Navigation/>
    <>
      <Head>
        <title>Our Team | VILGRO Energy</title>
        <meta name="description" content="Meet our exceptional leadership team driving VILGRO Energy's vision forward" />
      </Head>

      {/* Meet our team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mt-6">
              At VILGRO Energy, our board and executive team bring together decades of combined experience in energy, 
              finance, and corporate governance to drive sustainable growth and innovation in Africa's energy sector.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                <Image
                  src="/images/lulama.PNG"
                  alt="Lulama Boyce"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Lulama Boyce</h3>
              <p className="text-blue-600 mb-4">Chairperson</p>
              <a 
                href="/team/lulama-boyce" 
                className="px-3 py-1.5 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition duration-200 inline-flex items-center text-sm"
              >
                Read more
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                <Image 
                  src="/images/ceo.png"
                  alt="Phinda Vilakazi"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Phinda Vilakazi</h3>
              <p className="text-blue-600 mb-4">Chief Executive Officer</p>
              <a 
                href="/team/phinda-vilakazi" 
                className="px-3 py-1.5 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition duration-200 inline-flex items-center text-sm"
              >
                Read more
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                <Image 
                  src="/images/coo.png"
                  alt="John Sichinga"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">John Sichinga</h3>
              <p className="text-blue-600 mb-4">Chief Operating Officer</p>
              <a 
                href="/team/john-sichinga" 
                className="px-3 py-1.5 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition duration-200 inline-flex items-center text-sm"
              >
                Read more
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Team Member 4 */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                <Image 
                  src="/images/phumlile.PNG"
                  alt="Phumulile Mogale"
                  width={128}
                  height={128}
                  className=" object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Phumulile Mogale</h3>
              <p className="text-blue-600 mb-4">Legal Advisor</p>
              <a 
                href="/team/phumulile-mogale" 
                className="px-3 py-1.5 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition duration-200 inline-flex items-center text-sm"
              >
                Read more
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
    <Footer/>
    </>
  );
};

export default TeamPage;