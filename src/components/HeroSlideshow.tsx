
import { useState, useEffect } from "react";

const images = [
  "/lovable-uploads/a4671b8b-21e9-4380-9b28-e236150e0063.png",
  "/lovable-uploads/12767243-cc6a-4e8d-aa2e-5e1d902a7a8a.png",
  "/lovable-uploads/63508926-8967-4a93-a988-ff2600f2b10a.png",
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
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-interior-navy/50 bg-gradient-to-b from-black/20 to-black/70"></div>
    </div>
  );
};

export default HeroSlideshow;
