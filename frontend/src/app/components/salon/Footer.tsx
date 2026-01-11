import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const menuLinks = [
    ["About", "Services", "Academy"],
    ["Salon Finder", "Blog", "Careers"],
    ["Contact", "Privacy Policy", "Terms of Service"],
  ];

  return (
    <footer className="bg-black dark:bg-neutral-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">
              ÉLITE<span className="text-neutral-400">&</span>STYLE
            </h3>
            <p className="text-neutral-400 mb-4">
              Crafting iconic hair moments since 1963
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          {menuLinks.map((column, index) => (
            <div key={index}>
              <ul className="space-y-3">
                {column.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-neutral-400" />
              <span className="text-neutral-400">1-800-SALON-00</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-neutral-400" />
              <span className="text-neutral-400">hello@elitestyle.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-neutral-400" />
              <span className="text-neutral-400">
                Find Your Nearest Salon
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-neutral-500 text-sm">
          © 2025 Élite & Style. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
