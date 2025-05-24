
import { Button } from "@/components/ui/button";

const KitchenCTA = () => {
  return (
    <section className="py-16 bg-interior-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl font-bold mb-6">
          Transform Your Space Today
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Our expert designers are ready to help you create the perfect interior for your home or office
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={() => {
              const element = document.getElementById('contact-form');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-interior-gold hover:bg-interior-gold/90 text-white px-8 py-3 rounded-none"
          >
            Get a Free Quote
          </Button>
          <Button 
            onClick={() => {
              window.location.href = "tel:+919377766717";
            }}
            variant="outline"
            className="border-interior-gold text-interior-gold hover:bg-interior-gold/10 px-8 py-3 rounded-none"
          >
            Call Us: +91 937-776-6717
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KitchenCTA;
