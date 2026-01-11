import { useState } from 'react';
import { Scissors, Palette, Sparkles, Droplet, GraduationCap, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Scissors,
      title: 'Haircut & Styling',
      description: 'Precision cuts and contemporary styles tailored to your personality',
      price: 'From ₹800',
      image: 'https://images.unsplash.com/photo-1628099003488-98aa1c9405e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyc3R5bGluZ3xlbnwxfHx8fDE3NjY0MjI0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Palette,
      title: 'Hair Coloring',
      description: 'Expert color treatments from subtle highlights to bold transformations',
      price: 'From ₹2,500',
      image: 'https://images.unsplash.com/photo-1712213396688-c6f2d536671f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3JpbmclMjBzYWxvbnxlbnwxfHx8fDE3NjYzODkwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Sparkles,
      title: 'Hair Treatments',
      description: 'Nourishing treatments for healthy, lustrous hair',
      price: 'From ₹1,500',
      image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGludGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2NjM3OTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Droplet,
      title: 'Keratin & Smoothing',
      description: 'Advanced smoothing treatments for frizz-free, manageable hair',
      price: 'From ₹3,500',
      image: 'https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYWlyJTIwc2Fsb258ZW58MXx8fHwxNzY2MzQ1MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Heart,
      title: 'Bridal Services',
      description: 'Complete bridal makeovers for your special day',
      price: 'From ₹5,000',
      image: 'https://images.unsplash.com/photo-1628099003488-98aa1c9405e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyc3R5bGluZ3xlbnwxfHx8fDE3NjY0MjI0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: GraduationCap,
      title: 'Academy Courses',
      description: 'Professional training programs for aspiring stylists',
      price: 'Enquire Now',
      image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGludGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2NjM3OTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Our Services</h2>
          <p className="text-white/70 text-lg">
            Discover our comprehensive range of hair and beauty services designed to bring out your best look
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all cursor-pointer"
                onMouseEnter={() => setSelectedService(index)}
                onMouseLeave={() => setSelectedService(null)}
              >
                {/* Image Background */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <Icon className="size-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-white">{service.title}</h3>
                  <p className="text-white/60">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-white/90">{service.price}</span>
                    <button className="text-white hover:underline">Learn More →</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#admin"
            className="inline-block px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
