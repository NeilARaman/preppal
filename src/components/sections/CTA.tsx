import React, { useState } from 'react';
import { Check } from 'lucide-react';

const benefits = [
  '7-day free trial with full access',
  'Save 20+ hours per week on prep time',
  'No credit card required to start',
  'Unlimited exports and downloads',
];

export const CTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted with email:', email);
  };

  return (
    <section className="py-20 bg-primary-500">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your teaching experience?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join thousands of educators saving time and creating better materials with PrepPal.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-primary-200" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Signup Card */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-2">Get Started Now</h3>
              <p className="text-gray-600 mb-6">
                Create your account in just 60 seconds.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  Get Started
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By signing up, you agree to our{' '}
                  <a href="/terms" className="text-primary-600 hover:text-primary-700">
                    Terms
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-primary-600 hover:text-primary-700">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 