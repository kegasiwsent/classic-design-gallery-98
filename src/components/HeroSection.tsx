
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-interior-navy/30"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center">
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl animate-fade-in">
          Home to beautiful interiors
        </h1>
        <p className="text-base md:text-lg max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office.
        </p>
        <Button 
          className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base animate-fade-in" 
          style={{ animationDelay: "0.4s" }}
        >
          BOOK FREE CONSULTATION
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <span className="h-2 w-2 rounded-full bg-primary"></span>
        <span className="h-2 w-2 rounded-full bg-white/60"></span>
        <span className="h-2 w-2 rounded-full bg-white/60"></span>
      </div>
    </section>
  );
};

export default HeroSection;
