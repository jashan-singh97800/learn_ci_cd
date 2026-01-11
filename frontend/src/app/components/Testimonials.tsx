import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      service: 'Hair Coloring',
      rating: 5,
      text: 'Absolutely love my new hair color! The stylists are incredibly talented and really understood what I wanted. The salon ambiance is so premium and relaxing.',
      image: 'PS'
    },
    {
      name: 'Rahul Mehta',
      service: 'Haircut & Styling',
      rating: 5,
      text: 'Best haircut experience ever! Professional service, attention to detail, and the final result exceeded my expectations. Highly recommend!',
      image: 'RM'
    },
    {
      name: 'Ananya Iyer',
      service: 'Keratin Treatment',
      rating: 5,
      text: 'My hair has never looked this good! The keratin treatment has made my hair so smooth and manageable. Worth every penny!',
      image: 'AI'
    },
    {
      name: 'Vikram Singh',
      service: 'Bridal Package',
      rating: 5,
      text: 'They made my wedding day perfect! The entire bridal team was professional, creative, and ensured everything was flawless.',
      image: 'VS'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-6">Client Stories</h2>
          <p className="text-black/70 text-lg">
            Hear from our satisfied clients about their salon experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/5 p-8 border border-black/10 hover:border-black/30 transition-colors"
            >
              {/* Avatar */}
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-6">
                <span>{testimonial.image}</span>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-4 fill-black text-black" />
                ))}
              </div>

              {/* Text */}
              <p className="text-black/70 mb-6 italic">"{testimonial.text}"</p>

              {/* Name & Service */}
              <div>
                <div className="text-black">{testimonial.name}</div>
                <div className="text-black/50">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
