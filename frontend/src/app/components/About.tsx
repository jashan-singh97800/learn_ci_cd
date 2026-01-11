import { Award, Scissors, Users, TrendingUp } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'World-class hair & beauty experience with international standards'
    },
    {
      icon: Scissors,
      title: 'Expert Stylists',
      description: 'Trained professionals delivering cutting-edge styling techniques'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Personalized consultations for your unique style needs'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Latest trends and techniques from global fashion capitals'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-6">Our Story</h2>
          <p className="text-black/70 text-lg">
            With decades of excellence in hairdressing and beauty services, we bring you a premium salon experience that transforms your look and elevates your confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-black/5 hover:bg-black/10 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="size-8" />
                </div>
                <h3 className="text-black mb-3">{feature.title}</h3>
                <p className="text-black/60">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="mt-20 border-t border-black/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl text-black mb-2">25+</div>
              <p className="text-black/70">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-black mb-2">100+</div>
              <p className="text-black/70">Salons Nationwide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-black mb-2">500K+</div>
              <p className="text-black/70">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
