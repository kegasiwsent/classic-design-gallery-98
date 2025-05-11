
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCategoryProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCategory = ({ title, description, image }: ServiceCategoryProps) => {
  return (
    <Card className="overflow-hidden border-none rounded-none shadow-lg hover:shadow-xl transition-all group">
      <div className="aspect-[4/3] relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-6 bg-gradient-to-br from-interior-cream to-white border-l-2 border-interior-gold">
        <h3 className="font-serif text-xl font-semibold mb-2 text-interior-charcoal">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServiceCategories = () => {
  const services = [
    {
      title: "Modular Interiors",
      description: "Functional kitchen, wardrobe and storage solutions",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Full Home Interiors",
      description: "Turnkey interior solutions for your home",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Luxury Interiors",
      description: "Tailored interiors that redefine elegance",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Renovations",
      description: "Expert solutions to upgrade your home",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-interior-beige/30" id="services">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-interior-charcoal">
            One-stop shop for all things interiors
          </h2>
          <div className="w-20 h-1 bg-interior-gold mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. 
            With a wide range of furniture & decor, we have your back from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCategory
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
