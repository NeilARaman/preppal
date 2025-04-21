'use client';

import { Check, Sparkles, ArrowRight } from 'lucide-react';

const benefits = [
  'No credit card required',
  'Free plan available',
  'Setup in minutes',
];

export const Hero = () => {
  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('get-started-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text & CTA */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="text-gray-900">Revolutionize</span><br />
              <span className="text-gray-900">Your</span>{' '}
              <span className="text-primary-500">
                Teaching<br />
                Materials
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mt-6 max-w-md">
              PrepPal uses AI to help educators create high-quality, personalized teaching materials in minutes, not hours.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 relative z-20">
              <button
                type="button"
                onClick={handleGetStarted}
                className="btn-primary flex items-center gap-2 relative"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleHowItWorks}
                className="btn-outline relative"
              >
                See How It Works
              </button>
            </div>

            <div className="mt-8 space-y-3 relative z-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-green-500" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Floating Card */}
          <div className="relative flex justify-center">
            {/* Decorative circles */}
            <div className="absolute -z-10 top-0 -right-8 w-80 h-80 border-[20px] border-blue-200 rounded-full" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 border-[20px] border-blue-300 rounded-full" />
            
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(191,219,254,0.4)_0%,_transparent_70%)]" />
            
            <div className="relative z-10 w-full max-w-[500px] bg-white rounded-2xl shadow-2xl p-12 
                          animate-float hover:scale-105 hover:shadow-3xl transition-all duration-300">
              {/* Card content with relative positioning */}
              <div className="relative">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-xl font-semibold">Generate Lesson Plan</h3>
                    <p className="text-sm text-gray-500 mt-1">Science - Grade 8</p>
                  </div>
                  <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
                </div>

                {/* Loading bars with more content */}
                <div className="space-y-6">
                  {/* Section 1 */}
                  <div className="space-y-3">
                    <div className="h-5 bg-gray-200 rounded-md w-1/3" />
                    <div className="h-5 bg-gray-200 rounded-md w-full animate-pulse" />
                    <div className="h-5 bg-gray-200 rounded-md w-5/6 animate-pulse delay-100" />
                  </div>

                  {/* Section 2 */}
                  <div className="space-y-3">
                    <div className="h-5 bg-gray-200 rounded-md w-2/5" />
                    <div className="h-5 bg-gray-200 rounded-md w-11/12 animate-pulse delay-200" />
                    <div className="h-5 bg-gray-200 rounded-md w-4/5 animate-pulse delay-300" />
                  </div>

                  {/* Section 3 */}
                  <div className="space-y-3">
                    <div className="h-5 bg-gray-200 rounded-md w-1/4" />
                    <div className="h-5 bg-gray-200 rounded-md w-full animate-pulse delay-400" />
                    <div className="h-5 bg-gray-200 rounded-md w-3/4 animate-pulse delay-500" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-10 text-sm text-gray-500">
                  <Sparkles className="w-5 h-5" />
                  Powered by AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 