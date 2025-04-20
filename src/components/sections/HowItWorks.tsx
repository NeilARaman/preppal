import React from 'react';

const Step = ({ number, title, description, isReversed = false }: {
  number: string;
  title: string;
  description: string;
  isReversed?: boolean;
}) => {
  const content = (
    <div className="lg:w-1/2 p-6 lg:p-12">
      <div className="text-primary-500 font-semibold mb-2">{number}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  const mockup = (
    <div className="lg:w-1/2 p-6 lg:p-12">
      <div className={`aspect-square rounded-2xl shadow-lg ${
        number === '01' ? 'bg-blue-50' :
        number === '02' ? 'bg-purple-50' :
        number === '03' ? 'bg-green-50' :
        'bg-yellow-50'
      }`}>
        {/* Placeholder for mockup content */}
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-6">
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row items-center">
      {isReversed ? (
        <>
          {mockup}
          {content}
        </>
      ) : (
        <>
          {content}
          {mockup}
        </>
      )}
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How PrepPal Works
          </h2>
          <p className="text-xl text-gray-600">
            Creating professional teaching materials has never been easier. Follow these simple steps to transform your classroom experience.
          </p>
        </div>

        <div className="space-y-16">
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