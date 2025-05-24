
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCategories from "@/components/ServiceCategories";

const Services = () => {
  return (
    <>
      <Header />
      <main className="pt-24">
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
      </main>
      <Footer />
    </>
  );
};

export default Services;
