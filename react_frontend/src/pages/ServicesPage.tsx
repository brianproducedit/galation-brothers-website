import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCar, FaBroadcastTower, FaBuilding, FaCheck } from 'react-icons/fa';

/**
 * ServicesPage component - Displays comprehensive insurance services offered by Galation Brothers
 * Includes hero section, partnership banner, service cards, and call-to-action
 */
const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Insurance Services - Galation Brothers Zimbabwe</title>
        <meta name="description" content="Comprehensive insurance plans including car, radio, and corporate insurance. Reliable coverage backed by AFC Holdings partnership." />
        <meta name="keywords" content="insurance services, car insurance Zimbabwe, radio insurance, corporate insurance, AFC Holdings" />
        <meta name="author" content="Galation Brothers" />
        <meta property="og:title" content="Insurance Services - Galation Brothers Zimbabwe" />
        <meta property="og:description" content="Choose the protection that fits your lifestyle and business needs." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://galationbrothers.co.zw/services" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative bg-surface-light dark:bg-surface-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-surface-light dark:bg-surface-dark sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              aria-hidden="true"
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-surface-light dark:text-surface-dark transform translate-x-1/2"
              fill="currentColor"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              {/* <polygon points="50,0 100,0 50,100 0,100"></polygon> */}
            </svg>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Securing your future with</span>
                  <span className="block text-blue-900">Galations Brothers</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Comprehensive insurance solutions tailored for Zimbabwe's unique landscape. Proudly partnered with <a href="https://www.afcholdings.co.zw/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">AFC Holdings</a> to bring you stability, trust, and growth.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-900 md:py-4 md:text-lg transition duration-200 shadow-lg"
                      href="#services"
                    >
                      Explore Services
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-950 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 md:py-4 md:text-lg transition duration-200"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            alt="Insurance documents and consultation"
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAld2KRjELkA8j1xp1VZBDS1EYcZHELFklP6tiy4kXdPG6o4G8buS3QoWC8hiYAyEjJwbq4MkmAYis3bzsJHNbjijfWKPi-oBIx-twAZW4Ip4FqAwOOUgDpJwA9_Td3oMJHe6Q7_CZuYeqQBc4r7IZ3OQFiS5SCUmPPsy3_sMCUYN9li3H-Nxk25A0kQLnVlnexN_BN7m_8XNlHTF95dArEzXpqyd6r7IuZEH1o6PHj8dMmIJdgsD1Ca20yAafP1kCi1_x4VAKJhNYD"
          />
          <div className="absolute inset-0 bg-linear-to-r from-surface-light dark:from-surface-dark to-transparent lg:via-surface-light/20 lg:to-transparent"></div>
        </div>
      </div>

      {/* Partnership Banner */}
      <div className="bg-green-50 dark:bg-green-950 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <span className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider text-sm">Strategic Partner</span>
            <div className="h-8 border-l border-gray-300 dark:border-gray-600 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <img
                alt="Galations Brothers Logo"
                className="h-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                src={`${import.meta.env.BASE_URL}assets/GalationBrothers_logo.png`}
              />
              <span className="text-xl text-gray-400 dark:text-gray-500">×</span>
              <a href="https://www.afcholdings.co.zw/" target="_blank" rel="noopener noreferrer">
                <img
                  alt="AFC Holdings Logo"
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  src={`${import.meta.env.BASE_URL}assets/AFC_logo.png`}
                />
              </a>
            </div>
            <span className="text-green-700 font-semibold text-sm md:text-base dark:text-green-400">Growing Together</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 bg-gray-100 dark:bg-gray-800" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-secondary font-semibold tracking-wide uppercase">Our Offerings</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-display">
              Comprehensive Insurance Plans
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Choose the protection that fits your lifestyle and business needs. Reliable coverage backed by industry expertise.
            </p>
          </div>
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* Car Insurance Card */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col">
                <div className="p-6 flex-1">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                    <FaCar className="text-3xl text-primary dark:text-blue-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display mb-3">Car Insurance</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-4">
                    Comprehensive coverage for your vehicle against accidents, theft, and third-party liabilities. Drive with peace of mind knowing you're protected on every journey.
                  </p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 mb-6 space-y-2">
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 text-sm mr-2" /> Roadside Assistance
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 text-sm mr-2" /> Third-Party Liability
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 text-sm mr-2" /> Accident Repair
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4">
                  <Link
                    to="/contact"
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-primary dark:text-white font-semibold py-2 px-4 rounded hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-200 inline-block text-center"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>

              {/* Radio Insurance Card - Popular */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-blue-500 dark:border-gray-700 flex flex-col relative transform md:-translate-y-4 md:border-t-4 md:border-t-secondary">
                <div className="absolute top-0 right-0 bg-secondary text-blue-700 text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                <div className="p-6 flex-1">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                    <FaBroadcastTower className="text-3xl text-secondary dark:text-green-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display mb-3">Radio Insurance</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-4">
                    Specialized protection for broadcasting equipment, radio stations, and media assets. Ensure your voice stays on air with our tailored equipment cover.
                  </p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 mb-6 space-y-2">
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 text-sm mr-2" /> Equipment Damage
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 text-sm mr-2" /> Transmission Failure
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 text-sm mr-2" /> Theft Protection
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4">
                  <Link
                    to="/contact"
                    className="w-full bg-green-800 text-white font-semibold py-2 px-4 rounded hover:bg-green-900 transition-colors duration-200 shadow-md inline-block text-center"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>

              {/* Corporate Insurance Card */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col">
                <div className="p-6 flex-1">
                  <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                    <FaBuilding className="text-3xl text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display mb-3">Corporate Insurance</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-4">
                    Robust solutions for businesses of all sizes. From employee liability to asset protection, we safeguard your company's future and operational continuity.
                  </p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 mb-6 space-y-2">
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 text-sm mr-2" /> Asset Protection
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 text-sm mr-2" /> Employee Liability
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 text-sm mr-2" /> Business Interruption
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4">
                  <Link
                    to="/contact"
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-primary dark:text-white font-semibold py-2 px-4 rounded hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-200 inline-block text-center"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 dark:bg-blue-800 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-display">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200 text-2xl mt-2">Partner with reliability.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Join hundreds of satisfied clients who trust Galations Brothers and <a href="https://www.afcholdings.co.zw/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">AFC Holdings</a> for their insurance needs.
          </p>
          <Link
            to="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-950 bg-white hover:bg-gray-50 sm:w-auto"
          >
            Contact an Agent
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;