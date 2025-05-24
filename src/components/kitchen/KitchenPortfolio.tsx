
import { kitchenDesigns } from "@/data/kitchenData";

const KitchenPortfolio = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Our Kitchen Design Portfolio
          </h2>
          <div className="w-20 h-1 bg-interior-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our range of beautiful kitchen designs tailored for modern homes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kitchenDesigns.map((design, index) => (
            <div key={index} className="group overflow-hidden bg-white shadow-lg rounded-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={design.image} 
                  alt={design.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{design.title}</h3>
                <p className="text-gray-600 mb-4">{design.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenPortfolio;
