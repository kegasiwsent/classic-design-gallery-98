
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent absolute top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <img 
              alt="JB Design Logo" 
              src="/lovable-uploads/172a6183-431f-48c7-a892-6f5a6858717c.png" 
              className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-all duration-300 animate-fade-in" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
          <Link to="/" className="text-sm text-interior-beige hover:text-interior-gold transition-colors font-medium">Home</Link>
          <Link to="/services" className="text-sm text-interior-beige hover:text-interior-gold transition-colors font-medium">Services</Link>
          <Link to="/about" className="text-sm text-interior-beige hover:text-interior-gold transition-colors font-medium">About</Link>
          <Link to="/projects" className="text-sm text-interior-beige hover:text-interior-gold transition-colors font-medium">Projects</Link>
          <Link to="/consultation" className="text-sm text-interior-beige hover:text-interior-gold transition-colors font-medium">Contact Us</Link>
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
            <Link to="/" className="text-sm text-interior-beige hover:text-interior-gold transition-colors py-2 border-b border-interior-gold/20" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" className="text-sm text-interior-beige hover:text-interior-gold transition-colors py-2 border-b border-interior-gold/20" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/about" className="text-sm text-interior-beige hover:text-interior-gold transition-colors py-2 border-b border-interior-gold/20" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/projects" className="text-sm text-interior-beige hover:text-interior-gold transition-colors py-2 border-b border-interior-gold/20" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/consultation" className="text-sm text-interior-beige hover:text-interior-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
