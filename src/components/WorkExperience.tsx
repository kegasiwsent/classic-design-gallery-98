

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4">Our Experience</h2>
          <p className="section-subtitle">Professional journey and milestones in Interior Designing</p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 md:gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <div className="text-center p-8 bg-gradient-to-br from-blue-light/10 to-blue-medium/20 rounded-xl shadow-soft">
              <div className="mb-6">
                <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-blue-dark">
                  <CountUpAnimation targetValue={16} />
                </span>
                <span className="font-serif text-4xl md:text-5xl text-blue-medium">+</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-gray-dark mb-4">Years of Experience</h3>
              <p className="text-gray-medium">From 2009 to 2025, The Philosophical Study Of Beauty And Art</p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-interior-navy/5 p-6 rounded-lg text-center">
                <div className="font-bold text-3xl md:text-4xl text-blue-dark mb-2">
                  <CountUpAnimation targetValue={270} />+
                </div>
                <p className="text-gray-medium">Projects Completed</p>
              </div>
              <div className="bg-interior-navy/5 p-6 rounded-lg text-center">
                <div className="font-bold text-3xl md:text-4xl text-blue-dark mb-2">
                  <CountUpAnimation targetValue={235} />+
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

