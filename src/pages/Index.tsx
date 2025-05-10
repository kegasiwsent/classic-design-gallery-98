
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCategories from "@/components/ServiceCategories";
import PortfolioGallery from "@/components/PortfolioGallery";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ServiceCategories />
        <PortfolioGallery />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
