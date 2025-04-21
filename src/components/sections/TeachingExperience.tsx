import React from 'react';
import { Book, GraduationCap, Clock, Users } from 'lucide-react';

const experienceCards = [
  {
    icon: Book,
    title: 'Curriculum Development',
    description: 'Create comprehensive lesson plans and teaching materials aligned with educational standards.',
  },
  {
    icon: GraduationCap,
    title: 'Professional Growth',
    description: 'Continuous learning and adaptation to new teaching methodologies and technologies.',
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Efficient preparation and organization of teaching materials to maximize classroom impact.',
  },
  {
    icon: Users,
    title: 'Student Engagement',
    description: 'Foster interactive learning environments that promote student participation and understanding.',
  },
];

export const TeachingExperience = () => {
  return (
    <section id="teaching-experience" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Teaching Experience Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Teaching Experience
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our platform is designed by educators for educators, incorporating years of classroom experience to deliver the most effective teaching solutions.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experienceCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mr-4">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 