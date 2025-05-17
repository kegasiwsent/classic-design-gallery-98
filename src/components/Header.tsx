
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="w-full bg-transparent absolute top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-2">
          <img 
            alt="JB Design Logo" 
            src="/lovable-uploads/172a6183-431f-48c7-a892-6f5a6858717c.png" 
            className="h-16 object-contain hover:scale-105 transition-all duration-300 animate-fade-in"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
          <a href="#" className="text-sm text-interior-beige hover:text-interior-gold transition-colors font-medium">Home</a>
          <a href="#services" className="text-sm text-interior-beige hover:text-interior-gold transition-colors font-medium">Services</a>
          <a href="#about" className="text-sm text-interior-beige hover:text-interior-gold transition-colors font-medium">About</a>
          <a href="#portfolio" className="text-sm text-interior-beige hover:text-interior-gold transition-colors font-medium">Projects</a>
          <a href="#contact" className="text-sm text-interior-beige hover:text-interior-gold transition-colors font-medium">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-interior-beige" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-interior-navy/90 backdrop-blur-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#" className="text-sm text-interior-beige hover:text-interior-gold transition-colors py-2 border-b border-interior-gold/20">Home</a>
            <a href="#services" className="text-sm text-interior-beige hover:text-interior-gold transition-colors py-2 border-b border-interior-gold/20">Services</a>
            <a href="#about" className="text-sm text-interior-beige hover:text-interior-gold transition-colors py-2 border-b border-interior-gold/20">About</a>
            <a href="#portfolio" className="text-sm text-interior-beige hover:text-interior-gold transition-colors py-2 border-b border-interior-gold/20">Projects</a>
            <a href="#contact" className="text-sm text-interior-beige hover:text-interior-gold transition-colors py-2">Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
