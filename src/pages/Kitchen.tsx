
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KitchenHero from "@/components/kitchen/KitchenHero";
import KitchenPortfolio from "@/components/kitchen/KitchenPortfolio";
import KitchenServices from "@/components/kitchen/KitchenServices";
import KitchenContactForm from "@/components/kitchen/KitchenContactForm";
import KitchenCTA from "@/components/kitchen/KitchenCTA";

const KitchenDesign = () => {
  return (
    <>
      <Header />
      <main className="pt-24">
        <KitchenHero />
        <KitchenPortfolio />
        <KitchenServices />
        <KitchenContactForm />
        <KitchenCTA />
      </main>
      <Footer />
    </>
  );
};

export default KitchenDesign;
