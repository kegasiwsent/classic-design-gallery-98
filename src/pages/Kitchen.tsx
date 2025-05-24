
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const KitchenDesign = () => {
  const { toast } = useToast();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    projectType: "Kitchen"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent, service: string) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hello, I'm interested in your ${service} services!\n\nName: ${contactInfo.name}\nPhone: ${contactInfo.phone}\nProject Type: ${service}`;
    
    // Redirect to WhatsApp with the message
    const whatsappUrl = `https://wa.me/919377766717?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    // Show toast notification
    toast({
      title: "Request Sent",
      description: `Your ${service} inquiry has been sent. We'll contact you shortly!`,
    });
    
    // Reset form
    setContactInfo({
      name: "",
      phone: "",
      projectType: "Kitchen"
    });
  };

  const kitchenDesigns = [
    {
      title: "Contemporary Kitchen with Artistic Elements",
      image: "/lovable-uploads/209fa91f-67f6-49b6-84ec-7a6fb826fc56.png",
      description: "Modern kitchen with decorative wall art and sleek design elements"
    },
    {
      title: "Modern L-shaped Kitchen with Premium Finishes",
      image: "/lovable-uploads/277de05e-7d10-4315-a3bc-bd37be4f14b8.png",
      description: "Elegant L-shaped kitchen with wood finish and contemporary lighting"
    },
    {
      title: "Colorful Modular Kitchen Design",
      image: "/lovable-uploads/64b70b14-b9b1-420c-891a-6d06a398b333.png",
      description: "Vibrant blue kitchen with modern appliances and efficient storage"
    }
  ];

  const serviceCategories = [
    {
      id: "kitchen",
      title: "Kitchen",
      description: "Beautiful and functional kitchen designs that maximize your space",
      items: [
        "Modern modular kitchens",
        "Custom storage solutions",
        "Premium countertops",
        "Efficient layouts",
        "High-quality cabinets"
      ],
      images: kitchenDesigns.map(design => design.image)
    },
    {
      id: "turnkey",
      title: "Turnkey Projects",
      description: "Complete end-to-end interior solutions for your entire home",
      items: [
        "Full home interiors",
        "Project management",
        "Material procurement",
        "Quality control",
        "Timely delivery"
      ],
      images: []
    },
    {
      id: "furniture",
      title: "Furniture",
      description: "Custom-made furniture crafted to your specifications",
      items: [
        "Wardrobes & storage",
        "Beds & side tables",
        "TV units & entertainment",
        "Study & office furniture",
        "Custom seating"
      ],
      images: []
    },
    {
      id: "ceiling",
      title: "Ceiling",
      description: "Creative ceiling designs that transform your space",
      items: [
        "False ceiling designs",
        "Cove lighting solutions",
        "POP designs",
        "Wooden ceiling",
        "Accent lighting"
      ],
      images: []
    },
    {
      id: "electrical",
      title: "Electrical",
      description: "Complete electrical solutions for your home",
      items: [
        "Smart home wiring",
        "Lighting design",
        "Outlet planning",
        "Safety features",
        "Energy efficiency"
      ],
      images: []
    },
    {
      id: "colour",
      title: "Colour & Paint",
      description: "Elevate your spaces with perfect color combinations",
      items: [
        "Color consultations",
        "Texture painting",
        "Wallpaper solutions",
        "Specialty finishes",
        "Eco-friendly options"
      ],
      images: []
    },
    {
      id: "glass",
      title: "Glass Work",
      description: "Elegant glass solutions for modern interiors",
      items: [
        "Shower enclosures",
        "Glass partitions",
        "Mirror designs",
        "Glass railings",
        "Decorative glass"
      ],
      images: []
    },
    {
      id: "civil",
      title: "Civil Work",
      description: "Structural modifications and enhancements for your space",
      items: [
        "Wall modifications",
        "Flooring solutions",
        "Bathroom renovations",
        "Plumbing work",
        "Foundation repairs"
      ],
      images: []
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
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

        {/* Kitchen Designs Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4">
                Our Kitchen Design Portfolio
              </h2>
              <div className="w-20 h-1 bg-interior-gold mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our range of beautiful kitchen designs tailored for modern homes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {kitchenDesigns.map((design, index) => (
                <div key={index} className="group overflow-hidden bg-white shadow-lg rounded-lg">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={design.image} 
                      alt={design.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-2">{design.title}</h3>
                    <p className="text-gray-600 mb-4">{design.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4">
                Our Complete Interior Services
              </h2>
              <div className="w-20 h-1 bg-interior-gold mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive solutions for every aspect of your interior needs
              </p>
            </div>

            <Tabs defaultValue="kitchen" className="w-full">
              <div className="flex justify-center mb-12 overflow-x-auto pb-4">
                <TabsList className="bg-white border border-gray-200 p-1 flex flex-nowrap">
                  {serviceCategories.map((category) => (
                    <TabsTrigger 
                      key={category.id}
                      value={category.id} 
                      className="px-4 py-2 whitespace-nowrap"
                    >
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {serviceCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className={`grid grid-cols-1 ${category.images.length > 0 ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
                    <div className="space-y-6">
                      <h3 className="font-serif text-3xl font-bold">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                      
                      <ul className="space-y-3">
                        {category.items.map((item, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-2 h-2 bg-interior-gold rounded-full mr-3"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4">
                        <Button 
                          onClick={() => {
                            const element = document.getElementById('contact-form');
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="bg-interior-gold hover:bg-interior-gold/90 text-white rounded-none px-8 py-2"
                        >
                          Request Quote
                        </Button>
                      </div>
                    </div>
                    
                    {category.images.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {category.images.map((image, i) => (
                          <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                            <img 
                              src={image} 
                              alt={`${category.title} example ${i+1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-interior-navy text-white" id="contact-form">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold mb-4">
                  Request a Free Consultation
                </h2>
                <div className="w-20 h-1 bg-interior-gold mx-auto mb-6"></div>
                <p className="text-white/80">
                  Share your details and we'll contact you to discuss your project requirements
                </p>
              </div>
              
              <form onSubmit={(e) => handleSubmit(e, contactInfo.projectType)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactInfo.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/20 border border-white/20 p-3 text-white placeholder-white/50 focus:outline-none focus:border-interior-gold"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white/80 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactInfo.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/20 border border-white/20 p-3 text-white placeholder-white/50 focus:outline-none focus:border-interior-gold"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-white/80 mb-2">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={contactInfo.projectType}
                    onChange={(e) => setContactInfo({...contactInfo, projectType: e.target.value})}
                    className="w-full bg-white/20 border border-white/20 p-3 text-white focus:outline-none focus:border-interior-gold"
                    required
                  >
                    {serviceCategories.map(category => (
                      <option key={category.id} value={category.title}>{category.title}</option>
                    ))}
                  </select>
                </div>
                
                <div className="text-center pt-4">
                  <Button 
                    type="submit"
                    className="bg-interior-gold hover:bg-interior-gold/90 text-white px-12 py-3 rounded-none"
                  >
                    GET FREE QUOTE ON WHATSAPP
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>
      <Footer />
    </>
  );
};

export default KitchenDesign;
