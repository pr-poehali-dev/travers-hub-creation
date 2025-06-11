import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const CustomOrderForm = () => {
  const [formData, setFormData] = useState({
    traverseType: "",
    length: "",
    width: "",
    height: "",
    loadCapacity: "",
    material: "",
    quantity: "",
    additionalSpecs: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Заказать траверс
            </h2>
            <p className="text-xl text-gray-600">
              Заполните техническое задание, и мы рассчитаем стоимость и сроки
              изготовления
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Settings" size={24} />
                Техническое задание
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="traverseType">Тип траверса</Label>
                    <Select
                      value={formData.traverseType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, traverseType: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beam">Балочная</SelectItem>
                        <SelectItem value="sheet">
                          Для листового металла
                        </SelectItem>
                        <SelectItem value="universal">Универсальная</SelectItem>
                        <SelectItem value="custom">
                          Специальная конструкция
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loadCapacity">
                      Грузоподъемность (тонн)
                    </Label>
                    <Input
                      id="loadCapacity"
                      type="number"
                      placeholder="Например: 5"
                      value={formData.loadCapacity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          loadCapacity: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="length">Длина (мм)</Label>
                    <Input
                      id="length"
                      type="number"
                      placeholder="2000"
                      value={formData.length}
                      onChange={(e) =>
                        setFormData({ ...formData, length: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="width">Ширина (мм)</Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="500"
                      value={formData.width}
                      onChange={(e) =>
                        setFormData({ ...formData, width: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="height">Высота (мм)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="300"
                      value={formData.height}
                      onChange={(e) =>
                        setFormData({ ...formData, height: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="material">Материал</Label>
                    <Select
                      value={formData.material}
                      onValueChange={(value) =>
                        setFormData({ ...formData, material: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите материал" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="steel-st3">Сталь Ст3</SelectItem>
                        <SelectItem value="steel-09g2s">Сталь 09Г2С</SelectItem>
                        <SelectItem value="steel-40x">Сталь 40Х</SelectItem>
                        <SelectItem value="stainless">
                          Нержавеющая сталь
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Количество (шт)</Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="1"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalSpecs">
                    Дополнительные требования
                  </Label>
                  <Textarea
                    id="additionalSpecs"
                    placeholder="Укажите особые требования к конструкции, покрытию, сертификации и т.д."
                    value={formData.additionalSpecs}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalSpecs: e.target.value,
                      })
                    }
                    rows={4}
                  />
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Контактная информация
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Ваше имя</Label>
                      <Input
                        id="contactName"
                        placeholder="Иван Иванов"
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Телефон</Label>
                      <Input
                        id="contactPhone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.contactPhone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactPhone: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="ivan@company.ru"
                        value={formData.contactEmail}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactEmail: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Icon name="Send" size={20} />
                  Отправить заявку на расчет
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderForm;
