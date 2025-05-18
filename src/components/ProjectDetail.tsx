import { useParams, Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Image } from "lucide-react";

// This is just mock data - in a real app this would come from an API or database
const projectsData = {
  "contemporary-comfort": {
    title: "Contemporary Comfort",
    category: "Master Bedroom",
    description: "A modern approach to bedroom design with clean lines and comfortable textures. This project focused on creating a tranquil retreat that balances style with functionality. The neutral color palette is enhanced with subtle textures and strategic lighting to create a calming atmosphere.",
    client: "Private Residence",
    location: "Manhattan, NY",
    year: "2023",
    mainImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616486506648-12b32be638b9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1616137148650-4aa7b11e9518?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1616486506434-7b3453c2f52f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1616137098530-156df2665afc?auto=format&fit=crop&w=600&q=80"
    ]
  },
  "elegant-lighting": {
    title: "Elegant Lighting",
    category: "False Ceiling",
    description: "Creative ceiling designs with innovative lighting solutions that transform the ambiance of the entire space. This project demonstrates how thoughtful lighting design can elevate interior architecture and create distinctive environments.",
    client: "Luxury Apartment Complex",
    location: "Chicago, IL",
    year: "2022",
    mainImage: "https://images.unsplash.com/photo-1616137148650-4aa7b11e9518?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616486506648-12b32be638b9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1616137148650-4aa7b11e9518?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1616486506434-7b3453c2f52f?auto=format&fit=crop&w=600&q=80"
    ]
  },
  "modern-functionality": {
    title: "Modern Functionality",
    category: "Kitchen Designs",
    description: "Efficient kitchen layouts combining style with practical functionality. This kitchen renovation focused on maximizing space efficiency while incorporating high-end appliances and premium materials for a sophisticated cooking environment.",
    client: "Family Home",
    location: "San Francisco, CA",
    year: "2023",
    mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607686527-e2f4df1a05ec?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e4a59aaf650?auto=format&fit=crop&w=600&q=80"
    ]
  },
  "space-optimization": {
    title: "Space Optimization",
    category: "Wardrobe Designs",
    description: "Maximizing storage with thoughtfully designed wardrobe solutions. Custom cabinetry and innovative storage systems create organization while complementing the overall design aesthetic of the room.",
    client: "Urban Apartment",
    location: "Boston, MA",
    year: "2023",
    mainImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?auto=format&fit=crop&w=600&q=80"
    ]
  },
  "family-gatherings": {
    title: "Family Gatherings",
    category: "Dining Room",
    description: "Creating spaces that bring families together over meals and conversations. This dining room redesign focuses on comfort, acoustics, and creating a welcoming atmosphere for entertaining guests and everyday family meals.",
    client: "Suburban Home",
    location: "Seattle, WA",
    year: "2022",
    mainImage: "https://images.unsplash.com/photo-1603512500383-e0d26e33d7fc?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1603512500383-e0d26e33d7fc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1604578762246-71185238446c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
    ]
  },
  "urban-retreat": {
    title: "Urban Retreat",
    category: "Living Room",
    description: "Transforming living spaces into comfortable urban sanctuaries. This project creates a harmonious balance between contemporary design and comfortable livability, with custom furniture pieces and a cohesive material palette.",
    client: "Downtown Loft",
    location: "Portland, OR",
    year: "2023",
    mainImage: "https://images.unsplash.com/photo-1600607687644-c7f34b5f4f1b?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687920-4e4a59aaf650?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600607687166-b921078dca55?auto=format&fit=crop&w=600&q=80"
    ]
  },
  "productive-environment": {
    title: "Productive Environment",
    category: "Office Space",
    description: "Designing office spaces that enhance productivity and creativity. This project incorporates ergonomic furniture, strategic space planning, and biophilic design elements to create an inspiring workplace.",
    client: "Tech Startup",
    location: "Austin, TX",
    year: "2023",
    mainImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80"
    ]
  },
  "first-impressions": {
    title: "First Impressions",
    category: "Reception Area",
    description: "Creating inviting reception areas that leave lasting impressions. The design focuses on brand identity, visitor comfort, and efficient space utilization to create a memorable first touchpoint for clients and guests.",
    client: "Corporate Headquarters",
    location: "Denver, CO",
    year: "2022",
    mainImage: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577992443062-54883f8e95c3?auto=format&fit=crop&w=600&q=80"
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Check if projectId exists in our data
  const project = projectId && projectsData[projectId as keyof typeof projectsData];
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="font-serif text-2xl mb-6">Project not found</h2>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }
  
  const handleRequestProject = () => {
    // Create WhatsApp message with project details
    const message = `Hello, I'm interested in a project similar to "${project.title}"!\n\nProject Type: ${project.category}\nLocation: ${project.location}\n\nI would like to discuss how we can create something similar for my space.`;
    
    // Redirect to WhatsApp with the message
    const whatsappUrl = `https://wa.me/919377766717?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-interior-charcoal min-h-screen pb-20">
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src={project.mainImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl md:text-5xl text-white font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-interior-gold text-xl">{project.category}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Link to="/#projects" className="inline-flex mb-8">
          <Button variant="outline" className="border-interior-gold text-interior-gold hover:bg-interior-gold/10">
            <ArrowLeft className="mr-2" size={16} />
            Back to Projects
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-white mb-6">Project Overview</h2>
            <p className="text-interior-beige/80 mb-8 leading-relaxed">{project.description}</p>
            
            <h2 className="font-serif text-2xl text-white mb-6 mt-12">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.galleryImages.map((image, index) => (
                <div key={index} className="relative group cursor-pointer overflow-hidden rounded-md">
                  <AspectRatio ratio={3/2}>
                    <img 
                      src={image} 
                      alt={`Gallery image ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Image className="text-white" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-interior-navy/30 p-6 h-fit rounded-md border border-interior-gold/10">
            <h3 className="font-serif text-xl text-white mb-6">Project Details</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-interior-gold text-sm">Client</dt>
                <dd className="text-white">{project.client}</dd>
              </div>
              <div>
                <dt className="text-interior-gold text-sm">Location</dt>
                <dd className="text-white">{project.location}</dd>
              </div>
              <div>
                <dt className="text-interior-gold text-sm">Year Completed</dt>
                <dd className="text-white">{project.year}</dd>
              </div>
              <div>
                <dt className="text-interior-gold text-sm">Category</dt>
                <dd className="text-white">{project.category}</dd>
              </div>
            </dl>
            
            <div className="mt-8">
              <Button 
                className="w-full bg-interior-gold hover:bg-interior-gold/90 text-black"
                onClick={handleRequestProject}
              >
                Request Similar Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
