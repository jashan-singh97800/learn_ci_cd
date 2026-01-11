import { Scissors, Sparkles, Award } from "lucide-react";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      title: "Precision Haircut",
      description: "Expert cutting techniques tailored to your style",
      price: "From $45",
      image:
        "https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGFpcnN0eWxpbmd8ZW58MXx8fHwxNzY2NDYyMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Scissors,
    },
    {
      title: "Color & Highlights",
      description: "Premium coloring services with the latest techniques",
      price: "From $120",
      image:
        "https://images.unsplash.com/photo-1712213396688-c6f2d536671f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3JpbmclMjBzYWxvbnxlbnwxfHx8fDE3NjYzODkwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Sparkles,
    },
    {
      title: "Hair Treatments",
      description: "Restorative treatments for healthy, beautiful hair",
      price: "From $80",
      image:
        "https://images.unsplash.com/photo-1664549760921-2198b054a592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjB0cmVhdG1lbnQlMjBzcGF8ZW58MXx8fHwxNzY2NDM4ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-black dark:text-white">
            Featured Services
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Discover our range of premium hair and beauty services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-black p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-black dark:text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-2 text-black dark:text-white">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {service.description}
                </p>
                <p className="text-black dark:text-white">{service.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
