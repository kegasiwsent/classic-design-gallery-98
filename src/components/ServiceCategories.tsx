
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState("all");
  
  const serviceTypes = [
    { id: "all", label: "All Services" },
    { id: "interior-design", label: "Interior Design" },
    { id: "design-consultation", label: "Design Consultation" },
    { id: "project-management", label: "Project Management" },
    { id: "vastu-shastra", label: "Vastu Shastra" }
  ];
  
  const services = [
    {
      title: "Modular Interiors",
      description: "Functional kitchen, wardrobe and storage solutions",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80",
      type: "interior-design"
    },
    {
      title: "Full Home Interiors",
      description: "Turnkey interior solutions for your home",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      type: "interior-design"
    },
    {
      title: "Luxury Interiors",
      description: "Tailored interiors that redefine elegance",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80",
      type: "interior-design"
    },
    {
      title: "Renovations",
      description: "Expert solutions to upgrade your home",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
      type: "interior-design"
    },
    {
      title: "One-on-One Consultation",
      description: "Personalized design advice from our experts",
      image: "https://images.unsplash.com/photo-1577791465485-b80039b4d69a?auto=format&fit=crop&w=600&q=80",
      type: "design-consultation"
    },
    {
      title: "Material Selection",
      description: "Guidance on choosing the perfect materials for your space",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=600&q=80",
      type: "design-consultation"
    },
    {
      title: "Timeline Planning",
      description: "Comprehensive project scheduling and monitoring",
      image: "https://images.unsplash.com/photo-1550305080-4e029753abcf?auto=format&fit=crop&w=600&q=80",
      type: "project-management"
    },
    {
      title: "Contractor Management",
      description: "Coordination between all parties involved in your project",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
      type: "project-management"
    },
    {
      title: "Home Vastu Analysis",
      description: "Comprehensive evaluation of your home's energy flow",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
      type: "vastu-shastra"
    },
    {
      title: "Vastu Correction Planning",
      description: "Solutions to align your space with vastu principles",
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=600&q=80",
      type: "vastu-shastra"
    }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.type === activeTab);

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

        <div className="flex justify-center mb-10">
          <Tabs 
            defaultValue="all" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full max-w-4xl"
          >
            <TabsList className="flex flex-wrap justify-center bg-interior-beige/20 p-2 rounded-md gap-2">
              {serviceTypes.map((type) => (
                <TabsTrigger 
                  key={type.id} 
                  value={type.id}
                  className="px-4 py-2 rounded data-[state=active]:bg-interior-gold data-[state=active]:text-interior-charcoal"
                >
                  {type.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map((service, index) => (
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
