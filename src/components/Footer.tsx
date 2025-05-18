
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-interior-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="font-serif text-xl font-semibold">JD DESIGN</span>
            </div>
            <p className="text-white/70 text-sm mb-6">
              Creating beautiful, functional spaces that reflect your personality 
              and meet your needs is what we do best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Full Home Interiors</a></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Modular Solutions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Renovation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Furniture & Decor</a></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Commercial Spaces</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Our Designers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm">Projects</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} JD Design. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
