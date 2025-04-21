import { Send, Mail, Building2, GraduationCap } from 'lucide-react';

export const ContactForm = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have questions about PrepPal? We'd love to hear from you and discuss how we can support your teaching journey.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="First Name"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Email Address"
                />
              </div>

              {/* Institution Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="institution"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Institution/Organization"
                />
              </div>

              {/* Teaching Experience Level */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <GraduationCap className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="experience"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select Teaching Experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600">support@preppal.edu</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600">Within 24-48 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 