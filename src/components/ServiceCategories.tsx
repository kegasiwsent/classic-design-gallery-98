import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ServiceCategoryProps {
  title: string;
  description: string;
  image: string;
  detailedDescription?: string;
}

const ServiceCategory = ({
  title,
  description,
  image,
  detailedDescription
}: ServiceCategoryProps) => {
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
        <h3 className="font-serif text-xl font-semibold mb-2 text-blue-navy uppercase">{title}</h3>
        <p className="text-gray-medium text-sm mb-3 font-normal">{description}</p>
        {detailedDescription && (
          <div className="text-gray-600 text-xs leading-relaxed">
            <p className="text-justify">{detailedDescription}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ServiceCategories = () => {
  const [activeTab, setActiveTab] = useState("interior-design");

  const serviceTypes = [
    {
      id: "interior-design",
      label: "Interior Design"
    },
    {
      id: "design-consultation",
      label: "Design Consultation"
    },
    {
      id: "project-management",
      label: "Project Management"
    },
    {
      id: "vastu-shastra",
      label: "Vastu Shastra"
    },
    {
      id: "kitchen",
      label: "Kitchen Designs"
    }
  ];

  const services = [
    {
      title: "Home Interior",
      description: "Functional kitchen, wardrobe and storage solutions",
      image: "/lovable-uploads/148ab79d-eedb-454e-bf00-64673bd15ba6.png",
      type: "interior-design",
      detailedDescription: "The art of home interior design includes four important pillars like concept development, thorough communication with the client, planning, and execution of works. Personal preferences of the client, professional experience, and our innate talent help us to provide the best blueprint. We create a vibrant visual layout before going ahead with the real transformation of space and show you it as a 3D model. Our technical knowledge, experience, and teamwork make the plan become your reality. All this aside, we feel that your vision of how your home should be is more crucial than anything else. We work together with you and design your home according to your lifestyle."
    },
    {
      title: "Office Interior",
      description: "Turnkey interior solutions for your office",
      image: "/lovable-uploads/2a9eabe4-f735-4784-ab2d-355ce5ed9873.png",
      type: "interior-design",
      detailedDescription: "We know the value of space and space planning, that is why our office designs have become an area of great importance and consideration in an age where a major part of the day is spent in the office space. The design not only portrays what your work stands for but also determines the productivity of your employees. When you invest in professional office design, both form and function will come into play. Once in a lifetime investment in your office space makes sure that you always have consistent and bountiful returns in terms of productivity and achievement of the business goals."
    },
    {
      title: "Hotel Interior",
      description: "Tailored interiors that redefine elegance",
      image: "/lovable-uploads/6d4f8dbb-1599-4d5b-b116-200962f4e50a.png",
      type: "interior-design",
      detailedDescription: "Nowadays the consumer is getting more and more demanding for lifestyle luxury; we collaborate with many hoteliers to build designs that appeal to the senses of the globe-trotting Indian and international clients. We offer interior design for premium hotels making sure to create stylized designs with the best in quality material for delivering the luxurious experience that compels the consumer to return to the hotel. As an interior designer for hotels, the focus is on building an indulging experience for the guests."
    },
    {
      title: "Home Renovation",
      description: "Expert solutions to upgrade your home",
      image: "/lovable-uploads/4466c9a4-d56f-4c26-a1eb-34933612b2d9.png",
      type: "interior-design",
      detailedDescription: "Making a bespoke life experience is an extremely important and tough task. But maintaining the same through the long years while saving and emanating the essence of freshness shows dexterity in itself. Our home renovation services focus on ensuring that your home remains the same as you always wanted it to be. Our skilled partners and their associates make sure that every inch of your home is as fresh as it was on the day it was first completed. Being a consultation centric firm we now rarely need to delve into the execution, but with our competent partners, we ensure that we deliver you what we have promised."
    },
    {
      title: "Restaurant Interior",
      description: "Creative spaces for dining and entertainment",
      image: "/lovable-uploads/f0ed2c49-48e8-4ca8-862e-9c61e3162827.png",
      type: "interior-design",
      detailedDescription: "Creating an amazing interior design is anything but simple. There are thousands of factors to juggle – What will your restaurant or cafe's style be like? How can you make the interior as beautiful and decorative as possible without disrupting the staff's workflow? Will safety regulations even allow your grandiose designs to take form? When you think about just how much goes into the design of the perfect restaurant interior, you'll gain a whole new appreciation for these wondrously designed interior spaces. Our restaurant concept development not only involves restaurant design but also includes market and competitive research, emerging and fading trends to design a space that helps your customers to enjoy your food to the fullest."
    },
    {
      title: "Design Consultation",
      description: "Personalized design advice from our experts",
      image: "/lovable-uploads/9eef517c-76f7-4fe3-9764-56393e30a29b.png",
      type: "design-consultation",
      detailedDescription: "We begin by being the first point of contact with you. We ask questions to uncover details that reveal your interests and aesthetics, your wish list, and your dreams because these will help inspire our design. Even if our work is bespoke to you, we will also ask you to review our portfolio to preview our work and get a better idea of our range of design services. We explore your vision, goals and lifestyle priorities to create your persona in terms of an artist and get a feel for the Scope of Work you envision. We prepare and consult with you using the latest 3D digital designs prior to initiating any actual work at both residential and commercial sites."
    },
    {
      title: "Project Management",
      description: "Comprehensive project scheduling and monitoring",
      image: "/lovable-uploads/68eac0d9-06b7-412c-9dc9-e3405a4614e6.png",
      type: "project-management",
      detailedDescription: "JB design is a state-of-art organization that facilitates consultation and interior design services for various clients. To help our clients and free them from the time constraint of managing each and every vendor involved within the execution of the interior design process, we provide project management service for managing various stakeholders on our clients' behalf. This is an add-on service that is sought by those clients who have a total time crunch and are reluctant about the underlying costs. We connect you with the reputed and best in the industry vendors to ensure only the best quality products and services are delivered to make your dream space come alive. The vendors are thoroughly vetted by us and the quality of material supplied by them is checked at regular intervals."
    },
    {
      title: "Vastu Shastra Consultation",
      description: "Comprehensive evaluation of your home's energy flow",
      image: "/lovable-uploads/71f93f7b-677d-42f9-991b-6ab9d743d41f.png",
      type: "vastu-shastra",
      detailedDescription: "Vastu Shastra is an ancient method of living harmoniously with the Nature. It is the science or study of the communion between human mind, body and soul with the environment that is the science of human existence vis-à-vis the larger cosmos. It is an art, which takes care of space, elements, energy, direction, shape, size, position, environment, utility of space etc. Ancient Indian books like MAYAMATAM, RAJA VALLABH SARNI, VISHKARMA PRAKASH, SAMARANGAN SUTRA, BHOJ SAMHITA etc. gives a deep insight of that day living and their understanding of the nature. This knowledge which has come to us from the 'Vedas', 'Sthapatya Veda', a part of the 'Atharva Veda', the sacred text of Hindus and is believed to be around 4 to 5 thousand years old. Our services like VASTU SHASTRA CONSULTANCY and GHAR VASTU help you to make your home Vastu perfect."
    },
    {
      title: "Contemporary Kitchen with Artistic Elements",
      description: "Modern kitchen with decorative wall art and sleek design elements",
      image: "/lovable-uploads/209fa91f-67f6-49b6-84ec-7a6fb826fc56.png",
      type: "kitchen"
    },
    {
      title: "Modern L-shaped Kitchen with Premium Finishes",
      description: "Elegant L-shaped kitchen with wood finish and contemporary lighting",
      image: "/lovable-uploads/277de05e-7d10-4315-a3bc-bd37be4f14b8.png",
      type: "kitchen"
    },
    {
      title: "Colorful Modular Kitchen Design",
      description: "Vibrant blue kitchen with modern appliances and efficient storage",
      image: "/lovable-uploads/64b70b14-b9b1-420c-891a-6d06a398b333.png",
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
          <Tabs defaultValue="interior-design" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl">
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
                detailedDescription={service.detailedDescription} 
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
