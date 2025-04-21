const Step = ({ number, title, description, isReversed = false }: {
  number: string;
  title: string;
  description: string;
  isReversed?: boolean;
}) => {
  const content = (
    <div className="lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
      <div className="flex items-center mb-4">
        <div className="bg-primary-100 text-primary-600 font-semibold rounded-full w-12 h-12 flex items-center justify-center mr-4">
          {number}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 text-lg leading-relaxed max-w-xl">{description}</p>
    </div>
  );

  const mockup = (
    <div className={`lg:w-1/2 ${['02', '03', '04'].includes(number) ? 'p-0' : 'p-6 lg:p-12'}`}>
      <div className={`transform hover:scale-105 transition-transform duration-300 ${['02', '03', '04'].includes(number) ? '' : 'p-0'}`}>
        {number === '01' ? (
          <div className="rounded-2xl shadow-xl overflow-hidden bg-white">
            <img
              src="/Input-Requirements.jpg"
              alt="Input Requirements Interface"
              className="w-full h-full object-cover"
            />
          </div>
        ) : number === '02' ? (
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden w-3/4">
              <img
                src="/AI-Generated-Image.jpg"
                alt="AI Generated Materials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : number === '03' ? (
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden w-3/4">
              <img
                src="/Image-Customization.jpg"
                alt="Customize Teaching Materials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden w-3/4 bg-white">
              <div className="aspect-[4/5] relative">
                <img
                  src="/Export-and-Share.jpg"
                  alt="Export and Share Materials"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col lg:flex-row items-center ${
      isReversed ? 'lg:flex-row-reverse' : ''
    } hover:bg-gray-50/50 rounded-3xl transition-colors duration-300`}>
      {content}
      {mockup}
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            How PrepPal Works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Creating professional teaching materials has never been easier. Follow these simple steps to transform your classroom experience.
          </p>
        </div>

        <div className="space-y-20">
          <Step
            number="01"
            title="Input Your Requirements"
            description="Specify your subject, grade level, learning objectives, and any specific content you want to include."
          />
          
          <Step
            number="02"
            title="AI Generates Materials"
            description="Our advanced AI creates comprehensive teaching materials tailored to your specifications in seconds."
            isReversed
          />
          
          <Step
            number="03"
            title="Customize to Perfection"
            description="Edit, refine, and personalize the generated content to match your exact teaching style and needs."
          />
          
          <Step
            number="04"
            title="Export & Share"
            description="Download your materials in multiple formats or share directly with students and colleagues."
            isReversed
          />
        </div>
      </div>
    </section>
  );
}; 