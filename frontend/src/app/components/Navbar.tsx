import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white tracking-[0.3em]">STUDIO•SALON</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </a>
            <a href="#academy" className="text-white/80 hover:text-white transition-colors">
              Academy
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </a>
            <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <MapPin className="size-4" />
              Find Salon
            </button>
            <a 
              href="#admin"
              className="px-6 py-2 bg-white text-black hover:bg-white/90 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <a href="#services" className="block text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="block text-white/80 hover:text-white transition-colors">
              About
            </a>
            <a href="#academy" className="block text-white/80 hover:text-white transition-colors">
              Academy
            </a>
            <a href="#contact" className="block text-white/80 hover:text-white transition-colors">
              Contact
            </a>
            <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors w-full">
              <MapPin className="size-4" />
              Find Salon
            </button>
            <a
              href="#admin"
              className="block text-center px-6 py-3 bg-white text-black hover:bg-white/90 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
