
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  tags?: string[];
}

const TimelineItem = ({ year, title, description, tags = [] }: TimelineItemProps) => (
  <div className="relative pl-8 pb-12 border-l border-blue-light/30 last:border-0 last:pb-0">
    <div className="absolute left-[-8px] bg-blue-medium text-white p-1.5 rounded-full">
      <Briefcase size={16} />
    </div>
    <div className="mb-2">
      <span className="inline-block text-blue-medium font-semibold mb-2">{year}</span>
      <h3 className="text-xl font-serif text-gray-dark mb-2">{title}</h3>
      <p className="text-gray-medium mb-3">{description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-blue-light/10 text-blue-dark border-blue-light/20">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  </div>
);

const CountUpAnimation = ({ targetValue }: { targetValue: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let start = 0;
          const duration = 2000; // 2 seconds
          const startTime = performance.now();
          
          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCount = Math.floor(progress * targetValue);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetValue);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [targetValue]);
  
  return <span ref={countRef}>{count}</span>;
};

const WorkExperience = () => {
  const timelineData: TimelineItemProps[] = [
    {
      year: "2023 - 2025",
      title: "Senior 3D Visualization Specialist",
      description: "Led high-profile architectural visualization projects for international clients, implementing advanced rendering techniques and VR experiences.",
      tags: ["Architectural Visualization", "VR/AR", "Team Leadership"]
    },
    {
      year: "2019 - 2023",
      title: "3D Visualization Team Lead",
      description: "Managed a team of 3D artists, established visualization standards, and delivered complex interior and exterior rendering projects.",
      tags: ["Project Management", "Interior Visualization", "Client Relations"]
    },
    {
      year: "2015 - 2019",
      title: "3D Visualization Artist",
      description: "Created photorealistic interior and exterior renderings for residential and commercial projects, collaborating with architects and designers.",
      tags: ["3D Modeling", "Photorealistic Rendering", "Post-production"]
    },
    {
      year: "2009 - 2015",
      title: "Junior 3D Artist",
      description: "Started career in 3D visualization, working on architectural models, material creation, and basic rendering techniques.",
      tags: ["3D Modeling", "Texturing", "Lighting"]
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4">Our Experience</h2>
          <p className="section-subtitle">Professional journey and milestones in 3D visualization</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <Card className="border-t-4 border-t-blue-medium shadow-card hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-serif text-xl md:text-2xl mb-6 text-blue-dark">Professional Timeline</h3>
              <div className="ml-2">
                {timelineData.map((item, index) => (
                  <TimelineItem key={index} {...item} />
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="text-center p-8 bg-gradient-to-br from-blue-light/10 to-blue-medium/20 rounded-xl shadow-soft">
              <div className="mb-6">
                <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-blue-dark">
                  <CountUpAnimation targetValue={16} />
                </span>
                <span className="font-serif text-4xl md:text-5xl text-blue-medium">+</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-gray-dark mb-4">Years of Experience</h3>
              <p className="text-gray-medium">From 2009 to 2025, delivering excellence in 3D visualization for clients worldwide</p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-interior-navy/5 p-6 rounded-lg text-center">
                <div className="font-bold text-3xl md:text-4xl text-blue-dark mb-2">
                  <CountUpAnimation targetValue={500} />+
                </div>
                <p className="text-gray-medium">Projects Completed</p>
              </div>
              <div className="bg-interior-navy/5 p-6 rounded-lg text-center">
                <div className="font-bold text-3xl md:text-4xl text-blue-dark mb-2">
                  <CountUpAnimation targetValue={300} />+
                </div>
                <p className="text-gray-medium">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
