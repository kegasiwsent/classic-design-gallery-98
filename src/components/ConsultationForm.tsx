
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hello, I'd like to schedule a consultation!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    
    // Redirect to WhatsApp with the message
    const whatsappUrl = `https://wa.me/919377766717?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    // Show toast notification
    toast({
      title: "Form Submitted",
      description: "We'll get back to you shortly!",
    });
    
    // Clear form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 bg-interior-cream relative" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Book a free consultation</h2>
            <p className="text-muted-foreground mb-8">
              Let's transform your space into something beautiful. Our team of expert designers 
              will help you create the perfect interior for your needs and preferences.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-interior-beige">
            <h3 className="font-serif text-2xl font-semibold mb-6">Get in touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone</label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white w-full rounded-full"
              >
                BOOK FREE CONSULTATION
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating contact buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a 
          href="https://wa.me/919377766717" 
          target="_blank"
          rel="noopener noreferrer" 
          className="bg-[#25D366] hover:bg-[#20BD5C] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={28} />
        </a>
        
        <a 
          href="tel:+919377766717" 
          className="bg-white hover:bg-gray-100 text-[#5F2877] p-4 rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Call us"
        >
          <Phone size={28} />
        </a>
      </div>
    </section>
  );
};

export default ConsultationForm;
