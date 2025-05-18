import { useParams, Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Image } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { ongoingProjectsData } from "@/components/OngoingProjects";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const OngoingProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Find the project with the matching ID
  const project = ongoingProjectsData.find(project => project.id === projectId);
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="font-serif text-2xl mb-6">Project not found</h2>
        <Link to="/projects">
          <Button variant="outline">
            <ArrowLeft className="mr-2" size={16} />
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  const handleRequestProject = () => {
    // Create WhatsApp message with project details
    const message = `Hello, I'm interested in a project similar to "${project.name}" (Ongoing Project)!\n\nProject Type: ${project.type}\nLocation: ${project.location}\n\nI would like to discuss how we can create something similar for my space.`;
    
    // Redirect to WhatsApp with the message
    const whatsappUrl = `https://wa.me/919377766717?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Combine main image with additional images
  const allImages = [project.image, ...project.additionalImages];

  return (
    <div className="bg-interior-charcoal min-h-screen pb-20">
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl md:text-5xl text-white font-bold mb-4">
              {project.name}
            </h1>
            <p className="text-interior-gold text-xl">{project.type}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Link to="/projects" className="inline-flex mb-8">
          <Button variant="outline" className="border-interior-gold text-interior-gold hover:bg-interior-gold/10">
            <ArrowLeft className="mr-2" size={16} />
            Back to Projects
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-white mb-6">Project Overview</h2>
            <p className="text-interior-beige/80 mb-8 leading-relaxed">{project.description}</p>
            
            <h2 className="font-serif text-2xl text-white mb-6 mt-12">Current Progress</h2>
            <div className="bg-interior-navy/30 p-6 rounded-md mb-12">
              <div className="flex justify-between items-center mb-2">
                <span className="text-interior-beige/80">Overall Completion</span>
                <span className="text-interior-gold font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-3 mb-6" />
              
              <div className="grid grid-cols-2 gap-6 mt-4 text-sm">
                <div>
                  <p className="text-interior-beige/60 mb-1">Started</p>
                  <p className="text-white">{project.startDate}</p>
                </div>
                <div>
                  <p className="text-interior-beige/60 mb-1">Estimated Completion</p>
                  <p className="text-white">{project.estimatedCompletion}</p>
                </div>
              </div>
            </div>
            
            <h2 className="font-serif text-2xl text-white mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative group cursor-pointer overflow-hidden rounded-md"
                  onClick={() => setSelectedImage(image)}
                >
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
                <dt className="text-interior-gold text-sm">Project Name</dt>
                <dd className="text-white">{project.name}</dd>
              </div>
              <div>
                <dt className="text-interior-gold text-sm">Location</dt>
                <dd className="text-white">{project.location}</dd>
              </div>
              <div>
                <dt className="text-interior-gold text-sm">Type</dt>
                <dd className="text-white">{project.type}</dd>
              </div>
              <div>
                <dt className="text-interior-gold text-sm">Current Phase</dt>
                <dd className="text-white">
                  {project.progress < 25 ? "Initial Construction" : 
                   project.progress < 50 ? "Structural Work" :
                   project.progress < 75 ? "Interior Work" : "Finishing"}
                </dd>
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-black border-gray-800">
          <div className="relative w-full">
            <img
              src={selectedImage || ''}
              alt="Enlarged view"
              className="w-full h-auto object-contain max-h-[80vh]"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OngoingProjectDetail;
