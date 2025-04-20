const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'High School Science Teacher',
    rating: 5,
    quote: 'PrepPal has transformed how I prepare for classes. What used to take me hours now takes minutes, and the quality is consistently excellent. My students are more engaged than ever!',
  },
  {
    name: 'Michael Rodriguez',
    title: 'Middle School History Teacher',
    rating: 5,
    quote: 'The customization options are incredible. I can generate materials that perfectly match my teaching style and then tweak them to perfection. PrepPal has become an essential part of my workflow.',
  },
  {
    name: 'Emily Chen',
    title: 'Elementary School Teacher',
    rating: 4,
    quote: 'As a new teacher, PrepPal has been a lifesaver. It helps me create professional-quality materials that would have taken years of experience to develop on my own. Highly recommended!',
  },
];

const TestimonialCard = ({ name, title, rating, quote }: {
  name: string;
  title: string;
  rating: number;
  quote: string;
}) => (
  <div className="bg-white rounded-xl p-6 shadow-md">
    <StarRating rating={rating} />
    <p className="mt-4 text-gray-600">{quote}</p>
    <div className="mt-6 flex items-center">
      <div className="h-12 w-12 rounded-full bg-gray-200" />
      <div className="ml-4">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-600">{title}</div>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Loved by Educators
          </h2>
          <p className="text-xl text-gray-600">
            See what teachers and educational professionals are saying about PrepPal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 