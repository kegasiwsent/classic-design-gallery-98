
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PortfolioItemProps {
  image: string;
  category: string;
  title: string;
}

const PortfolioItem = ({ image, category, title }: PortfolioItemProps) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="aspect-[3/2] w-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end">
        <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-sm text-interior-gold mb-2 font-medium">{category}</div>
          <h3 className="font-serif text-xl text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const PortfolioGallery = () => {
  const portfolioItems = {
    all: [
      { image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80", category: "Master Bedroom", title: "Contemporary Comfort" },
      { image: "https://images.unsplash.com/photo-1616137148650-4aa7b11e9518?auto=format&fit=crop&w=600&q=80", category: "False Ceiling", title: "Elegant Lighting" },
      { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80", category: "Kitchen Designs", title: "Modern Functionality" },
      { image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80", category: "Wardrobe Designs", title: "Space Optimization" },
      { image: "https://images.unsplash.com/photo-1603512500383-e0d26e33d7fc?auto=format&fit=crop&w=600&q=80", category: "Dining Room", title: "Family Gatherings" },
      { image: "https://images.unsplash.com/photo-1600607687644-c7f34b5f4f1b?auto=format&fit=crop&w=600&q=80", category: "Living Room", title: "Urban Retreat" },
    ],
    residential: [
      { image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80", category: "Master Bedroom", title: "Contemporary Comfort" },
      { image: "https://images.unsplash.com/photo-1616137148650-4aa7b11e9518?auto=format&fit=crop&w=600&q=80", category: "False Ceiling", title: "Elegant Lighting" },
      { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80", category: "Kitchen Designs", title: "Modern Functionality" },
    ],
    commercial: [
      { image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80", category: "Office Space", title: "Productive Environment" },
      { image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=600&q=80", category: "Reception Area", title: "First Impressions" },
    ],
    hospitality: [
      { image: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?auto=format&fit=crop&w=600&q=80", category: "Hotel Suite", title: "Luxury Comfort" },
      { image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80", category: "Restaurant Design", title: "Dining Experience" },
    ],
  };

  return (
    <section className="py-24 bg-interior-charcoal text-white" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
            Inspiration for home interior designs
          </h2>
          <div className="w-20 h-1 bg-interior-gold mx-auto mb-6"></div>
          <p className="text-interior-beige/80 max-w-3xl mx-auto">
            Give your home a new look with these interior design ideas curated for you
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-interior-charcoal/50 border border-interior-gold/20">
              <TabsTrigger value="all" className="font-medium text-sm data-[state=active]:text-interior-gold data-[state=active]:bg-transparent">All</TabsTrigger>
              <TabsTrigger value="residential" className="font-medium text-sm data-[state=active]:text-interior-gold data-[state=active]:bg-transparent">Residential</TabsTrigger>
              <TabsTrigger value="commercial" className="font-medium text-sm data-[state=active]:text-interior-gold data-[state=active]:bg-transparent">Commercial</TabsTrigger>
              <TabsTrigger value="hospitality" className="font-medium text-sm data-[state=active]:text-interior-gold data-[state=active]:bg-transparent">Hospitality</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.all.map((item, index) => (
                <PortfolioItem 
                  key={index} 
                  image={item.image} 
                  category={item.category} 
                  title={item.title} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="residential" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.residential.map((item, index) => (
                <PortfolioItem 
                  key={index} 
                  image={item.image} 
                  category={item.category} 
                  title={item.title} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="commercial" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.commercial.map((item, index) => (
                <PortfolioItem 
                  key={index} 
                  image={item.image} 
                  category={item.category} 
                  title={item.title} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="hospitality" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.hospitality.map((item, index) => (
                <PortfolioItem 
                  key={index} 
                  image={item.image} 
                  category={item.category} 
                  title={item.title} 
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <button className="border border-interior-gold rounded-none text-interior-gold px-10 py-3 text-sm font-medium hover:bg-interior-gold/10 transition-colors uppercase tracking-wider">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
