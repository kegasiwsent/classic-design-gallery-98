
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/data/kitchenData";

const KitchenServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Our Complete Interior Services
          </h2>
          <div className="w-20 h-1 bg-interior-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive solutions for every aspect of your interior needs
          </p>
        </div>

        <Tabs defaultValue="kitchen" className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <TabsList className="bg-white border border-gray-200 p-1 flex flex-nowrap">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id} 
                  className="px-4 py-2 whitespace-nowrap"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className={`grid grid-cols-1 ${category.images.length > 0 ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
                <div className="space-y-6">
                  <h3 className="font-serif text-3xl font-bold">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                  
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-interior-gold rounded-full mr-3"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={() => {
                        const element = document.getElementById('contact-form');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-interior-gold hover:bg-interior-gold/90 text-white rounded-none px-8 py-2"
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
                
                {category.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.images.map((image, i) => (
                      <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                        <img 
                          src={image} 
                          alt={`${category.title} example ${i+1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default KitchenServices;
