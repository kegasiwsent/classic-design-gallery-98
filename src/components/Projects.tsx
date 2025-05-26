
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
interface Project {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
}
const Projects = () => {
  const projectsData = {
    all: [{
      id: "contemporary-comfort",
      image: "/lovable-uploads/f7eb8f22-a7f4-4f2c-ac7a-92f8e9bfa0a7.png",
      category: "Residential Interior",
      title: "RESIDENTIAL PROJECT",
      description: "A modern approach to residential interior design featuring elegant spaces with refined finishes in Ahmedabad."
    }, {
      id: "elegant-lighting",
      image: "/lovable-uploads/f99c3da1-0d31-4847-bf6e-9dceb62e04cf.png",
      category: "Residential Interior",
      title: "RESIDENTIAL PROJECT",
      description: "Contemporary home interior design in Ahmedabad featuring stylish spaces with detailed woodwork and elegant lighting solutions."
    }, {
      id: "modern-functionality",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      category: "Kitchen Designs",
      title: "Modern Functionality",
      description: "Efficient kitchen layouts combining style with practical functionality in Ahmedabad."
    }, {
      id: "space-optimization",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80",
      category: "Wardrobe Designs",
      title: "Space Optimization",
      description: "Maximizing storage with thoughtfully designed wardrobe solutions in Ahmedabad."
    }, {
      id: "logic-factory",
      image: "/lovable-uploads/cdfd3545-f45d-4f9a-9e6a-3844122e5cb2.png",
      category: "Office",
      title: "OFFICE SPACE",
      description: "Modern office interior design featuring innovative branding elements and functional workspace solutions in Ahmedabad."
    }, {
      id: "sk-mishra",
      image: "/lovable-uploads/e59cef9a-5949-44aa-ba5b-7778c8fc62d2.png",
      category: "Architecture",
      title: "ARCHITECTURE PROJECT",
      description: "Contemporary architectural design featuring elegant modern aesthetics with functional living spaces in Ahmedabad."
    }],
    residential: [{
      id: "contemporary-comfort",
      image: "/lovable-uploads/f7eb8f22-a7f4-4f2c-ac7a-92f8e9bfa0a7.png",
      category: "Residential Interior",
      title: "RESIDENTIAL PROJECT",
      description: "A modern approach to residential interior design featuring elegant spaces with refined finishes in Ahmedabad."
    }, {
      id: "elegant-lighting",
      image: "/lovable-uploads/f99c3da1-0d31-4847-bf6e-9dceb62e04cf.png",
      category: "Residential Interior",
      title: "RESIDENTIAL PROJECT",
      description: "Contemporary home interior design in Ahmedabad featuring stylish spaces with detailed woodwork and elegant lighting solutions."
    }, {
      id: "modern-functionality",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      category: "Kitchen Designs",
      title: "Modern Functionality",
      description: "Efficient kitchen layouts combining style with practical functionality in Ahmedabad."
    }],
    office: [{
      id: "productive-environment",
      image: "/lovable-uploads/b30960a1-e90c-44f3-9a65-4d27d8d39085.png",
      category: "Office Space",
      title: "OFFICE SPACE",
      description: "Modern corporate office design with innovative layouts and thoughtful branding elements in Ahmedabad."
    }, {
      id: "logic-factory",
      image: "/lovable-uploads/cdfd3545-f45d-4f9a-9e6a-3844122e5cb2.png",
      category: "Office",
      title: "OFFICE SPACE",
      description: "Modern office interior design featuring innovative branding elements and functional workspace solutions in Ahmedabad."
    }],
    architecture: [{
      id: "sk-mishra",
      image: "/lovable-uploads/e59cef9a-5949-44aa-ba5b-7778c8fc62d2.png",
      category: "Architecture",
      title: "ARCHITECTURE PROJECT",
      description: "Contemporary architectural design featuring elegant modern aesthetics with functional living spaces in Ahmedabad."
    }]
  };
  return <section className="py-24 bg-interior-charcoal text-white" id="projects">
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
          
          {Object.entries(projectsData).map(([category, projects]) => <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project: Project) => <Link to={`/project/${project.id}`} key={project.id} className="no-underline">
                    <Card className="bg-transparent border border-interior-gold/20 overflow-hidden hover:border-interior-gold transition-colors group cursor-pointer">
                      <AspectRatio ratio={3 / 2}>
                        <img src={project.image} alt={project.title} loading="lazy" width="600" height="400" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                      </AspectRatio>
                      <CardContent className="p-6">
                        <div className="text-sm text-interior-gold mb-2 font-medium">{project.category}</div>
                        <h3 className="font-serif text-white mb-2 font-normal text-2xl">{project.title}</h3>
                        <p className="text-interior-beige/70 text-sm line-clamp-2">{project.description}</p>
                      </CardContent>
                    </Card>
                  </Link>)}
              </div>
            </TabsContent>)}
        </Tabs>

        <div className="mt-16 text-center">
          <Link to="/projects" className="inline-block border border-interior-gold rounded-none text-interior-gold px-10 py-3 text-sm font-medium hover:bg-interior-gold/10 transition-colors uppercase tracking-wider">
            View All Projects
          </Link>
        </div>
      </div>
    </section>;
};
export default Projects;
