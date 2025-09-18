import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const TeamPage = () => {
  return (
    <>
      <Navigation />
      <>
        <Head>
          <title>Our Team | Company Name</title>
          <meta name="description" content="Meet our talented team of professionals" />
        </Head>

        {/* Meet our team */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 mt-6">
                Our dedicated team of professionals drives our mission forward with expertise, integrity, and passion.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-left flex flex-col">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src="/images/ceo.png"
                    alt="Phinda Vilakazi"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Phinda Vilakazi</h3>
                <p className="text-blue-600">Chief Executive Officer</p>
                <a 
                  href="/team/phinda-vilakazi" 
                  className="mt-4 px-2.5 py-1 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition duration-200 inline-flex items-center text-sm w-fit"
                >
                  Read more
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Team Member 2 */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-left flex flex-col">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src="/images/coo.png"
                    alt="John Sichinga"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">John Sichinga</h3>
                <p className="text-blue-600">Chief Operating Officer</p>
                <a 
                  href="/team/john-sichinga" 
                  className="mt-4 px-2.5 py-1 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition duration-200 inline-flex items-center text-sm w-fit"
                >
                  Read more
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Team Member 3 */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-left flex flex-col">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/mpendulo.jpeg"
                    alt="Mpendulo Dlamini"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Mpendulo Dlamini</h3>
                <p className="text-blue-600">GM Trading & Business Development</p>
                <a 
                  href="/team/mpendulo-dlamini" 
                  className="mt-4 px-2.5 py-1 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition duration-200 inline-flex items-center text-sm w-fit"
                >
                  Read more
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Team Member 4 */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-left flex flex-col">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src="/images/graig.PNG"
                    alt="Craig Jeffries"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Craig Jeffries</h3>
                <p className="text-blue-600">GM Supply</p>
                <a 
                  href="/team/craig-jeffries" 
                  className="mt-4 px-2.5 py-1 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition duration-200 inline-flex items-center text-sm w-fit"
                >
                  Read more
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Team Member 5 */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-left flex flex-col">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src="/images/samm.PNG"
                    alt="Sumishin Naidoo"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sumishin Naidoo</h3>
                <p className="text-blue-600">Technology Head</p>
                <a 
                  href="/team/sumishin-naidoo" 
                  className="mt-4 px-2.5 py-1 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition duration-200 inline-flex items-center text-sm w-fit"
                >
                  Read more
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Team Member 6 */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-left flex flex-col">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src="/images/success.PNG"
                    alt="Success Mabunda"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Success Mabunda</h3>
                <p className="text-blue-600">Business Analyst</p>
                <a 
                  href="/team/success-mabunda" 
                  className="mt-4 px-2.5 py-1 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition duration-200 inline-flex items-center text-sm w-fit"
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
      <Footer />
    </>
  );
};

export default TeamPage;
