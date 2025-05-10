
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
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
    toast({
      title: "Form Submitted",
      description: "We'll get back to you shortly!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 bg-interior-cream" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Book a free consultation</h2>
            <p className="text-muted-foreground mb-8">
              Let's transform your space into something beautiful. Our team of expert designers 
              will help you create the perfect interior for your needs and preferences.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 text-primary h-5 w-5" />
                <div>
                  <h4 className="font-medium mb-1">Visit our studio</h4>
                  <p className="text-muted-foreground text-sm">123 Design Street, Creative City, 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 text-primary h-5 w-5" />
                <div>
                  <h4 className="font-medium mb-1">Call us</h4>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 text-primary h-5 w-5" />
                <div>
                  <h4 className="font-medium mb-1">Email us</h4>
                  <p className="text-muted-foreground text-sm">hello@livspace.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="mr-4 text-primary h-5 w-5" />
                <div>
                  <h4 className="font-medium mb-1">Working hours</h4>
                  <p className="text-muted-foreground text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
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
    </section>
  );
};

export default ConsultationForm;
