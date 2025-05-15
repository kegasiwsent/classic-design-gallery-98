
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const QuotePopup = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    country: "India",
    state: "",
    city: "",
    projectType: "",
    residenceType: "",
    squareFeet: ""
  });
  const [hasSeenPopup, setHasSeenPopup] = useState(false);
  const [citiesForState, setCitiesForState] = useState<string[]>([]);
  
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

  useEffect(() => {
    // Update cities when state changes
    if (formData.state) {
      const cities = citiesByState[formData.state] || [];
      setCitiesForState(cities);
      // Reset city when state changes
      setFormData(prev => ({ ...prev, city: "" }));
    }
  }, [formData.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Reset dependent fields when project type changes
    if (name === "projectType") {
      setFormData(prev => ({ ...prev, residenceType: "", squareFeet: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    let message = `Hello, I'm interested in a free quote!\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nLocation: ${formData.city}, ${formData.state}, ${formData.country}`;
    
    // Add project details
    message += `\n\nProject Type: ${formData.projectType}`;
    
    if (formData.projectType === "Residence") {
      message += `\nResidence Type: ${formData.residenceType}`;
    } else if (["Commercial", "Showroom", "Renovation"].includes(formData.projectType) && formData.squareFeet) {
      message += `\nTotal Square Feet: ${formData.squareFeet}`;
    }
    
    // Create WhatsApp URL with the message
    const whatsappNumber = "919377766717"; // Your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Close the dialog
    setOpen(false);
  };

  // List of Indian states
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh", 
    "Assam",
    "Andaman and Nicobar Islands", 
    "Bihar", 
    "Chhattisgarh",
    "Chandigarh", 
    "Dadra and Nagar Haveli and Daman and Diu", 
    "Delhi",
    "Goa", 
    "Gujarat", 
    "Haryana", 
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  // Cities by state
  const citiesByState: {[key: string]: string[]} = {
    "Gujarat": [
      "Ahmedabad", "Adalaj", "Amreli", "Anand", "Anjar", "Ankleshwar", "Aravalli",
      "Bardoli", "Bharuch", "Bhavnagar", "Bhuj", "Bilimora", "Botad",
      "Chhota Udaipur", "Dahod", "Daman", "Dangs", "Deesa", "Dholka", "Dhoraji", "Dwarka",
      "Gandhidham", "Gandhinagar", "Godhra", "Gondal", "Halol", "Himatnagar",
      "Jamnagar", "Jetpur", "Junagadh", "Kalol", "Keshod", "Khambhat", "Kheda", "Khedbrahma",
      "Limbdi", "Mahesana", "Mahuva", "Mandvi", "Modasa", "Morbi",
      "Nadiad", "Navsari", "Palanpur", "Palitana", "Patan", "Porbandar",
      "Rajkot", "Savarkundla", "Surendranagar", "Surat",
      "Umreth", "Vadodara", "Valsad", "Vapi", "Veraval", "Visnagar"
    ],
    "Maharashtra": [
      "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhiwandi", "Buldhana",
      "Chandrapur", "Chiplun", "Dhule", "Dombivli", "Gadchiroli", "Gondia",
      "Jalgaon", "Jalna", "Junnar", "Kolhapur", "Kalyan", "Karad", "Karimnagar", "Khopoli",
      "Latur", "Mumbai", "Mira-Bhayandar", "Malegaon", "Matheran", "Malkapur",
      "Nagpur", "Nanded", "Nashik", "Navi Mumbai", "Panvel", "Parbhani", "Pimpri-Chinchwad", "Pune",
      "Ratnagiri", "Sangli", "Satara", "Solapur", "Shahapur", "Thane",
      "Tuljapur", "Ulhasnagar", "Vasai-Virar", "Wardha", "Washim", "Yavatmal"
    ],
    "Andaman and Nicobar Islands": ["Port Blair"],
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Ziro"],
    "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
    "Chandigarh": ["Chandigarh"],
    "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Bhilai", "Korba"],
    "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
    "Delhi": ["New Delhi", "Delhi"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
    "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Rohtak"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Solan", "Mandi"],
    "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Udhampur"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur"],
    "Ladakh": ["Leh", "Kargil"],
    "Lakshadweep": ["Kavaratti", "Agatti", "Minicoy"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
    "Meghalaya": ["Shillong", "Tura", "Nongstoin", "Jowai", "Baghmara"],
    "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Puri"],
    "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"],
    "Punjab": ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"],
    "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Rangpo"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
    "Tripura": ["Agartala", "Kailasahar", "Belonia"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Prayagraj"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Rishikesh", "Haldwani"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"]
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
              <label htmlFor="country" className="text-sm font-medium">
                Country
              </label>
              <Select 
                value={formData.country} 
                onValueChange={(value) => handleSelectChange(value, "country")}
                disabled
              >
                <SelectTrigger id="country" className="border-blue-light focus:ring-blue-medium">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="India">India</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="state" className="text-sm font-medium">
                State
              </label>
              <Select 
                value={formData.state} 
                onValueChange={(value) => handleSelectChange(value, "state")}
                required
              >
                <SelectTrigger id="state" className="border-blue-light focus:ring-blue-medium">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="city" className="text-sm font-medium">
                City
              </label>
              <Select 
                value={formData.city} 
                onValueChange={(value) => handleSelectChange(value, "city")}
                required
                disabled={!formData.state}
              >
                <SelectTrigger id="city" className="border-blue-light focus:ring-blue-medium">
                  <SelectValue placeholder={formData.state ? "Select city" : "Please select a state first"} />
                </SelectTrigger>
                <SelectContent>
                  {citiesForState.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Project Type Selection */}
            <div className="grid gap-2">
              <label htmlFor="projectType" className="text-sm font-medium">
                Project Type
              </label>
              <Select 
                value={formData.projectType} 
                onValueChange={(value) => handleSelectChange(value, "projectType")}
                required
              >
                <SelectTrigger id="projectType" className="border-blue-light focus:ring-blue-medium">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Residence">Residence</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Showroom">Showroom</SelectItem>
                  <SelectItem value="Renovation">Renovation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Conditional Fields Based on Project Type */}
            {formData.projectType === "Residence" && (
              <div className="grid gap-2">
                <label htmlFor="residenceType" className="text-sm font-medium">
                  Residence Type
                </label>
                <RadioGroup 
                  value={formData.residenceType} 
                  onValueChange={(value) => handleSelectChange(value, "residenceType")}
                  className="flex flex-wrap gap-4"
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5BHK" id="5bhk" />
                    <label htmlFor="5bhk">5BHK</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4BHK" id="4bhk" />
                    <label htmlFor="4bhk">4BHK</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3BHK" id="3bhk" />
                    <label htmlFor="3bhk">3BHK</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2BHK" id="2bhk" />
                    <label htmlFor="2bhk">2BHK</label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Square Feet Input for Commercial, Showroom, and Renovation */}
            {["Commercial", "Showroom", "Renovation"].includes(formData.projectType) && (
              <div className="grid gap-2">
                <label htmlFor="squareFeet" className="text-sm font-medium">
                  Total Square Feet
                </label>
                <Input
                  id="squareFeet"
                  name="squareFeet"
                  placeholder="Enter total square feet"
                  required
                  type="number"
                  className="border-blue-light focus:ring-blue-medium"
                  value={formData.squareFeet}
                  onChange={handleChange}
                />
              </div>
            )}
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
              className="bg-blue-medium hover:bg-blue-dark text-white"
            >
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
