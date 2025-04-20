import React from 'react';
import { Book, Presentation, LineChart, Settings, Zap, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-primary-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const features = [
  {
    icon: Book,
    title: 'Comprehensive Lesson Plans',
    description: 'Generate detailed lesson plans aligned with educational standards in seconds.',
  },
  {
    icon: Presentation,
    title: 'Interactive Slide Decks',
    description: 'Create engaging presentation materials that capture student attention.',
  },
  {
    icon: LineChart,
    title: 'Smart Assessments',
    description: 'Design quizzes and tests with automatic rubric generation for fair grading.',
  },
  {
    icon: Settings,
    title: 'Real-time Customization',
    description: 'Modify all generated content in real-time to fit your specific teaching style.',
  },
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'Save hours of preparation time with AI-powered content creation.',
  },
  {
    icon: Users,
    title: 'Collaboration Tools',
    description: 'Share and collaborate with colleagues to improve educational materials.',
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features for Educators
          </h2>
          <p className="text-xl text-gray-600">
            PrepPal provides all the tools you need to create exceptional teaching materials with less effort.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 