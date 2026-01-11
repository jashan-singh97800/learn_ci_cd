import { Star } from "lucide-react";
import { Card } from "../ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Fashion Blogger",
      content:
        "Absolutely phenomenal service! The stylists truly understand hair and create magic. My color is vibrant and my cut is perfect.",
      rating: 5,
    },
    {
      name: "James Chen",
      role: "Business Executive",
      content:
        "Professional, stylish, and consistent. I've been coming here for years and they never disappoint. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Model",
      content:
        "The best salon experience I've ever had. The attention to detail and the quality of work is unmatched. Worth every penny!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-black dark:text-white">
            Client Experiences
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Hear what our clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-8 bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-black dark:fill-white text-black dark:text-white"
                  />
                ))}
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="text-black dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
