import { useState } from "react";
import { Navbar } from "./salon/Navbar";
import { Hero } from "./salon/Hero";
import { FindExplore } from "./salon/FindExplore";
import { About } from "./salon/About";
import { Services } from "./salon/Services";
import { Testimonials } from "./salon/Testimonials";
import { CTASection } from "./salon/CTASection";
import { Footer } from "./salon/Footer";
import { Shield } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { LoginModal } from "./auth/LoginModal";

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login button clicked");
    // For demo purposes, just close the modal and navigate to admin
    setIsLoginModalOpen(false);
    navigate("/admin");
  };

  const handleChangePassword = () => {
    console.log("Password change requested");
    // For demo purposes, just show an alert
    alert("Password change functionality would be implemented here");
    setIsLoginModalOpen(false);
  };

  const handleAdminButtonClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Hero />

        <div id="salon-finder" className="scroll-mt-24">
          <FindExplore />
        </div>

        <div id="about" className="scroll-mt-24">
          <About />
        </div>

        <div id="services" className="scroll-mt-24">
          <Services />
        </div>

        <div id="academy" className="scroll-mt-24">
          <Testimonials />
        </div>

        <CTASection />

        <div id="contact" className="scroll-mt-24">
          <Footer />
        </div>
        
        {/* Admin Access Button */}
        <Button
          onClick={handleAdminButtonClick}
          className="fixed bottom-8 right-8 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90"
          size="lg"
        >
          <Shield className="h-5 w-5 mr-2" />
          Admin Login
        </Button>

        <LoginModal 
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onLogin={handleLogin}
          onChangePassword={handleChangePassword}
        />
      </div>
    </div>
  );
}
