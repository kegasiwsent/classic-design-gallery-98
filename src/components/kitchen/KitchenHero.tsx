
import { Button } from "@/components/ui/button";

const KitchenHero = () => {
  return (
    <section className="bg-white py-20 text-interior-charcoal">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Smart Modular Kitchen Designs
          </h1>
          <div className="w-24 h-1 bg-interior-gold mb-8"></div>
          <p className="text-gray-600 max-w-2xl text-lg mb-12">
            Transform your kitchen into a beautiful and functional space with our expert design solutions
          </p>
          <Button 
            onClick={() => {
              const element = document.getElementById('contact-form');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-interior-gold hover:bg-interior-gold/90 text-white px-8 py-6 text-lg rounded-none"
          >
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KitchenHero;
