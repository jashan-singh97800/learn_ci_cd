import { Award, Users, Sparkles, Clock } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized excellence in hair styling and design",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Trained professionals with years of experience",
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description: "Only the finest hair care and styling products",
    },
    {
      icon: Clock,
      title: "Since 1963",
      description: "Six decades of iconic hair moments",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-black dark:text-white">
            World-Class Hair & Beauty Experience
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            We believe that great hair is an art form. Our passion is creating
            personalized, iconic styles that reflect your unique personality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-black dark:bg-white rounded-full">
                <value.icon className="h-8 w-8 text-white dark:text-black" />
              </div>
              <h3 className="text-xl mb-2 text-black dark:text-white">
                {value.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
