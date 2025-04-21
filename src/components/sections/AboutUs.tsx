import { Target, Lightbulb, Users, ArrowRight } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.1),transparent_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(59,130,246,0.1),transparent_25%)]" />
      
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Vision for Education
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to democratize access to high-quality teaching materials and empower educators worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              At PrepPal, we're transforming how educators access and create high-quality teaching materials. 
              Born from our shared understanding of the challenges facing higher education faculty, 
              we've built a platform that addresses the critical shortage of standardized, adaptable 
              resources that align with curriculum needs.
            </p>
          </div>

          {/* Challenge Card */}
          <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Challenge We're Solving</h3>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Educators—particularly new faculty, adjunct professors, and those at under-resourced 
                institutions—spend approximately 10 hours weekly on grading and lesson preparation. 
                This excessive time spent creating materials from scratch reduces focus on student 
                engagement and contributes to burnout.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                While platforms like Teachers Pay Teachers exist, they often fail to provide 
                curriculum-aligned materials and frequently hide resources behind paywalls, 
                creating barriers for educators at underfunded institutions.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section - Full Width */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-12 shadow-xl text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Our Story</h3>
            </div>
            
            <div className="space-y-6 max-w-4xl">
              <p className="text-lg text-primary-50 leading-relaxed">
                Our team formed around a shared concern for the resource challenges facing higher 
                education faculty. We recognized that unlike K-12 educators, higher education 
                instructors often lack centralized resource collections and support systems.
              </p>
              <p className="text-lg text-primary-50 leading-relaxed">
                After exploring various approaches, we purposefully chose to develop a customizable 
                resource platform rather than a marketplace model. This decision reflects our 
                commitment to accessibility, efficiency, and quality—creating a solution that helps 
                bridge educational gaps between well-funded and under-resourced institutions.
              </p>
            </div>

            <div className="mt-10 inline-flex items-center text-primary-50 hover:text-white transition-colors group cursor-pointer">
              <span className="font-semibold mr-2">Learn more about our journey</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 