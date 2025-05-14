
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

const QuotePopup = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: ""
  });
  const [hasSeenPopup, setHasSeenPopup] = useState(false);
  
  useEffect(() => {
    // Check if user has already seen the popup in this session
    const popupSeen = sessionStorage.getItem("quotePopupSeen");
    
    if (!popupSeen) {
      // Show popup after a 2 second delay
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("quotePopupSeen", "true");
        setHasSeenPopup(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      setHasSeenPopup(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `Hello, I'm interested in a free quote!\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}`;
    
    // Create WhatsApp URL with the message
    const whatsappNumber = "919377766717"; // Your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Close the dialog
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-serif">Get Your Free Quote</DialogTitle>
          <DialogDescription className="text-center">
            Fill in your details and we'll provide a free consultation for your interior design needs
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="border-blue-light focus:ring-blue-medium"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="mobile" className="text-sm font-medium">
                Mobile Number
              </label>
              <Input
                id="mobile"
                name="mobile"
                placeholder="Your mobile number"
                required
                type="tel"
                className="border-blue-light focus:ring-blue-medium"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                required
                className="border-blue-light focus:ring-blue-medium"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <DialogClose asChild>
              <Button 
                type="button" 
                variant="outline" 
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button 
              type="submit" 
              className="bg-blue-medium hover:bg-blue-dark text-white flex items-center gap-2"
            >
              <img 
                src="/lovable-uploads/71fc2b60-e07c-42dc-9f9e-01e7409f0600.png" 
                alt="WhatsApp" 
                className="w-5 h-5" 
              />
              Get Free Quote
            </Button>
          </div>
        </form>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default QuotePopup;
