import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
  };

  const programs = [
    {
      id: 1,
      title: "Профессиональная переподготовка",
      description: "Получите новую квалификацию и расширьте карьерные возможности",
      duration: "от 250 часов",
      format: "Онлайн и очно",
      icon: "GraduationCap"
    },
    {
      id: 2,
      title: "Повышение квалификации",
      description: "Усовершенствуйте свои навыки и знания в выбранной области",
      duration: "от 72 часов",
      format: "Гибкий график",
      icon: "TrendingUp"
    },
    {
      id: 3,
      title: "Корпоративное обучение",
      description: "Индивидуальные программы для развития вашей команды",
      duration: "По согласованию",
      format: "Выездные занятия",
      icon: "Users"
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="BookOpen" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">НАПО</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#programs" className="text-sm font-medium hover:text-primary transition-colors">Программы</a>
            <a href="#partnership" className="text-sm font-medium hover:text-primary transition-colors">Партнёрство</a>
            <a href="#apply" className="text-sm font-medium hover:text-primary transition-colors">Запись</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm">Связаться</Button>
        </div>
      </nav>

      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-secondary via-background to-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl leading-tight uppercase">
                  Национальная академия<br />
                  профессионального образования<br />
                  Ольги Ли
                </h1>
                <h2 className="text-xl md:text-2xl text-primary uppercase">
                  Как стать косметологом без медицинского образования
                </h2>
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-lg">
                  <p className="text-xs md:text-sm text-foreground">
                    Образовательная лицензия №ЛО35-01298-77/00554989 от 22.06.22
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-base md:text-lg pt-4">
                <p className="font-light">
                  НА СВЯЗИ Я, ОЛЬГА ЛИ, ОСНОВАТЕЛЬ И РЕКТОР НАЦИОНАЛЬНОЙ АКАДЕМИИ ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ (НАПО)
                </p>
                <p className="text-primary">
                  Я РАДА ПРИВЕТСТВОВАТЬ ВАС НА САЙТЕ НАПО
                </p>
                <p>
                  С НАПО ВЫ СТАНЕТЕ МАСТЕРОМ В ЗАКОНЕ И СПЕЦИАЛИСТОМ В САМОМ ВОСТРЕБОВАННОМ НАПРАВЛЕНИИ БЬЮТИ СФЕРЫ — КОСМЕТОЛОГИИ (И НЕ ТОЛЬКО)
                </p>
                <p>
                  В НАПО СОЗДАН СОВРЕМЕННЫЙ ОБРАЗОВАТЕЛЬНЫЙ ЦЕНТР, ГДЕ АБСОЛЮТНО ИЗ ЛЮБОЙ ТОЧКИ МОЖНО ПОЛУЧИТЬ КАЧЕСТВЕННЫЕ И АКТУАЛЬНЫЕ ЗНАНИЯ И ВОСТРЕБОВАННУЮ ПРОФЕССИЮ В КРАСИВОМ БИЗНЕСЕ
                </p>
                <p>
                  НАПО СПЕЦИАЛИЗИРУЕТСЯ НА ДПО И ПО В БЬЮТИ СФЕРЕ И ОБУЧЕНИИ СПЕЦИАЛИСТОВ НА ПРЕПОДАВАТЕЛЕЙ ДПО И ПО
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="text-base px-8" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться на обучение
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8" onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}>
                  Наши программы
                </Button>
              </div>
            </div>

            <div className="animate-slide-up lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/e97a4418-ecb4-4876-941d-008a483eeb9f/files/e39aad56-3394-420d-b931-7a01f02ae89f.jpg" 
                  alt="Ольга Ли - основатель и ректор НАПО"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Программы обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите программу, которая соответствует вашим целям и уровню подготовки
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={program.id} className="hover:shadow-lg transition-all duration-300 animate-slide-up border-2 hover:border-primary/50" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={program.icon as any} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" className="h-4 w-4 text-muted-foreground" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="MapPin" className="h-4 w-4 text-muted-foreground" />
                      <span>{program.format}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" variant="outline">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="partnership" className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl text-primary mb-4 uppercase tracking-wide">Партнерство с НАПО</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Лучшие преподаватели бьюти сферы уже сотрудничают с НАПО
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
              У вас есть возможность присоединиться и преподавать легально, выдавая документы установленного образца вашим ученикам, 
              а это означает что вы будете на шаг впереди своих конкурентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 animate-slide-up border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="mb-6">
                <Icon name="FileCheck" className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl text-primary mb-2">Дипломы о профессиональной переподготовке</h3>
              </div>
              <p className="text-sm leading-relaxed">Документы с занесением в ФИС ФРДО</p>
            </Card>

            <Card className="text-center p-8 animate-slide-up border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl" style={{ animationDelay: '100ms' }}>
              <div className="mb-6">
                <Icon name="Award" className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl text-primary mb-2">Свидетельства о профессиональном обучении</h3>
              </div>
              <p className="text-sm leading-relaxed">Документы с занесением в ФИС ФРДО</p>
            </Card>

            <Card className="text-center p-8 animate-slide-up border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl" style={{ animationDelay: '200ms' }}>
              <div className="mb-6">
                <Icon name="BadgeCheck" className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl text-primary mb-2">Удостоверения о повышении квалификации</h3>
              </div>
              <p className="text-sm leading-relaxed">Документы с занесением в ФИС ФРДО</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center animate-slide-up bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 hover:shadow-2xl transition-all" style={{ animationDelay: '300ms' }}>
              <Icon name="Wallet" className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-5xl md:text-6xl text-primary mb-4 font-light">15 000 ₽</div>
              <p className="text-base leading-relaxed uppercase tracking-wide">
                Стоимость первоначального взноса при оплате курса по внутренней рассрочке НАПО
              </p>
            </Card>

            <Card className="p-8 text-center animate-slide-up bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 hover:shadow-2xl transition-all" style={{ animationDelay: '400ms' }}>
              <Icon name="Briefcase" className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl text-primary mb-4 uppercase">Трудоустройство</h3>
              <p className="text-base leading-relaxed">
                НАПО помогает с трудоустройством своих выпускников, поскольку сотрудничает с салонами красоты и владельцами красивого бизнеса
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="apply" className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container max-w-2xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Записаться на обучение</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и мы свяжемся с вами для уточнения деталей
            </p>
          </div>
          <Card className="animate-slide-up shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ivan@example.com" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+7 (900) 123-45-67" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="program">Программа обучения *</Label>
                  <Select value={formData.program} onValueChange={(value) => setFormData({...formData, program: value})} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите программу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retraining">Профессиональная переподготовка</SelectItem>
                      <SelectItem value="advanced">Повышение квалификации</SelectItem>
                      <SelectItem value="corporate">Корпоративное обучение</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о ваших целях и пожеланиях..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all animate-slide-up">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-1">Пн-Пт, 9:00-18:00</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@napo.ru</p>
                <p className="text-sm text-muted-foreground mt-1">Ответим в течение дня</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                <p className="text-sm text-muted-foreground mt-1">Офис 301</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="BookOpen" className="h-6 w-6 text-primary" />
              <span className="font-bold">НАПО</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2024 Национальная академия профессионального образования. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}