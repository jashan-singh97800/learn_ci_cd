import { Search, MapPin, Scissors, Award } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function FindExplore() {
  const quickLinks = [
    {
      icon: MapPin,
      title: "Salon Finder",
      description: "Locate your nearest salon",
    },
    {
      icon: Scissors,
      title: "Services",
      description: "Explore our offerings",
    },
    {
      icon: Award,
      title: "Academy",
      description: "Professional training",
    },
  ];

  return (
    <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <Input
              type="text"
              placeholder="Find your style or salon..."
              className="pl-12 pr-4 py-6 rounded-full text-lg border-2"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full">
              Search
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <Card
              key={link.title}
              className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
            >
              <link.icon className="h-12 w-12 mx-auto mb-4 text-black dark:text-white" />
              <h3 className="text-xl mb-2 text-black dark:text-white">
                {link.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {link.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
