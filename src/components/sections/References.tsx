import React from 'react';

interface Reference {
  authors: string;
  year: string;
  title: string;
  source: string;
  url: string;
  date?: string;
}

const references: Reference[] = [
  {
    authors: "Curry, T.",
    year: "2025",
    title: "How teachers are actually using A.I. to reduce burnout",
    source: "Observer",
    url: "https://observer.com/2025/02/ai-teacher-burnout/"
  },
  {
    authors: "Grand View Research",
    year: "2025",
    title: "Wearable technology market to reach $186.14 billion by 2030",
    source: "Grand View Research",
    url: "https://www.grandviewresearch.com/press-release/global-wearable-technology-market"
  },
  {
    authors: "Lee, S.",
    year: "2024",
    title: "How AI is reshaping curriculum design: Insights for future educators",
    source: "Western Governors University",
    url: "https://www.wgu.edu/blog/how-ai-reshaping-curriculum-design-insights-future-educators2412.html"
  },
  {
    authors: "National Center for Education Statistics",
    year: "2024",
    title: "Characteristics of Postsecondary Faculty Condition of Education",
    source: "U.S. Department of Education, Institute of Education Sciences",
    url: "https://nces.ed.gov/programs/coe/indicator/csc"
  },
  {
    authors: "Salar, R.",
    year: "2024",
    title: "AI in education: Transforming teaching & learning in the digital age",
    source: "ResearchGate",
    url: "https://www.researchgate.net/publication/383177422_ARTIFICIAL_INTELLIGENCE_IN_EDUCATION_TRANSFORMING_LEARNING_IN_THE_DIGITAL_AGE"
  },
  {
    authors: "University of Maryland College of Education",
    year: "2024",
    title: "Can AI foster equity in education?",
    source: "University of Maryland College of Education",
    url: "https://education.umd.edu/news/11-08-24-can-ai-foster-equity-education"
  },
  {
    authors: "Slagg, A.",
    year: "2023",
    title: "AI for teachers: Defeating burnout and boosting productivity",
    source: "EdTech Magazine",
    date: "November",
    url: "https://edtechmagazine.com/k12/article/2023/11/ai-for-teachers-defeating-burnout-boosting-productivity-perfcon"
  }
];

export const References: React.FC = () => {
  // Sort references by year (newest first) and then alphabetically by author
  const sortedReferences = [...references].sort((a, b) => {
    if (a.year !== b.year) {
      return parseInt(b.year) - parseInt(a.year);
    }
    return a.authors.localeCompare(b.authors);
  });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">References</h2>
          <p className="text-gray-600 text-center mb-12">Research-backed insights and industry reports</p>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="divide-y divide-gray-100">
              {sortedReferences.map((ref, index) => (
                <div 
                  key={index} 
                  className="group p-6 transition-colors hover:bg-gray-50 first:rounded-t-2xl last:rounded-b-2xl"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <p className="text-lg font-medium text-gray-900">
                        {ref.authors}
                      </p>
                      <span className="text-gray-500 whitespace-nowrap">
                        ({ref.date ? `${ref.date}, ` : ''}{ref.year})
                      </span>
                    </div>
                    
                    <p className="text-gray-900 leading-relaxed">
                      {ref.title}. <span className="italic">{ref.source}</span>.
                    </p>
                    
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-blue-600 hover:underline break-all"
                    >
                      {ref.url}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 