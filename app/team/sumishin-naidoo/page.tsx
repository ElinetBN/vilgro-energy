import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function SumishinNaidoo() {
  return (
    <>
        <Navigation/>
    <>
      <Head>
        <title>Sumishin Naidoo - Technology Head | Your Company Name</title>
        <meta name="description" content="Sumishin Naidoo is our Technology Head, a registered professional engineer with over 20 years of experience in design and execution of major capital projects globally." />
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
                  src="/images/samm.PNG"
                  alt="Sumishin Naidoo"
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-3/5 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Sumishin Naidoo</h1>
              <p className="text-xl font-light mb-6 text-blue-200">Technology Head</p>
              <div className="text-sm text-blue-200 mb-6">
                Pr.Eng | MBA | BSc.Eng (Hons) Chemical Engineering
              </div>
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
              Technology Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sumishin (Sumish) Naidoo is a registered professional engineer (Pr.Eng) with over 20 years of experience in the design and execution of major capital projects spanning across multiple continents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Experience Card */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-blue-600">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Global Experience</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  </div>
                  <span>International project experience across South Africa, UK, Russia, Canada, Algeria, Kazakhstan, and Colombia</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  </div>
                  <span>Extended assignments with major clients including Sasol, Shell, Exxon Mobil, Talisman, and Impala Platinum</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  </div>
                  <span>Built and led successful Engineering and EPC company for over 10 years</span>
                </li>
              </ul>
            </div>

            {/* Expertise Card */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-green-500">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 text-white p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Technical Expertise</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  </div>
                  <span>Major capital projects design and execution in Energy and Chemicals sectors</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  </div>
                  <span>Process engineering and project management across diverse industries</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  </div>
                  <span>Engineering, procurement, and construction (EPC) project delivery</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Career Progression */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Career Progression</h3>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Early Career</h4>
                  <p className="text-sm text-gray-600">Design Process Engineer → Lead Process Engineer</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Management Roles</h4>
                  <p className="text-sm text-gray-600">Project Engineer → Engineering Manager → Marketing Manager</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Leadership</h4>
                  <p className="text-sm text-gray-600">Key Account Manager → Director → Company Owner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="bg-white p-8 rounded-xl border-2 border-blue-100 hover:border-blue-200 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Education & Qualifications
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900">BSc.Eng (Hons) Chemical Engineering</h4>
                  <p className="text-gray-600">University of Natal</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Master of Business Administration (MBA)</h4>
                  <p className="text-gray-600">Henley Business School (UK)</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Professional Registration</h4>
                  <p className="text-gray-600">Registered Professional Engineer (Pr.Eng)</p>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="bg-blue-50 p-8 rounded-xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
              <div className="absolute -right-5 -bottom-5 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Achievements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-4 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Successfully built and operated an Engineering and EPC company for 10+ years</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-4 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Completed major projects across Energy and Chemicals sectors in Africa and internationally</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-4 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Delivered projects for major South African companies and multinational corporations</span>
                  </li>
                </ul>
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
