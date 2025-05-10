
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background border-b border-interior-beige sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary"></div>
          <span className="font-serif text-xl font-semibold">LIVSPACE</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm hover:text-primary transition-colors">Home</a>
          <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="text-sm hover:text-primary transition-colors">Portfolio</a>
          <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#" className="text-sm hover:text-primary transition-colors py-2 border-b border-interior-beige">Home</a>
            <a href="#services" className="text-sm hover:text-primary transition-colors py-2 border-b border-interior-beige">Services</a>
            <a href="#portfolio" className="text-sm hover:text-primary transition-colors py-2 border-b border-interior-beige">Portfolio</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors py-2 border-b border-interior-beige">About</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors py-2">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
