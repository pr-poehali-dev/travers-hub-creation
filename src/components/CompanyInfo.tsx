import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CompanyInfo = () => {
  const advantages = [
    {
      icon: "Factory",
      title: "Собственное производство",
      description: "Полный цикл изготовления на современном оборудовании",
    },
    {
      icon: "Users",
      title: "Опытная команда",
      description: "Инженеры с 15+ летним опытом в крановом оборудовании",
    },
    {
      icon: "Award",
      title: "Сертификаты качества",
      description: "Все изделия соответствуют ГОСТ и имеют сертификаты",
    },
    {
      icon: "Truck",
      title: "Доставка по России",
      description: "Организуем доставку в любой регион страны",
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Специализируемся на производстве траверсов и грузозахватных
              приспособлений для промышленных предприятий. Работаем с 2010 года,
              выполнили более 500 проектов для заводов металлургии,
              машиностроения и строительства.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                    <Icon name={advantage.icon as any} size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{advantage.title}</h3>
                    <p className="text-sm text-gray-400">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Building"
                    size={20}
                    className="text-blue-400 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-300">
                      г. Москва, Промышленная зона "Северная"
                      <br />
                      ул. Заводская, 15
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Icon
                    name="Phone"
                    size={20}
                    className="text-blue-400 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                    <p className="text-gray-300">+7 (800) 555-01-23</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Icon
                    name="Mail"
                    size={20}
                    className="text-blue-400 flex-shrink-0"
                  />
                  <p className="text-gray-300">info@traverse-pro.ru</p>
                </div>

                <div className="flex items-center gap-3">
                  <Icon
                    name="Clock"
                    size={20}
                    className="text-blue-400 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-300">Пн-Пт: 8:00 - 18:00</p>
                    <p className="text-gray-300">Сб: 9:00 - 15:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 flex-1">
                <Icon name="MessageCircle" size={20} />
                Написать в WhatsApp
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 flex-1"
              >
                <Icon name="FileText" size={20} />
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
