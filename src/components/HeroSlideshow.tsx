
import { useState, useEffect } from "react";

const images = [
  "/lovable-uploads/0a163206-d09d-4111-936d-cd67aec3aba2.png",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1780&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop",
];

const HeroSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ 
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-interior-navy/50 bg-gradient-to-b from-black/20 to-black/70"></div>
    </div>
  );
};

export default HeroSlideshow;
