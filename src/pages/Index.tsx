
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCategories from "@/components/ServiceCategories";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";
import QuotePopup from "@/components/QuotePopup";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main>
        <HeroSection />
        <ServiceCategories />
        <Projects />
        <WorkExperience />
        <ConsultationForm />
      </main>
      <Footer />
      <QuotePopup />
    </div>
  );
};

export default Index;
