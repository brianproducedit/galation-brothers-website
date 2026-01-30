import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowRight, FaCar, FaBroadcastTower, FaBuilding, FaCheck, FaHandHoldingHeart, FaShieldAlt, FaGlobeAfrica } from 'react-icons/fa';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Galation Brothers - Insurance Solutions for Zimbabwe</title>
        <meta name="description" content="Premier insurance solutions tailored for Zimbabwe. Comprehensive car, radio, and corporate insurance backed by AFC Holdings partnership." />
        <meta name="keywords" content="insurance Zimbabwe, car insurance, radio insurance, corporate insurance, AFC Holdings" />
        <meta name="author" content="Galation Brothers" />
        <meta property="og:title" content="Galation Brothers - Insurance Solutions for Zimbabwe" />
        <meta property="og:description" content="Securing your future with comprehensive insurance solutions in Zimbabwe." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://galationbrothers.co.zw/" />
      </Helmet>

      {/* Hero Section - match provided mockup */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="Zimbabwean cityscape skyline at dusk"
            className="w-full h-full object-cover brightness-75 contrast-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5SzQgjWYOu2UO2xaeQd2EoPTIceDKgN9tLvFwecqUVzDPpdeWTF_k1A5u35pupx0DwYTIso3c5QDj2-cBmuRtXm5Gn2kp3BD7Y8wYhcaYCus-B9o8JCqcM-9xH-ZE-3oJWZYAoqwdDH5ShZ_Y1_lGlICAQYJlgMVIFgDR6cTEnVmgzsYY8yVTI6oFAFdx9YrYtJh6SOqxEPTNEiQQNIqkHY0ZfTHwHo0zRUGQvd6hVVrx_z-PSGRd8V_Hix7BeYxN0QDMiaeGGxNS"
          />
          {/* Layered color overlays for the blue-to-green gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-800/85 via-transparent to-green-300/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-linear-to-br from-blue-800/60 via-green-500/40 to-green-400/30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
        </div>
        <main className="relative z-10">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center h-full text-white">
            <div className="max-w-2xl animate-fade-in-up">
              <span className="inline-block py-1 px-3 rounded-full bg-green-300/20 border border-green-300 text-green-300 text-sm font-bold tracking-wider mb-4">
                PARTNERED WITH AFC HOLDINGS
              </span>

              <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Securing Your Future, <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-green-200">Growing Together.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Galation Brothers provides premier insurance solutions tailored for Zimbabwe. Experience reliability backed by our strategic partnership with AFC Holdings.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-500 hover:bg-green-600 hover:text-black! text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition duration-300 text-center"
                >
                  Get Your Free Quote
                </Link>

                <a
                  href="#services"
                  className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-center flex items-center justify-center gap-2"
                >
                  Explore Services <FaArrowRight className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-light dark:bg-surface-dark py-10 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-primary dark:text-blue-400 text-3xl font-display font-bold mb-1">24/7</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Customer Support</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-primary dark:text-blue-400 text-3xl font-display font-bold mb-1">100%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Zimbabwean Owned</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-primary dark:text-blue-400 text-3xl font-display font-bold mb-1">Fast</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Claims Processing</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-primary dark:text-blue-400 text-3xl font-display font-bold mb-1">AFC</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Strategic Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-200 dark:bg-blue-950" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-2">Our Expertise</h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Comprehensive Insurance Solutions</h3>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              We offer a range of insurance products designed to protect what matters most to you, from your vehicle to your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Car Insurance Card */}
            <div className="group bg-surface-light dark:bg-surface-dark rounded-xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <FaCar className="text-9xl text-primary" />
              </div>
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 text-primary dark:text-blue-400">
                <FaCar className="text-2xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Car Insurance</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Comprehensive coverage for your vehicle against accidents, theft, and third-party liabilities. Drive with peace of mind on Zimbabwean roads.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary dark:text-blue-400 font-semibold hover:underline">
                Learn more <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </div>

            {/* Radio Insurance Card */}
            <div className="group bg-surface-light dark:bg-surface-dark rounded-xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <FaBroadcastTower className="text-9xl text-primary" />
              </div>
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                <FaBroadcastTower className="text-2xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Radio Insurance</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Specialized coverage for broadcasting equipment and radio infrastructure. Protect your voice and your signal against unforeseen damages.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary dark:text-blue-400 font-semibold hover:underline">
                Learn more <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </div>

            {/* Corporate Insurance Card */}
            <div className="group bg-surface-light dark:bg-surface-dark rounded-xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <FaBuilding className="text-9xl text-primary" />
              </div>
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                <FaBuilding className="text-2xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Corporate Insurance</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Tailored risk management solutions for businesses of all sizes. From assets to liability, we help your enterprise grow securely.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary dark:text-blue-400 font-semibold hover:underline">
                Learn more <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark relative overflow-hidden" id="partnership">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="Handshake representing partnership"
                  className="w-full h-auto object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRp5ibNbOcjm9BBAguRcOBmBc0EgMUkSrw3_ILQH0UHEyDZiDTG7PErcOEbJRCKxQThNScBU_nuoYRowu8E-V75I2z9PqonKCHShF-UEDNgb99pzXwbzmTydz8cQdLoeMZGkRtd5PBP5WM0XKXRlkDt_JV-7P-8iJ5FW-cWgjCkmoqF87LoI2OikxGJnK4lHwK0CgXDLCb7cB9rfhlRr3Var3fWweZvrFqZI19iZba8YBQW4_UR6jvNbOYIIglyyhcR4vzy3f3lJOX"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-8">
                  <div className="flex items-center gap-4 bg-white/90 dark:bg-gray-500 backdrop-blur-sm p-4 rounded-xl">
                    <img
                       alt="Galation Logo Small"
                      className="h-10 w-auto"
                      src="/assets/GalationBrothers_logo.png"
                    />
                    <div className="h-8 w-px bg-blue-900"></div>
                    <img
                      alt="AFC Logo Small"
                      className="h-10 w-auto"
                      src="/assets/AFC_logo.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-secondary dark:text-green-400 font-bold uppercase tracking-wide text-sm mb-2">Strategic Alliance</h2>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Partnered for Your Growth</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                Galation Brothers is proud to announce our strategic partnership with <strong>AFC Holdings</strong>. This collaboration brings together deep local expertise and robust financial backing to serve the Zimbabwean market better.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 flex items-center justify-center mt-1">
                    <FaCheck className="text-xs" />
                  </div>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">Enhanced financial stability and claim security.</span>
                </li>
                <li className="flex items-start">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 flex items-center justify-center mt-1">
                    <FaCheck className="text-xs" />
                  </div>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">Wider network of services tailored to agriculture and development.</span>
                </li>
                <li className="flex items-start">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 flex items-center justify-center mt-1">
                    <FaCheck className="text-xs" />
                  </div>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">Innovative insurance products driven by shared values.</span>
                </li>
              </ul>
              <a className="text-secondary dark:text-green-400 font-bold hover:text-green-700 dark:hover:text-green-300 transition flex items-center gap-2" href="#">
                Read more about our partnership <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (converted to match provided reference) */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-200 font-bold uppercase tracking-wide text-sm mb-2">Why Choose Us</h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold">Dedicated to Your Peace of Mind</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/20 transition">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 text-blue-950 text-2xl">
                <FaHandHoldingHeart />
              </div>
              <h4 className="text-xl font-bold mb-3">Customer First Approach</h4>
              <p className="text-blue-100">We believe in building relationships, not just policies. Our team is dedicated to understanding your unique needs.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/20 transition">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 text-blue-950 text-2xl">
                <FaShieldAlt />
              </div>
              <h4 className="text-xl font-bold mb-3">Reliable Coverage</h4>
              <p className="text-blue-100">Backed by strong partnerships, we ensure that when you need us, we are there to deliver on our promises.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/20 transition">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 text-blue-950 text-2xl">
                <FaGlobeAfrica />
              </div>
              <h4 className="text-xl font-bold mb-3">Local Understanding</h4>
              <p className="text-blue-100">Deeply rooted in Zimbabwe, we understand the local landscape and challenges better than anyone else.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Ready to secure your future?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">Get a tailored insurance quote today and see how Galation Brothers can protect what matters most.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gray-200 text-gray-900 border border-gray-300 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-800 hover:shadow-xl hover:text-white transition transform hover:-translate-y-1 inline-block text-center"
            >
              Get a Quote Now
            </Link>
            <Link
              to="/contact"
              className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 font-bold py-4 px-10 rounded-full shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition inline-block text-center"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;