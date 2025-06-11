import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import CustomOrderForm from "@/components/CustomOrderForm";
import CompanyInfo from "@/components/CompanyInfo";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-black/40 -z-10" />

      <HeroSection />
      <ProductShowcase />
      <CustomOrderForm />
      <CompanyInfo />
    </div>
  );
};

export default Index;
