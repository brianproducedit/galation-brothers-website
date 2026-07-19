import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaArrowRight, FaFlag, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

/**
 * AboutPage component - Displays company information, history, leadership, and values
 * Includes hero section, origins, partnership details, mission/values, and leadership team
 */
const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Galation Brothers - Zimbabwe Insurance Experts</title>
        <meta name="description" content="Learn about Galation Brothers - Zimbabwe's premier insurance provider partnered with AFC Holdings. Discover our commitment to reliable insurance solutions." />
        <meta name="keywords" content="about Galation Brothers, Zimbabwe insurance, AFC Holdings partnership, insurance company" />
        <meta name="author" content="Galation Brothers" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Galation Brothers - Zimbabwe Insurance Experts" />
        <meta property="og:description" content="Founded with a vision to revolutionize insurance in Zimbabwe. Partnered with AFC Holdings for stability and growth." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://galationbrothers.co.zw/about" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative bg-blue-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Harare Skyline Abstract"
            className="w-full h-full object-cover opacity-5"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgdKRS2UqNZJcW5oAGTdS5tATSuSfNR1wfUT3EElhPQW9pDnnKu2YaUCD33nSDPqhFMspw5zOnumSturnDe3X3S4xwffs1WdsU3LYQPVK7Suksl8HI9Jb1q6bK3XYFrARevwv-g-6Kr2CHlNpVjlS4GaEREYqMfgIIi96UT9g2nbBj-ezgHuxzTpPsoQ0CqBgA_P7h3QC9ySm4WaabRAW7546olhsfi7fGG820ZbT9HXD_RcXm8KOOAENykpevlqDNuhkfboFwl8-W"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Securing Your Future,<br className="hidden sm:block" /> Rooted in Zimbabwe.
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Founded with a vision to revolutionize the insurance landscape of 2026 and beyond. We combine traditional values with modern protection strategies.
          </p>
        </div>
      </div>

      {/* Origins Section */}
      <section className="py-16 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Origins</h2>
              <p className="mt-2 text-3xl leading-8 font-display font-extrabold tracking-tight text-text-light dark:text-white sm:text-4xl">
                Established in 2026
              </p>
              <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Galations Brothers was born from a singular vision: to create an insurance partner that truly understands the evolving landscape of Zimbabwe's economy. Founded in Harare, we recognized a gap for personalized, tech-driven insurance solutions that don't compromise on human connection.
              </p>
              <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Our founders believed that trust is the currency of the future. By leveraging cutting-edge risk assessment models developed for the markets of the late 2020s, we provide security that is both robust and accessible.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  alt="Corporate Meeting in Modern Office"
                  className="object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg2HDfrjbSZBshXCJwZZce4xqnFypna7qDuRz8k1HNPLnnT_8PoLAB1kMo3aKNCxV9mt64BbbU2-Mn3vNfehoDFyCj6nu4zIcOpqVQQWtcCw9gPeOCXPamJ6tXLO7YsVmzi3awQ_82goiP-iriwfislNxwpU3i9vpgi7eCjGe-iEHJCII9p2qdejKpEjo5idjCy9GVCke09-P-4E7MfuzJQvT-DRdMXShXobaY4deh67ke27I80hGpufLFHlYEcxScciwwaqUwfivr"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="lg:flex">
              <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <a href="https://www.afcholdings.co.zw/" target="_blank" rel="noopener noreferrer">
                    <img
                      alt="Galations Logo"
                      className="h-12 w-auto"
                      src={`${import.meta.env.BASE_URL}assets/AFC_logo.png`}
                    />
                  </a>
                  <span className="text-3xl text-gray-300 font-light">|</span>
                  <img
                    alt="AFC Holdings Logo"
                    className="h-16 w-auto"
                    src={`${import.meta.env.BASE_URL}assets/GalationBrothers_logo.png`}
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-light dark:text-white mb-4">
                  Strengthened by <a href="https://www.afcholdings.co.zw/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">AFC Holdings</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our strategic partnership with <a href="https://www.afcholdings.co.zw/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 font-semibold">AFC Holdings</a> is the bedrock of our financial stability. As we grow together, <a href="https://www.afcholdings.co.zw/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 font-semibold">AFC</a>'s legacy in agricultural finance and development banking provides Galations Brothers with the capital depth and institutional knowledge required to underwrite complex risks across Zimbabwe.
                </p>
                <a className="inline-flex items-center font-semibold text-green-700 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300" href="#">
                  Learn about our partnership <FaArrowRight className="ml-1 text-sm" />
                </a>
              </div>
              <div className="lg:w-1/2 relative bg-green-800">
                <img
                  alt="Agriculture and Growth"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-overlay"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuiEd3ehntskPL4fnzaS-46cbcnz0YxX8p9vf-VsXLpsoskuyzwE3-pbyeKYPiyMSHQcTR5IlPiBdLw0o6CEdQeT1XQNBkXgg3lhvQbennL4CTSrIKIEFq3QFc67PcXQvZIzbi0D4UuX_K7LBMXdMcialiNzAvu3BpKdg0IyinJSzchfZAVMKj8OABnu6BxcPNLxfo5-8z1dIk0N73IpoPX-N4IIv08KyaY1fRAZnB2Xcv2I8PyG2knnQu8JdyTYwwo2krVOVSJhEp"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h4 className="text-white text-3xl font-display font-bold mb-2">Growing Together</h4>
                    <p className="text-green-100">Cultivating a secure future for every Zimbabwean enterprise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-extrabold text-text-light dark:text-white sm:text-4xl">Mission &amp; Values</h2>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">Guiding principles that define who we are.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition hover:-translate-y-1 hover:shadow-lg border border-transparent dark:border-gray-700">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FaFlag className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To provide innovative, reliable, and accessible insurance solutions that empower individuals and businesses in Zimbabwe to thrive without fear of the unknown.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition hover:-translate-y-1 hover:shadow-lg border border-transparent dark:border-gray-700">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FaShieldAlt className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">Integrity First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transparency isn't just a buzzword; it's our policy. We believe in clear terms, honest claims processing, and ethical financial management.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition hover:-translate-y-1 hover:shadow-lg border border-transparent dark:border-gray-700">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FaLightbulb className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">Future Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">
                As a 2026-founded entity, we embrace technology. From AI-driven risk assessment to seamless digital claims, we are building the insurance of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-extrabold text-text-light dark:text-white">Leadership Team</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">The visionaries steering Galations Brothers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-w-3 aspect-h-4 bg-gray-200 dark:bg-gray-700">
                <img
                  alt="CEO Portrait"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300 grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl1G7hij9zXIPTbpbVsPD5UnT87-LL4MCBgnQ2Q7z-wQUJ1d3Ed-YuS22uduH0tiYj7ITpTW1CuMwddcBu8gKJGrIOVDy-zxcqQjR9F5EEbMYsEw-UIqajYaXgm7JSD6B-AVo6-HkIYbJ7iM4pk6bN_YlmcjWmHfXHEifzWxdvj5KCoUL7OxJN8zzaFEgZbWwH8FWe4oR_SAIJDCEC_iWzrJ5M2YrM8Cn_ufkhim2xaVuEF2JV-eRlKx1US865Bxg3YA6v2DdwwCfV"
                />
              </div>
              <h3 className="text-lg font-bold text-text-light dark:text-white">Byton Magadu</h3>
              <p className="text-primary text-sm font-medium">Co-Founder &amp; CEO</p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-w-3 aspect-h-4 bg-gray-200 dark:bg-gray-700">
                <img
                  alt="COO Portrait"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300 grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB97kLW7aJ-_4Zmwmtbx4dB31RKtaKQcVrmOPgxnAQbo2ERmT3_HBjyLizQ7-GbVTSllVLMnz1CPfmzQvRJ-pgbsZIfy2KMe-T6AcnhCluVle9Y3tdNGt_6jtqJ6y_N3lhs0WMRBLaztJ1vtILbv67PURpRExhJCrz3TIbuzDbIjvMDV4J2mw6tMVpZoecKbwsarFQtwidmkaG-kOJZb6csXgRll2gbX2pfZOKUhIkq9K5pjPENO84BJua7xj17jxU9clWVcHCXmF0S"
                />
              </div>
              <h3 className="text-lg font-bold text-text-light dark:text-white">Nyasha Moyo</h3>
              <p className="text-primary text-sm font-medium">Chief Operations Officer</p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-w-3 aspect-h-4 bg-gray-200 dark:bg-gray-700">
                <img
                  alt="CFO Portrait"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300 grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7oNAK9XZVwmIF--RkES_WjvyZH3yZvJihmxC_Lr9lZ7GugdV2neS42whOkzjd802B2ql2q1OvBl7N0I3zntNRr-sR-nTaEIT0qu5ox0oaq1CN5FjlrE4Py26q2P6PAEblU2ImrggTo-upTWuCPeK47wiWEPH3Im-16izQ20NBzC5hiuVe-z5NL7bk5CBWBMpo2ZBnGifnz9bLn9yDhxOA9StwnvwVWS0T1rJzbJ3FPErP15aA8ABi9UYLS9mOvgliMTPfq-_M_m1P"
                />
              </div>
              <h3 className="text-lg font-bold text-text-light dark:text-white">Simbarashe Galation</h3>
              <p className="text-primary text-sm font-medium">Co-Founder &amp; CFO</p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-w-3 aspect-h-4 bg-gray-200 dark:bg-gray-700">
                <img
                  alt="CTO Portrait"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300 grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Ip6kncWIdMnyE11XVdPc1FTL_VO0Xq3KpCqAEax8JF6_6vPR36atjsSmmfXfxn8BIpyb8noVNF1yAVkp9fw5_TtB7QgLJgLG3nzvq-zhVsucVU09I_HdABhrXKiMtEgDBt5ZmHyuTP-jitbCekXWC4MkHw8pJvF7m0A_3H6V8U5KL4n6CX6yBMA_TSo4qoN3nj0sSBrnLCrgR3yiymM_neYEVlUy42vPyjoZr3hwaRIfYqdk4CvOEjL0wHPhITgdjFtvEh5ThUzr"
                />
              </div>
              <h3 className="text-lg font-bold text-text-light dark:text-white">Chipo Ndlovu</h3>
              <p className="text-primary text-sm font-medium">Head of Innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800/50">
            <div>
              <p className="text-4xl font-bold text-white">2026</p>
              <p className="text-blue-200 text-sm mt-1 uppercase tracking-wider">Established</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">100%</p>
              <p className="text-blue-200 text-sm mt-1 uppercase tracking-wider">Local Ownership</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">AFC</p>
              <p className="text-blue-200 text-sm mt-1 uppercase tracking-wider">Strategic Partner</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">24/7</p>
              <p className="text-blue-200 text-sm mt-1 uppercase tracking-wider">Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;