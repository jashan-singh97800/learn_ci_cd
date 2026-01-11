import { Instagram, Facebook } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CTASection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2NjQ2MjA3MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl mb-6 text-white">
          Ready for Your Transformation?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Book your appointment today and experience the difference
        </p>
        <Button size="lg" className="rounded-full text-lg px-10 py-6 mb-8">
          Book Appointment
        </Button>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-12">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Instagram className="h-5 w-5 text-white" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Facebook className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
