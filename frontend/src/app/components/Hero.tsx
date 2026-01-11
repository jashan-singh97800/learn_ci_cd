import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYWlyJTIwc2Fsb258ZW58MXx8fHwxNzY2MzQ1MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Hair Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-white text-5xl md:text-7xl tracking-tight">
            Crafting Iconic Hair Moments
          </h1>
          <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto">
            Expert haircare and styling services at your nearest salon
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#admin"
              className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors inline-block min-w-[200px]"
            >
              Book Now
            </a>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all inline-block min-w-[200px]">
              Find Your Salon
            </button>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for services, styles, or locations..."
                className="w-full px-6 py-4 pr-12 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-white/60" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <a href="#services" className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 transition-colors">
              Services
            </a>
            <a href="#salon-finder" className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 transition-colors">
              Salon Finder
            </a>
            <a href="#academy" className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 transition-colors">
              Academy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
