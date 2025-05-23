
import { useState, useEffect } from "react";

const images = [
  "/lovable-uploads/a4671b8b-21e9-4380-9b28-e236150e0063.png",
  "/lovable-uploads/12767243-cc6a-4e8d-aa2e-5e1d902a7a8a.png",
  "/lovable-uploads/63508926-8967-4a93-a988-ff2600f2b10a.png",
  "/lovable-uploads/f23c5231-b8c7-4abb-b877-a3a9b256cf29.png",
  "/lovable-uploads/5e93660d-9259-4eab-b5ae-50beb2922a8f.png",
  "/lovable-uploads/895ac89c-c005-49ef-b28a-f4510f55e09f.png",
];

const HeroSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  // Preload first image immediately
  useEffect(() => {
    const img = new Image();
    img.src = images[0];
    img.onload = () => {
      setLoadedImages([images[0]]);
    };
  }, []);

  // Preload other images progressively
  useEffect(() => {
    const preloadImages = async () => {
      for (let i = 1; i < images.length; i++) {
        await new Promise<void>((resolve) => {
          const img = new Image();
          img.src = images[i];
          img.onload = () => {
            setLoadedImages(prev => [...prev, images[i]]);
            resolve();
          };
        });
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const nextIndex = (prevImage + 1) % images.length;
        // Only advance to next image if it's already loaded
        return loadedImages.includes(images[nextIndex]) ? nextIndex : prevImage;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [loadedImages]);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ 
            backgroundImage: loadedImages.includes(image) ? `url('${image}')` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden={index !== currentImage}
        />
      ))}
      <div className="absolute inset-0 bg-interior-navy/50 bg-gradient-to-b from-black/20 to-black/70"></div>
    </div>
  );
};

export default HeroSlideshow;
