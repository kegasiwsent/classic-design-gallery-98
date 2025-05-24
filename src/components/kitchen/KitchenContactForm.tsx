
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { serviceCategories } from "@/data/kitchenData";

const KitchenContactForm = () => {
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

  return (
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
  );
};

export default KitchenContactForm;
