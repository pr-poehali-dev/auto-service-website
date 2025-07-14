import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Автосервис японских автомобилей
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-fade-in">
              Профессиональный ремонт и обслуживание. Оригинальные запчасти из Японии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Записаться на ремонт
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Посмотреть услуги
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг для вашего японского автомобиля
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Диагностика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Компьютерная диагностика всех систем автомобиля
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Ремонт двигателя</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Капитальный и текущий ремонт двигателей
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Техобслуживание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Регулярное ТО по регламенту производителя
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Work Types Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Виды работ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Специализируемся на японских автомобилях всех марок
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Zap", title: "Электрика", desc: "Диагностика и ремонт электрооборудования" },
              { icon: "Gauge", title: "Подвеска", desc: "Ремонт и замена элементов подвески" },
              { icon: "Cog", title: "Трансмиссия", desc: "Обслуживание АКПП и МКПП" },
              { icon: "Thermometer", title: "Кондиционер", desc: "Заправка и ремонт системы кондиционирования" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon name={item.icon} size={36} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Japanese Parts Section */}
      <div className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Японские запчасти
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Работаем только с оригинальными запчастями от японских производителей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-red-600" />
                </div>
                <CardTitle>Оригинальные запчасти</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Гарантия качества от производителя
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-green-600" />
                </div>
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Доставка запчастей в течение 1-3 дней
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={32} className="text-yellow-600" />
                </div>
                <CardTitle>Лучшие цены</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Конкурентные цены на все запчасти
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              О нас
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Более 15 лет опыта в обслуживании японских автомобилей
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">Довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                <p className="text-gray-600">Лет опыта</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-600">Гарантия качества</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl opacity-90">
              Запишитесь на обслуживание или получите консультацию
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="opacity-90">+7 (495) 123-45-67</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="opacity-90">г. Москва, ул. Автомобильная, 10</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Время работы</h3>
              <p className="opacity-90">Пн-Сб: 9:00 - 19:00</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Записаться на ремонт
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;