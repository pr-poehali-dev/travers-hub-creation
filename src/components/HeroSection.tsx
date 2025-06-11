import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Траверсы для кранов
            <span className="block text-3xl text-blue-400 mt-2">
              Профессиональное изготовление
            </span>
          </h1>

          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="MessageSquare" size={20} />
              Заказать расчет
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              <Icon name="Phone" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
