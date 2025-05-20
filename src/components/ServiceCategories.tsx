
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ServiceCategoryProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCategory = ({ title, description, image }: ServiceCategoryProps) => {
  return (
    <Card className="overflow-hidden border-none rounded-lg shadow-lg hover:shadow-xl transition-all group">
      <div className="aspect-[4/3] relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-6 bg-gradient-to-br from-gray-lightest to-white border-l-2 border-blue-medium">
        <h3 className="font-serif text-xl font-semibold mb-2 text-blue-navy">{title}</h3>
        <p className="text-gray-medium text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServiceCategories = () => {
  const [activeTab, setActiveTab] = useState("interior-design");
  
  const serviceTypes = [
    { id: "interior-design", label: "Interior Design" },
    { id: "design-consultation", label: "Design Consultation" },
    { id: "project-management", label: "Project Management" },
    { id: "vastu-shastra", label: "Vastu Shastra" },
    { id: "kitchen", label: "Kitchen Designs" }
  ];
  
  const services = [
    {
      title: "Home Interior",
      description: "Functional kitchen, wardrobe and storage solutions",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80",
      type: "interior-design"
    },
    {
      title: "Office Interior",
      description: "Turnkey interior solutions for your home",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      type: "interior-design"
    },
    {
      title: "Hotel Interior",
      description: "Tailored interiors that redefine elegance",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80",
      type: "interior-design"
    },
    {
      title: "Home Renovation",
      description: "Expert solutions to upgrade your home",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
      type: "interior-design"
    },
    {
      title: "Restaurant Interior",
      description: "Creative spaces for dining and entertainment",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
      type: "interior-design"
    },
    {
      title: "Design Consultation",
      description: "Personalized design advice from our experts",
      image: "https://images.unsplash.com/photo-1577791465485-b80039b4d69a?auto=format&fit=crop&w=600&q=80",
      type: "design-consultation"
    },
    {
      title: "Project Management",
      description: "Comprehensive project scheduling and monitoring",
      image: "https://images.unsplash.com/photo-1550305080-4e029753abcf?auto=format&fit=crop&w=600&q=80",
      type: "project-management"
    },
    {
      title: "Vastu Shastra Consultation",
      description: "Comprehensive evaluation of your home's energy flow",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
      type: "vastu-shastra"
    },
    {
      title: "Modern Kitchen Designs",
      description: "Functional and stylish kitchen solutions for modern homes",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      type: "kitchen"
    },
    {
      title: "Kitchen Remodeling",
      description: "Transform your outdated kitchen with our expert remodeling services",
      image: "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?auto=format&fit=crop&w=600&q=80",
      type: "kitchen"
    },
    {
      title: "Custom Kitchen Cabinets",
      description: "Personalized storage solutions designed for your unique kitchen space",
      image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=600&q=80",
      type: "kitchen"
    }
  ];

  const filteredServices = services.filter(service => service.type === activeTab);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-lightest" id="services">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-blue-navy">
            One-stop shop for all things interiors
          </h2>
          <div className="w-20 h-1 bg-blue-medium mx-auto mb-6"></div>
          <p className="text-gray-medium max-w-3xl mx-auto">
            Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. 
            With a wide range of furniture & decor, we have your back from start to finish.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Tabs 
            defaultValue="interior-design" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full max-w-4xl"
          >
            <TabsList className="flex flex-wrap justify-center bg-gray-lightest p-2 rounded-md gap-2">
              {serviceTypes.map((type) => (
                <TabsTrigger 
                  key={type.id} 
                  value={type.id}
                  className="px-4 py-2 rounded data-[state=active]:bg-blue-medium data-[state=active]:text-white"
                >
                  {type.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map((service, index) => (
            <Link 
              key={index}
              to={service.type === "kitchen" ? "/kitchen" : "#"}
              className="block"
            >
              <ServiceCategory
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
