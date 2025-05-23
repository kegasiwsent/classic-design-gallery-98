
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
}

const Projects = () => {
  const projectsData = {
    all: [
      { id: "contemporary-comfort", image: "/lovable-uploads/f7eb8f22-a7f4-4f2c-ac7a-92f8e9bfa0a7.png", category: "Residential Interior", title: "Project 1", description: "A modern approach to residential interior design featuring elegant spaces with refined finishes." },
      { id: "elegant-lighting", image: "/lovable-uploads/f99c3da1-0d31-4847-bf6e-9dceb62e04cf.png", category: "Residential Interior", title: "Project 2", description: "Contemporary home interior design in Ahmedabad featuring stylish spaces with detailed woodwork and elegant lighting solutions." },
      { id: "modern-functionality", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80", category: "Kitchen Designs", title: "Modern Functionality", description: "Efficient kitchen layouts combining style with practical functionality." },
      { id: "space-optimization", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80", category: "Wardrobe Designs", title: "Space Optimization", description: "Maximizing storage with thoughtfully designed wardrobe solutions." },
      { id: "family-gatherings", image: "https://images.unsplash.com/photo-1603512500383-e0d26e33d7fc?auto=format&fit=crop&w=600&q=80", category: "Dining Room", title: "Family Gatherings", description: "Creating spaces that bring families together over meals and conversations." },
      { id: "urban-retreat", image: "https://images.unsplash.com/photo-1600607687644-c7f34b5f4f1b?auto=format&fit=crop&w=600&q=80", category: "Living Room", title: "Urban Retreat", description: "Transforming living spaces into comfortable urban sanctuaries." },
      { id: "sk-mishra", image: "/lovable-uploads/e59cef9a-5949-44aa-ba5b-7778c8fc62d2.png", category: "Architecture", title: "SK Mishra", description: "Contemporary architectural design featuring elegant modern aesthetics with functional living spaces." },
    ],
    residential: [
      { id: "contemporary-comfort", image: "/lovable-uploads/f7eb8f22-a7f4-4f2c-ac7a-92f8e9bfa0a7.png", category: "Residential Interior", title: "Project 1", description: "A modern approach to residential interior design featuring elegant spaces with refined finishes." },
      { id: "elegant-lighting", image: "/lovable-uploads/f99c3da1-0d31-4847-bf6e-9dceb62e04cf.png", category: "Residential Interior", title: "Project 2", description: "Contemporary home interior design in Ahmedabad featuring stylish spaces with detailed woodwork and elegant lighting solutions." },
      { id: "modern-functionality", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80", category: "Kitchen Designs", title: "Modern Functionality", description: "Efficient kitchen layouts combining style with practical functionality." },
    ],
    office: [
      { id: "productive-environment", image: "/lovable-uploads/b30960a1-e90c-44f3-9a65-4d27d8d39085.png", category: "Office Space", title: "Eternal Office Space", description: "Modern corporate office design with innovative layouts and thoughtful branding elements." },
      { id: "first-impressions", image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=600&q=80", category: "Reception Area", title: "First Impressions", description: "Creating inviting reception areas that leave lasting impressions." },
    ],
    architecture: [
      { id: "sk-mishra", image: "/lovable-uploads/e59cef9a-5949-44aa-ba5b-7778c8fc62d2.png", category: "Architecture", title: "SK Mishra", description: "Contemporary architectural design featuring elegant modern aesthetics with functional living spaces." },
    ],
  };

  return (
    <section className="py-24 bg-interior-charcoal text-white" id="projects">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
            Projects
          </h2>
          <div className="w-20 h-1 bg-interior-gold mx-auto mb-6"></div>
          <p className="text-interior-beige/80 max-w-3xl mx-auto">
            Explore our portfolio of completed interior design projects
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-interior-charcoal/50 border border-interior-gold/20">
              <TabsTrigger value="all" className="font-medium text-sm data-[state=active]:text-interior-gold data-[state=active]:bg-transparent">All</TabsTrigger>
              <TabsTrigger value="residential" className="font-medium text-sm data-[state=active]:text-interior-gold data-[state=active]:bg-transparent">Residential</TabsTrigger>
              <TabsTrigger value="office" className="font-medium text-sm data-[state=active]:text-interior-gold data-[state=active]:bg-transparent">Office</TabsTrigger>
              <TabsTrigger value="architecture" className="font-medium text-sm data-[state=active]:text-interior-gold data-[state=active]:bg-transparent">Architecture</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(projectsData).map(([category, projects]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project: Project) => (
                  <Link to={`/project/${project.id}`} key={project.id} className="no-underline">
                    <Card className="bg-transparent border border-interior-gold/20 overflow-hidden hover:border-interior-gold transition-colors group cursor-pointer">
                      <AspectRatio ratio={3/2}>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
                        />
                      </AspectRatio>
                      <CardContent className="p-6">
                        <div className="text-sm text-interior-gold mb-2 font-medium">{project.category}</div>
                        <h3 className="font-serif text-xl text-white mb-2">{project.title}</h3>
                        <p className="text-interior-beige/70 text-sm line-clamp-2">{project.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <Link to="/projects" className="inline-block border border-interior-gold rounded-none text-interior-gold px-10 py-3 text-sm font-medium hover:bg-interior-gold/10 transition-colors uppercase tracking-wider">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
