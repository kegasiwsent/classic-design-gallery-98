
import { Button } from "@/components/ui/button";
import HeroSlideshow from "./HeroSlideshow";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <HeroSlideshow />

      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 md:p-16 lg:p-24">
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white to-interior-beige drop-shadow-lg">
          3D visualization for Interior and Exterior
        </h1>
        <p className="text-base md:text-lg max-w-2xl mb-8 animate-fade-in text-interior-beige/90" style={{ animationDelay: "0.2s" }}>
          Create visual content which will be followed by walkthrough in order to get feel of end result before starting of the project.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            className="bg-interior-gold hover:bg-interior-gold/90 text-black rounded-none px-8 py-6 text-base border border-interior-gold/30 hover:scale-105 transition-transform"
          >
            Read more
          </Button>
          <Button 
            variant="outline"
            className="border-interior-gold text-interior-gold hover:bg-interior-gold/10 rounded-none px-8 py-6 text-base hover:scale-105 transition-transform"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
