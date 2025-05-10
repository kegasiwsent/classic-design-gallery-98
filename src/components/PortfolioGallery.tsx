
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PortfolioItemProps {
  image: string;
  category: string;
  title: string;
}

const PortfolioItem = ({ image, category, title }: PortfolioItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-[3/2] w-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4">
        <div className="text-sm opacity-80 mb-1">{category}</div>
        <h3 className="font-serif text-lg">{title}</h3>
      </div>
    </div>
  );
};

const PortfolioGallery = () => {
  const portfolioItems = {
    all: [
      { image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80", category: "Master Bedroom", title: "Contemporary Comfort" },
      { image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80", category: "False Ceiling", title: "Elegant Lighting" },
      { image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80", category: "Kitchen Designs", title: "Modern Functionality" },
      { image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80", category: "Wardrobe Designs", title: "Space Optimization" },
      { image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80", category: "Dining Room", title: "Family Gatherings" },
      { image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80", category: "Living Room", title: "Urban Retreat" },
    ],
    residential: [
      { image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80", category: "Master Bedroom", title: "Contemporary Comfort" },
      { image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80", category: "False Ceiling", title: "Elegant Lighting" },
      { image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80", category: "Kitchen Designs", title: "Modern Functionality" },
    ],
    commercial: [
      { image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80", category: "Office Space", title: "Productive Environment" },
      { image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80", category: "Reception Area", title: "First Impressions" },
    ],
    hospitality: [
      { image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80", category: "Hotel Suite", title: "Luxury Comfort" },
      { image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80", category: "Restaurant Design", title: "Dining Experience" },
    ],
  };

  return (
    <section className="py-16" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Inspiration for home interior designs
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Give your home a new look with these interior design ideas curated for you
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-interior-beige/50">
              <TabsTrigger value="all" className="font-medium">All</TabsTrigger>
              <TabsTrigger value="residential" className="font-medium">Residential</TabsTrigger>
              <TabsTrigger value="commercial" className="font-medium">Commercial</TabsTrigger>
              <TabsTrigger value="hospitality" className="font-medium">Hospitality</TabsTrigger>
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

        <div className="mt-10 text-center">
          <button className="border border-interior-charcoal rounded-full text-interior-charcoal px-8 py-3 text-sm font-medium hover:bg-interior-charcoal hover:text-white transition-colors">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
