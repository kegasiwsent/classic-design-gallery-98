
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/0a163206-d09d-4111-936d-cd67aec3aba2.png')",
        }}
      >
        <div className="absolute inset-0 bg-interior-navy/50"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 md:p-16 lg:p-24">
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl animate-fade-in">
          3D visualization for Interior and Exterior
        </h1>
        <p className="text-base md:text-lg max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Create visual content which will be followed by walkthrough in order to get feel of end result before starting of the project.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            className="bg-black hover:bg-black/90 text-white rounded-none px-8 py-6 text-base"
          >
            Read more
          </Button>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-base"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
