
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCategoryProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCategory = ({ title, description, image }: ServiceCategoryProps) => {
  return (
    <Card className="overflow-hidden border border-interior-beige rounded-xl hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
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
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Full Home Interiors",
      description: "Turnkey interior solutions for your home",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Luxury Interiors",
      description: "Tailored interiors that redefine elegance",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Renovations",
      description: "Expert solutions to upgrade your home",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
    },
  ];

  return (
    <section className="py-16 bg-interior-cream" id="services">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            One-stop shop for all things interiors
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. 
            With a wide range of furniture & decor, we have your back from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
