import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import CustomOrderForm from "@/components/CustomOrderForm";
import CompanyInfo from "@/components/CompanyInfo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductShowcase />
      <CustomOrderForm />
      <CompanyInfo />
    </div>
  );
};

export default Index;
