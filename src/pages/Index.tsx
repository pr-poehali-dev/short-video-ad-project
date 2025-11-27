import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const cars = [
  {
    id: 1,
    name: 'Премиум Седан',
    category: 'Бизнес-класс',
    price: '3 500',
    image: 'https://cdn.poehali.dev/projects/0075037d-759e-4419-8ac5-84e02bad0f57/files/b361e75e-fef2-487c-b7c8-4038160d4a88.jpg',
    features: ['Кожа', 'Автомат', 'Климат']
  },
  {
    id: 2,
    name: 'Спортивный SUV',
    category: 'Внедорожник',
    price: '4 200',
    image: 'https://cdn.poehali.dev/projects/0075037d-759e-4419-8ac5-84e02bad0f57/files/99fbe84a-c8f1-4cbc-9be5-2d6719c2228f.jpg',
    features: ['4x4', 'Панорама', 'Premium']
  },
  {
    id: 3,
    name: 'Спорткар',
    category: 'Спорт',
    price: '6 500',
    image: 'https://cdn.poehali.dev/projects/0075037d-759e-4419-8ac5-84e02bad0f57/files/01d3aa64-7082-403b-a736-a632d1fef172.jpg',
    features: ['Турбо', 'Спорт+', 'Карбон']
  }
];

const pricingPlans = [
  {
    title: 'Эконом',
    price: '1 800',
    period: 'сутки',
    features: ['Базовая страховка', 'Пробег 200 км/сутки', 'Поддержка 24/7']
  },
  {
    title: 'Стандарт',
    price: '3 500',
    period: 'сутки',
    features: ['Полная страховка', 'Безлимитный пробег', 'VIP поддержка', 'Детское кресло']
  },
  {
    title: 'Премиум',
    price: '6 500',
    period: 'сутки',
    features: ['Все включено', 'Личный водитель', 'Доставка авто', 'Консьерж-сервис']
  }
];

export default function Index() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {currentSection === 0 && (
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
          <div className={`text-center z-10 px-4 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <h1 className="text-7xl md:text-9xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-pulse-glow">
              ДРАЙВ
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-muted-foreground animate-fade-in">
              Аренда автомобилей премиум-класса
            </p>
            <div className="mt-8 flex gap-4 justify-center animate-fade-in">
              <Icon name="Zap" size={32} className="text-secondary" />
              <Icon name="Award" size={32} className="text-primary" />
              <Icon name="Shield" size={32} className="text-secondary" />
            </div>
          </div>
        </section>
      )}

      {currentSection === 1 && (
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl w-full">
            <h2 className="text-5xl md:text-7xl font-black text-center mb-16 animate-fade-in">
              НАШ <span className="text-primary">АВТОПАРК</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cars.map((car, index) => (
                <Card 
                  key={car.id} 
                  className="bg-card border-2 border-primary/20 overflow-hidden hover:border-primary transition-all hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      {car.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {car.features.map((feature) => (
                        <Badge key={feature} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-4xl font-black text-primary">{car.price}</span>
                        <span className="text-muted-foreground ml-2">₽/сутки</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {currentSection === 2 && (
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl w-full">
            <h2 className="text-5xl md:text-7xl font-black text-center mb-16 animate-fade-in">
              НАШИ <span className="text-secondary">ТАРИФЫ</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={plan.title}
                  className={`p-8 ${index === 1 ? 'bg-primary text-primary-foreground scale-105 border-4 border-secondary' : 'bg-card'} animate-scale-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-3xl font-black mb-4">{plan.title}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="text-xl ml-2">₽/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={20} className={index === 1 ? 'text-secondary' : 'text-primary'} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${index === 1 ? 'bg-secondary hover:bg-secondary/90' : ''}`}
                    size="lg"
                  >
                    Забронировать
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {currentSection === 3 && (
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl animate-scale-in">
            <Icon name="Phone" size={80} className="mx-auto mb-8 text-secondary animate-pulse-glow" />
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              ГОТОВЫ К <span className="text-primary">ПОЕЗДКЕ?</span>
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12">
              Забронируйте автомобиль прямо сейчас
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-xl px-12 py-8 bg-primary hover:bg-primary/90">
                <Icon name="Phone" size={24} className="mr-2" />
                Позвонить
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Icon name="MessageCircle" size={24} className="mr-2" />
                Написать
              </Button>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={24} className="text-primary" />
                <span>Работаем 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-primary" />
                <span>По всему городу</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentSection === 4 && (
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center animate-fade-in">
            <div className="text-8xl md:text-9xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              ДРАЙВ
            </div>
            <p className="text-3xl md:text-4xl font-bold text-muted-foreground mb-8">
              Ваш путь начинается здесь
            </p>
            <div className="flex gap-6 justify-center text-muted-foreground">
              <Icon name="Instagram" size={40} className="hover:text-primary transition-colors cursor-pointer" />
              <Icon name="Facebook" size={40} className="hover:text-primary transition-colors cursor-pointer" />
              <Icon name="Twitter" size={40} className="hover:text-primary transition-colors cursor-pointer" />
            </div>
          </div>
        </section>
      )}

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSection === index 
                ? 'bg-primary w-8' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
