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
      description: "Профессиональная команда специалистов крановой отрасли",
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
            <p className="text-lg text-gray-300 mb-8">
              Мы специализируемся на производстве качественных траверсов для
              крановой техники. Изготовление траверсов осуществляется от 2 до 8
              дней в зависимости от сложности заказа.
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
                      ООО ПРОМСТАЛЬ АРСЕНАЛ
                      <br />
                      Московская область, Сергиево-Посадский городской округ
                      <br />
                      рабочий посёлок Скоропусковский
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
                    <p className="text-gray-300">+7 (967) 209-52-41</p>
                    <p className="text-gray-300">+7 (909) 966-22-44</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Icon
                    name="Mail"
                    size={20}
                    className="text-blue-400 flex-shrink-0"
                  />
                  <p className="text-gray-300">delattraversa@mail.ru</p>
                </div>

                <div className="flex items-center gap-3">
                  <Icon
                    name="Clock"
                    size={20}
                    className="text-blue-400 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-300">Круглосуточно 24/7</p>
                    <p className="text-gray-300">Без выходных</p>
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
