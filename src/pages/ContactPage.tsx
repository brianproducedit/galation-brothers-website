import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm, ValidationError } from '@formspree/react';
import { FaClipboardList, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

/**
 * ContactPage component - Provides contact information and quote request form
 * Includes form for insurance quotes and contact details with map
 */
const ContactPage: React.FC = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT || 'mnjdejyk');

  if (state.succeeded) {
    return (
      <>
        <Helmet>
          <title>Contact Us - Galation Brothers Insurance Zimbabwe</title>
          <meta name="description" content="Get in touch with Galation Brothers for insurance quotes and support. Visit our offices in Harare or contact us online." />
          <meta name="keywords" content="contact Galation Brothers, insurance quote, Zimbabwe insurance, AFC Holdings" />
          <meta name="author" content="Galation Brothers" />
          <meta property="og:title" content="Contact Us - Galation Brothers Insurance Zimbabwe" />
          <meta property="og:description" content="Ready to protect your journey? Request a comprehensive insurance quote today." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://galationbrothers.co.zw/contact" />
        </Helmet>
        {/* Header */}
        <header className="relative bg-blue-900 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-primary to-blue-900 opacity-90"></div>
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              fill="none"
              style={{ opacity: 0.1 }}
              viewBox="0 0 375 283"
            >
              <rect fill="white" height="152" rx="8" transform="rotate(-45 159.52 175)" width="152" x="159.52" y="175"></rect>
              <rect fill="white" height="152" rx="8" transform="rotate(-45 0 107.48)" width="152" y="107.48"></rect>
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <h1 className="text-3xl font-display font-extrabold text-white sm:text-4xl">Get in Touch &amp; Get Covered</h1>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl">
              Ready to protect your journey? Request a comprehensive insurance quote today or visit our offices in Zimbabwe.
            </p>
          </div>
        </header>

        {/* Success Message */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheck className="text-green-600 dark:text-green-400 text-2xl" />
              </div>
              <h2 className="text-2xl font-display font-bold text-green-800 dark:text-green-400 mb-4">Thank You!</h2>
              <p className="text-green-700 dark:text-green-300 text-lg mb-6">
                Your quote request has been submitted successfully. Our team will get back to you within 24 hours with a tailored insurance plan.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Galation Brothers Insurance Zimbabwe</title>
        <meta name="description" content="Get in touch with Galation Brothers for insurance quotes and support. Visit our offices in Harare or contact us online." />
        <meta name="keywords" content="contact Galation Brothers, insurance quote, Zimbabwe insurance, AFC Holdings" />
        <meta name="author" content="Galation Brothers" />
        <meta property="og:title" content="Contact Us - Galation Brothers Insurance Zimbabwe" />
        <meta property="og:description" content="Ready to protect your journey? Request a comprehensive insurance quote today." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://galationbrothers.co.zw/contact" />
      </Helmet>
      {/* Header */}
      <header className="relative bg-blue-900 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-primary to-blue-900 opacity-90"></div>
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            fill="none"
            style={{ opacity: 0.1 }}
            viewBox="0 0 375 283"
          >
            <rect fill="white" height="152" rx="8" transform="rotate(-45 159.52 175)" width="152" x="159.52" y="175"></rect>
            <rect fill="white" height="152" rx="8" transform="rotate(-45 0 107.48)" width="152" y="107.48"></rect>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-3xl font-display font-extrabold text-white sm:text-4xl">Get in Touch &amp; Get Covered</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl">
            Ready to protect your journey? Request a comprehensive insurance quote today or visit our offices in Zimbabwe.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quote Request Form */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <FaClipboardList className="text-primary text-3xl mr-3" />
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Request a Quote</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Fill out the details below and our agents will get back to you with a tailored insurance plan.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {state.errors && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <FaExclamationTriangle className="text-red-500 text-lg mr-2" />
                    <span className="text-red-800 dark:text-red-400 font-medium">Please fix the following errors:</span>
                  </div>
                  <div className="text-red-700 dark:text-red-300 text-sm">
                    {typeof state.errors === 'string' ? state.errors : 'Please check the form fields and try again.'}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="name">
                    Full Name *
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-slate-400 text-lg" />
                    </div>
                    <input
                      className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-800 dark:text-white py-3"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      type="text"
                    />
                  </div>
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">
                    Email Address *
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-slate-400 text-lg" />
                    </div>
                    <input
                      className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-800 dark:text-white py-3"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      type="email"
                    />
                  </div>
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="phone">
                    Phone Number *
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-slate-400 text-lg" />
                    </div>
                    <input
                      className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-800 dark:text-white py-3"
                      id="phone"
                      name="phone"
                      placeholder="+263 77..."
                      required
                      type="tel"
                    />
                  </div>
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="reg">
                    Vehicle Registration
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMapMarkerAlt className="text-slate-400 text-lg" />
                    </div>
                    <input
                      className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-800 dark:text-white py-3"
                      id="reg"
                      name="reg"
                      placeholder="ABC 1234"
                      type="text"
                    />
                  </div>
                  <ValidationError prefix="Registration" field="reg" errors={state.errors} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="make">
                    Vehicle Make
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      className="focus:ring-primary focus:border-primary block w-full sm:text-sm border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-800 dark:text-white py-3 px-3"
                      id="make"
                      name="make"
                      placeholder="e.g. Toyota"
                      type="text"
                    />
                  </div>
                  <ValidationError prefix="Make" field="make" errors={state.errors} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="model">
                    Vehicle Model
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      className="focus:ring-primary focus:border-primary block w-full sm:text-sm border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-800 dark:text-white py-3 px-3"
                      id="model"
                      name="model"
                      placeholder="e.g. Corolla"
                      type="text"
                    />
                  </div>
                  <ValidationError prefix="Model" field="model" errors={state.errors} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="message">
                  Additional Details (Optional)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <textarea
                    className="focus:ring-primary focus:border-primary block w-full sm:text-sm border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-800 dark:text-white py-3 px-3"
                    id="message"
                    name="message"
                    placeholder="Any specific coverage requirements?"
                    rows={3}
                  />
                </div>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <div className="pt-2">
                <button
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-950 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending Request...
                    </>
                  ) : (
                    'Request Quote'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Visit Us Card */}
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-primary dark:text-blue-400">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Visit Us</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  123 Samora Machel Ave<br />Harare, Zimbabwe
                </p>
              </div>

              {/* Email Us Card */}
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-primary dark:text-blue-400">
                  <FaEnvelope />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Email Us</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {import.meta.env.VITE_EMAIL_INFO || 'info@galationbrothers.co.zw'}<br />{import.meta.env.VITE_EMAIL_CLAIMS || 'claims@galationbrothers.co.zw'}
                </p>
              </div>
            </div>

            {/* WhatsApp Section */}
            <div className="bg-linear-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl shadow-md border border-green-100 dark:border-green-800/30 flex flex-col sm:flex-row items-center gap-6">
              <div className="bg-white p-3 rounded-lg shadow-sm shrink-0">
                <img
                  alt={`WhatsApp QR Code for ${import.meta.env.VITE_WHATSAPP_NUMBER || '+263786545960'}`}
                  className="w-32 h-32 rounded-lg"
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https://wa.me/${(import.meta.env.VITE_WHATSAPP_NUMBER || '+263786545960').replace('+', '')}`}
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-400 flex items-center justify-center sm:justify-start gap-2">
                  <FaWhatsapp />
                  Chat on WhatsApp
                </h3>
                <p className="text-green-700 dark:text-green-300 mt-2 mb-4">
                  Scan the code to chat directly with an agent for instant support or quick quotes.
                </p>
                <a
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-sm transition-colors"
                  href={`https://wa.me/${(import.meta.env.VITE_WHATSAPP_NUMBER || '+263786545960').replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open WhatsApp Web
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden h-80 relative">
              <iframe
                allowFullScreen
                className="dark:opacity-80 dark:contrast-125 dark:grayscale-[0.5]"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Harare,Zimbabwe&output=embed"
                style={{ border: 0 }}
                width="100%"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-slate-900/10 dark:bg-slate-900/20"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;