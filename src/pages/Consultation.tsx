
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

const Consultation = () => {
  return (
    <>
      <Header />
      <main className="pt-40">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-16 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Book a Free Consultation
            </h1>
            <div className="w-20 h-1 bg-interior-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Let's discuss your interior design needs and bring your vision to life
            </p>
          </div>
        </div>
        <ConsultationForm />
      </main>
      <Footer />
    </>
  );
};

export default Consultation;
