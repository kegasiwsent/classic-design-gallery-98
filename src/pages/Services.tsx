
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCategories from "@/components/ServiceCategories";
import { MapPin } from "lucide-react";

const Services = () => {
  const studioAddress = "B123 Gopinath Industrial Hub Durganagar Near Punitnagar Railway Crossing Vatva Ahmedabad Gujarat India 380050";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(studioAddress)}`;

  return (
    <>
      <Header />
      <main className="pt-40">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-16 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <div className="w-20 h-1 bg-interior-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of interior design services
            </p>
          </div>
        </div>
        <ServiceCategories />
        
        {/* Studio Address Section */}
        <section className="py-16 bg-gray-lightest">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold mb-8 text-blue-navy">
                Studio Address
              </h2>
              <div className="max-w-2xl mx-auto">
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <MapPin className="text-blue-medium mt-1 flex-shrink-0 group-hover:text-blue-dark transition-colors" size={24} />
                  <div className="text-left">
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      B123 Gopinath Industrial Hub Durganagar<br />
                      Near Punitnagar Railway Crossing<br />
                      Vatva Ahmedabad Gujarat India<br />
                      Pincode: 380050
                    </p>
                    <p className="text-blue-medium text-sm mt-2 group-hover:text-blue-dark transition-colors">
                      Click to view on Google Maps
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
