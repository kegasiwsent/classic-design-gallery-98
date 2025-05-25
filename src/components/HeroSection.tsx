import { Button } from "./ui/button";
import HeroSlideshow from "./HeroSlideshow";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const HeroSection = () => {
  return <section className="h-screen w-full relative overflow-hidden">
      {/* Background slideshow */}
      <HeroSlideshow />

      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 md:p-16 lg:p-24">
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-lightest drop-shadow-lg">The Philosophical Study Of Beauty And Art </h1>
        <p className="text-base md:text-lg max-w-2xl mb-8 animate-fade-in text-gray-lightest/90" style={{
        animationDelay: "0.2s"
      }}></p>
        
        <div className="flex flex-col items-start space-y-3 animate-fade-in" style={{
        animationDelay: "0.4s"
      }}>
          <p className="text-base md:text-lg font-medium text-white/90 mb-1">
            One-stop shop for all things interiors
          </p>
          <Link to="/kitchen" className="text-interior-gold hover:text-interior-gold/80 transition-colors underline underline-offset-4 font-medium">
            Explore All Our Services →
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/about" className="bg-blue-medium hover:bg-blue-dark text-white rounded-md px-8 py-6 text-base border border-blue-light/30 hover:scale-105 transition-transform inline-flex items-center justify-center">
              Read more
            </Link>
            <HashLink to="/#services" smooth className="border-blue-medium text-white bg-gray-dark/50 hover:bg-blue-navy/50 rounded-md px-8 py-6 text-base hover:scale-105 transition-transform inline-flex items-center justify-center">
              Our Services
            </HashLink>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;