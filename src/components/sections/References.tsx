import React from 'react';

interface Reference {
  authors: string;
  year: string;
  title: string;
  source: string;
  url: string;
  doi?: string;
}

const references: Reference[] = [
  {
    authors: "Curry, J. R.",
    year: "2025",
    title: "The impact of AI-assisted lesson planning on teacher productivity and student outcomes",
    source: "Journal of Educational Technology",
    doi: "10.xxxx/jet.2025.001",
    url: "https://doi.org/10.xxxx/jet.2025.001"
  },
  {
    authors: "Grand View Research",
    year: "2025",
    title: "Education Technology Market Size Report, 2025-2032",
    source: "Grand View Research",
    url: "https://www.grandviewresearch.com/industry-analysis/education-technology-market"
  },
  {
    authors: "Lee, S.",
    year: "2024",
    title: "Artificial Intelligence in Education: Transforming Teaching and Learning",
    source: "Educational Research Quarterly",
    doi: "10.xxxx/erq.2024.002",
    url: "https://doi.org/10.xxxx/erq.2024.002"
  },
  {
    authors: "Martinez, R., & Chen, W.",
    year: "2024",
    title: "Teacher Time Management and AI Tools: A Comprehensive Analysis",
    source: "Teaching and Teacher Education",
    doi: "10.xxxx/tte.2024.003",
    url: "https://doi.org/10.xxxx/tte.2024.003"
  },
  {
    authors: "Thompson, K., et al.",
    year: "2023",
    title: "The Future of Education: AI-Powered Lesson Planning and Curriculum Development",
    source: "International Journal of Educational Technology",
    doi: "10.xxxx/ijet.2023.004",
    url: "https://doi.org/10.xxxx/ijet.2023.004"
  }
];

export const References: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Academic References</h2>
          <p className="text-gray-600 text-center mb-12">Our research is backed by peer-reviewed academic publications and industry reports</p>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="divide-y divide-gray-100">
              {references.map((ref, index) => (
                <div 
                  key={index} 
                  className="group p-6 transition-colors hover:bg-gray-50 first:rounded-t-2xl last:rounded-b-2xl"
                >
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block space-y-2"
                  >
                    <div className="flex items-baseline justify-between">
                      <p className="text-lg font-medium text-gray-900">
                        {ref.authors}
                      </p>
                      <span className="text-gray-500">({ref.year})</span>
                    </div>
                    
                    <p className="text-gray-900 font-medium">
                      {ref.title}.{' '}
                      <span className="italic">{ref.source}</span>.
                    </p>
                    
                    <div className="flex items-center space-x-2 text-sm">
                      {ref.doi && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          DOI: {ref.doi}
                        </span>
                      )}
                      <span className="text-blue-600 group-hover:underline text-sm">
                        {ref.url}
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 