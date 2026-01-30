import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

/**
 * Footer component for the Galation Brothers website.
 * Includes company info, links, social media, and newsletter signup.
 */
const Footer: React.FC = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_NEWSLETTER_ENDPOINT || 'https://formspree.io/f/xpqrojor');

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                alt="Galation Brothers Logo"
                className="h-25 w-auto bg-gray-500 rounded p-1"
                src={`${import.meta.env.BASE_URL}assets/GalationBrothers_logo.png`}
              />
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Galation Brothers is a leading insurance provider in Zimbabwe, committed to delivering excellence and reliability through our partnership with AFC Holdings.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-xs text-gray-500 uppercase font-semibold">Partnered with</span>
              <img
                alt="AFC"
                className="h-30 w-auto  rounded px-1"
                src={`${import.meta.env.BASE_URL}assets/AFC_logo.png`}
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link className="text-gray-400 hover:text-blue-400 transition" to="/">Home</Link></li>
              <li><Link className="text-gray-400 hover:text-blue-400 transition" to="/services">Insurance</Link></li>
              <li><Link className="text-gray-400 hover:text-blue-400 transition" to="/feedback">Feedback</Link></li>
              <li><Link className="text-gray-400 hover:text-blue-400 transition" to="/contact">Contact</Link></li>
              <li><Link className="text-gray-400 hover:text-blue-400 transition" to="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 font-display">Insurance Products</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link className="text-gray-400 hover:text-blue-400 transition" to="/services">Car Insurance</Link></li>
              <li><Link className="text-gray-400 hover:text-blue-400 transition" to="/services">Radio Insurance</Link></li>
              <li><Link className="text-gray-400 hover:text-blue-400 transition" to="/services">Corporate Insurance</Link></li>
            </ul>
            <h4 className="text-lg font-bold mt-8 mb-4 font-display">Connect</h4>
            <div className="flex space-x-3">
              <a
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition"
                href={import.meta.env.VITE_SOCIAL_FACEBOOK || "https://facebook.com/galationbrothers"}
                target="_blank"
                rel="noopener"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition"
                href={import.meta.env.VITE_SOCIAL_TWITTER || "https://twitter.com/galationbros"}
                target="_blank"
                rel="noopener"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition"
                href={import.meta.env.VITE_SOCIAL_LINKEDIN || "https://linkedin.com/company/galation-brothers"}
                target="_blank"
                rel="noopener"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition"
                href={import.meta.env.VITE_SOCIAL_INSTAGRAM || "https://instagram.com/galationbrothers"}
                target="_blank"
                rel="noopener"
              >
                <FaInstagram className="text-sm" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-blue-500">
              {state.succeeded ? (
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="text-white text-lg" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 font-display text-green-400">Subscribed!</h4>
                  <p className="text-gray-400 text-sm">
                    Thank you for subscribing. You'll receive our latest updates and insurance tips.
                  </p>
                </div>
              ) : (
                <>
                  <h4 className="text-lg font-bold mb-2 font-display">Stay Updated</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Subscribe to get the latest insurance tips and news from Galation Brothers.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    {state.errors && (
                      <div className="bg-red-900/20 border border-red-800 rounded-lg p-2 mb-2">
                        <div className="flex items-center">
                          <FaExclamationTriangle className="text-red-500 text-xs mr-1" />
                          <span className="text-red-400 text-xs">Please check your email</span>
                        </div>
                      </div>
                    )}
                    <input
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <button
                      className="w-full bg-blue-950 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      type="submit"
                      disabled={state.submitting}
                    >
                      {state.submitting ? (
                        <>
                          <div className="animate-spin rounded-full h-3 w-3 border-b border-white"></div>
                          Subscribing...
                        </>
                      ) : (
                        'Subscribe'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Galation Brothers. All rights reserved. | Powered by AFC Holdings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;