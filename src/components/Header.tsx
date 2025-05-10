
import { useState } from "react";
import { Menu, X, Instagram, Youtube, Linkedin, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="w-full bg-transparent absolute top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img alt="JB Design Logo" src="/lovable-uploads/172a6183-431f-48c7-a892-6f5a6858717c.png" className="h-10 object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-white hover:text-primary transition-colors">Home</a>
          <a href="#services" className="text-sm text-white hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-sm text-white hover:text-primary transition-colors">About</a>
          <a href="#portfolio" className="text-sm text-white hover:text-primary transition-colors">Projects</a>
          <a href="#blog" className="text-sm text-white hover:text-primary transition-colors">Blog</a>
          <a href="#contact" className="text-sm text-white hover:text-primary transition-colors">Contact Us</a>
          <a href="#extra" className="text-sm text-white hover:text-primary transition-colors">Extra</a>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-white hover:text-primary transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            <Youtube size={20} />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-interior-navy/90">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#" className="text-sm text-white hover:text-primary transition-colors py-2 border-b border-white/20">Home</a>
            <a href="#services" className="text-sm text-white hover:text-primary transition-colors py-2 border-b border-white/20">Services</a>
            <a href="#about" className="text-sm text-white hover:text-primary transition-colors py-2 border-b border-white/20">About</a>
            <a href="#portfolio" className="text-sm text-white hover:text-primary transition-colors py-2 border-b border-white/20">Projects</a>
            <a href="#blog" className="text-sm text-white hover:text-primary transition-colors py-2 border-b border-white/20">Blog</a>
            <a href="#contact" className="text-sm text-white hover:text-primary transition-colors py-2 border-b border-white/20">Contact Us</a>
            <a href="#extra" className="text-sm text-white hover:text-primary transition-colors py-2">Extra</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
