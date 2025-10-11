"use client"
import { Phone, MessageCircle, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919770966605"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="inline-flex items-center justify-center rounded-full h-14 w-14 shadow-lg bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all duration-300 hover:scale-110 hover:shadow-xl animate-float"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Call Button */}
      <a 
        href="tel:9770966605" 
        aria-label="Call Now"
        className="inline-flex items-center justify-center rounded-full h-14 w-14 shadow-lg bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 text-white transition-all duration-300 hover:scale-110 hover:shadow-xl animate-float"
        style={{ animationDelay: "0.2s" }}
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="inline-flex items-center justify-center rounded-full h-14 w-14 shadow-lg bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 hover:scale-110 hover:shadow-xl animate-fade-in"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;