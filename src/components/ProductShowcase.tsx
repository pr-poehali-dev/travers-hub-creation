import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ProductShowcase = () => {
  const products = [
    {
      title: "Траверса балочная",
      description: "Для подъема балок и длинномерных конструкций",
      capacity: "1-50 тонн",
      features: [
        "Регулируемая длина",
        "Поворотные захваты",
        "Безопасные замки",
      ],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    },
    {
      title: "Траверса для листового металла",
      description: "Специализированная для работы с листовым прокатом",
      capacity: "0.5-20 тонн",
      features: [
        "Вакуумные присоски",
        "Регулировка захвата",
        "Индикаторы нагрузки",
      ],
      image:
        "https://images.unsplash.com/photo-1565883388450-d3b2bb5c2b7b?w=400&h=300&fit=crop",
    },
    {
      title: "Траверса универсальная",
      description: "Для различных типов грузов и операций",
      capacity: "2-100 тонн",
      features: [
        "Модульная конструкция",
        "Быстрая настройка",
        "Высокая надежность",
      ],
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Типы траверсов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Производим различные виды траверсов под конкретные задачи и условия
            эксплуатации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  <Icon name="Weight" size={16} />
                  {product.capacity}
                </Badge>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-900">
                    Особенности:
                  </h4>
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
