import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm, ValidationError } from '@formspree/react';
import { FaStar, FaPaperPlane, FaStarHalfAlt, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

/**
 * FeedbackPage component - Allows customers to submit feedback and displays testimonials
 * Includes feedback form with rating system and client testimonials
 */
const FeedbackPage: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FEEDBACK_ENDPOINT || 'https://formspree.io/f/xwvogvdy');

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  if (state.succeeded) {
    return (
      <>
        <Helmet>
          <title>Thank You - Galation Brothers Zimbabwe</title>
          <meta name="description" content="Thank you for your feedback. Your input helps us serve Zimbabwe better." />
          <meta name="keywords" content="feedback submitted, thank you, Galation Brothers Zimbabwe" />
          <meta name="author" content="Galation Brothers" />
          <meta property="og:title" content="Thank You - Galation Brothers Zimbabwe" />
          <meta property="og:description" content="Your feedback has been received. Thank you for helping us improve." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://galationbrothers.co.zw/feedback" />
        </Helmet>
        {/* Header */}
        <header className="relative bg-blue-900 dark:bg-blue-800 py-16">
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
            <h1 className="text-3xl font-display font-extrabold text-white sm:text-4xl">Thank You for Your Feedback</h1>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl">
              Your voice helps us grow together. Thank you for sharing your experience with Galation Brothers and AFC Holdings.
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
              <h2 className="text-2xl font-display font-bold text-green-800 dark:text-green-400 mb-4">Feedback Received!</h2>
              <p className="text-green-700 dark:text-green-300 text-lg mb-6">
                Thank you for taking the time to share your experience. Your feedback helps us serve Zimbabwe better and maintain our commitment to excellence.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Share More Feedback
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
        <title>Customer Feedback - Galation Brothers Zimbabwe</title>
        <meta name="description" content="Share your experience with Galation Brothers. Read testimonials from satisfied clients and help us improve our insurance services." />
        <meta name="keywords" content="customer feedback, testimonials, insurance reviews, Galation Brothers Zimbabwe" />
        <meta name="author" content="Galation Brothers" />
        <meta property="og:title" content="Customer Feedback - Galation Brothers Zimbabwe" />
        <meta property="og:description" content="Your voice matters. Share your experience and read what others say about our services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://galationbrothers.co.zw/feedback" />
      </Helmet>
      {/* Header */}
      <header className="relative bg-blue-900 dark:bg-blue-800 py-16">
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
          <h1 className="text-3xl font-display font-extrabold text-white sm:text-4xl">Your Voice Matters</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl">
            Help us grow together. Share your experience with Galations Brothers and AFC Holdings to help us serve Zimbabwe better.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaStar className="text-primary dark:text-blue-400 text-3xl" />
                <h2 className="font-display text-2xl font-bold text-slate-800 dark:text-white">Share Your Experience</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {state.errors && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <div className="flex items-center">
                      <FaExclamationTriangle className="text-red-500 text-lg mr-2" />
                      <span className="text-red-800 dark:text-red-400 font-medium">Please check the errors below</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      className="w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary py-3 px-4"
                      id="name"
                      name="name"
                      placeholder="e.g. Tendai Moyo"
                      required
                      type="text"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      className="w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary py-3 px-4"
                      id="email"
                      name="email"
                      placeholder="tendai@example.com"
                      required
                      type="email"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="product">
                    Policy Type
                  </label>
                  <select
                    className="w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary py-3 px-4"
                    id="product"
                    name="product"
                  >
                    <option>Select a policy...</option>
                    <option>Vehicle Insurance</option>
                    <option>Home &amp; Content</option>
                    <option>Life Cover</option>
                    <option>Agricultural (AFC Partnership)</option>
                    <option>Business Protection</option>
                    <option>General Feedback</option>
                  </select>
                  <ValidationError prefix="Product" field="product" errors={state.errors} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    How would you rate our service? *
                  </label>
                  <div className="star-rating flex gap-1 text-2xl">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <label
                        key={star}
                        className={`cursor-pointer ${rating >= star ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                        onClick={() => handleRatingChange(star)}
                      >
                        <FaStar />
                      </label>
                    ))}
                  </div>
                  <input type="hidden" name="rating" value={rating} />
                  <ValidationError prefix="Rating" field="rating" errors={state.errors} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="comments">
                    Your Feedback *
                  </label>
                  <textarea
                    className="w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary py-3 px-4"
                    id="comments"
                    name="comments"
                    placeholder="Tell us what you liked or what we can improve..."
                    required
                    rows={4}
                  ></textarea>
                  <ValidationError prefix="Comments" field="comments" errors={state.errors} />
                </div>
                <div className="pt-2">
                  <button
                    className="w-full flex justify-center items-center gap-2 bg-blue-950 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={state.submitting}
                  >
                    {state.submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Feedback...
                      </>
                    ) : (
                      <>
                        <span>Submit Feedback</span>
                        <FaPaperPlane className="text-sm" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
                    By submitting this form, you agree to our{' '}
                    <a className="underline hover:text-primary dark:hover:text-blue-400" href="#">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Testimonials and Partnership */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Building Trust Through Transparency</h3>
              <p className="text-slate-600 dark:text-slate-300">
                At Galations Brothers, partnered with AFC Holdings, we believe that honest feedback is the cornerstone of growth. See what our valued clients across Zimbabwe have to say about our partnership and services.
              </p>
            </div>
            <div className="space-y-6">
              {/* Testimonial 1 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-l-4 border-secondary hover:shadow-lg transition duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      alt="Client portrait"
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcdpqYBkUCP4AduI0CDvgqUrLz7cwx89pfUbnsXWTjFru8_3A6yfLOssO_xD4gCO5on65h4p0xxqcKS1ewkHSwzjKtawNrX51zbt76-8y4jEJrH3KdZfXXjf4dLDZG98sdipB9HRFjfrlz5qRmeHRFGhAfV3FdiP_-1raG3z7dEpZFYW5mkah5ru7a8g9OBL6xxZLUQR5tUpvnGzxaR8tgyvrtXiAIJwBoDJ8b4LEEtWyv4soeU0P_jFuzx_vMBAQMd31A5e4eOWUy"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Farai Chidyausiku</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Harare • Business Owner</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic">
                  "The partnership with AFC Holdings really gives me peace of mind. Galations Brothers handled my claim with such speed and professionalism. It's rare to find this level of service."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-l-4 border-primary hover:shadow-lg transition duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      alt="Client portrait"
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtPmjxbl79sffC6YgoaDnt8B4hxKh1fVfSpUwyLLpE-8fgj9H3aZt6kU9VfeQ8JC4iZyq3A2vU51kCagDGBUQnhvHnN09e9YY4rt9g1VAC4diPq-lifBzzgGaTAkhq7X_AhmBHrYjvM-P5YdPrcZWtldt-q-VTqZjsKiyOjyw13cgrGnlYW0_i3OvCXicfnHZgHJLBDfkbNTx01Q1T8NYobl5qhHV1CafsqjdzlsmhyGIf0H49V-DuevIkiHqlyY9nMoqgvg03DbW8"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Nyasha Mutasa</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Bulawayo • Homeowner</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaStarHalfAlt />
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic">
                  "I was skeptical at first, but the team explained everything clearly. The user-friendly process made insuring my first home a breeze. Truly 'Growing Together' as they say."
                </p>
              </div>
            </div>

            {/* Partnership Section */}
            <div className="bg-blue-50 dark:bg-slate-800/50 rounded-lg p-6 flex flex-col items-center justify-center text-center border border-blue-100 dark:border-slate-700">
              <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 font-semibold">
                In Strategic Partnership With
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  alt="Galation Brothers Logo"
                  className="h-16 w-auto"
                  src={`${import.meta.env.BASE_URL}assets/GalationBrothers_logo.png`}
                />
                <div className="h-8 w-px bg-slate-300 dark:bg-slate-600 hidden md:block"></div>
                <img
                  alt="AFC Holdings Logo"
                  className="h-16 w-auto"
                  src={`${import.meta.env.BASE_URL}assets/AFC_logo.png`}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FeedbackPage;