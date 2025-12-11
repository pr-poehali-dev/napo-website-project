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
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/Logo_Li_2-01.png" 
              alt="НАПО лого"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-heading font-bold">НАПО</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#programs" className="text-sm font-medium hover:text-primary transition-colors">Программы</a>
            <a href="#partnership" className="text-sm font-medium hover:text-primary transition-colors">Партнёрство</a>
            <a href="#teachers" className="text-sm font-medium hover:text-primary transition-colors">Преподаватели</a>
            <a href="#apply" className="text-sm font-medium hover:text-primary transition-colors">Запись</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm">Связаться</Button>
        </div>
      </nav>

      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-secondary via-background to-background">
        <div className="container">
          <div className="animate-fade-in space-y-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl leading-tight uppercase font-heading">
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

            <div className="grid lg:grid-cols-[400px_1fr] gap-8 items-center">
              <div className="animate-slide-up order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://cdn.poehali.dev/files/noroot.png" 
                    alt="Ольга Ли - основатель и ректор НАПО"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="space-y-4 text-base md:text-lg order-1 lg:order-2">
                <p className="font-light">
                  НА СВЯЗИ Я, ОЛЬГА ЛИ, ОСНОВАТЕЛЬ И РЕКТОР НАЦИОНАЛЬНОЙ АКАДЕМИИ ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ (НАПО)
                </p>
                <p className="text-primary font-medium">
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
        </div>
      </section>

      <section id="programs" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl text-primary mb-4 uppercase">Тарифы обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите нужный вам тариф и запишитесь на бесплатное ознакомительное занятие
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary/50 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-primary uppercase">Косметик-эстетист</CardTitle>
                <CardDescription className="text-base uppercase font-medium">Мастер в законе</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="space-y-4 flex-grow">
                  <div className="text-3xl text-primary">80 000 - 250 000 ₽</div>
                  <div className="text-sm text-muted-foreground">252 академических часа</div>
                </div>
                <Button className="w-full mt-4" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary/50 flex flex-col" style={{ animationDelay: '50ms' }}>
              <CardHeader>
                <CardTitle className="text-xl text-primary uppercase">Преподаватель ДПО и ПО</CardTitle>
                <CardDescription className="text-base uppercase font-medium">Как поднять свой статус и вырасти в доходе в бьюти сфере</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="space-y-4 flex-grow">
                  <div className="text-3xl text-primary">80 000 - 200 000 ₽</div>
                  <div className="text-sm text-muted-foreground">266 академических часов</div>
                </div>
                <Button className="w-full mt-4" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary/50 flex flex-col" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="text-xl text-primary uppercase">Мужской ваксинг</CardTitle>
                <CardDescription className="text-base uppercase font-medium">Как увеличить свой доход</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="space-y-4 flex-grow">
                  <div className="text-3xl text-primary">30 000 ₽</div>
                  <div className="text-sm text-muted-foreground">72 академических часа</div>
                </div>
                <Button className="w-full mt-4" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary/50 flex flex-col" style={{ animationDelay: '150ms' }}>
              <CardHeader>
                <CardTitle className="text-xl text-primary uppercase">Ваксинг</CardTitle>
                <CardDescription className="text-base uppercase font-medium">Как увеличить свой доход</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="text-3xl text-primary mb-4 h-12 flex items-center">30 000 ₽</div>
                  <div className="text-sm text-muted-foreground">72 академических часа</div>
                </div>
                <Button className="w-full mt-4" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary/50 flex flex-col" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="text-xl text-primary uppercase">Шугаринг</CardTitle>
                <CardDescription className="text-base uppercase font-medium">Как увеличить свой доход</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="text-3xl text-primary mb-4 h-12 flex items-center">30 000 ₽</div>
                  <div className="text-sm text-muted-foreground">72 академических часа</div>
                </div>
                <Button className="w-full mt-4" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary/50 flex flex-col" style={{ animationDelay: '250ms' }}>
              <CardHeader>
                <CardTitle className="text-xl text-primary uppercase">Классический массаж лица/тела</CardTitle>
                <CardDescription className="text-base uppercase font-medium">Стань профессиональным косметологом</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="text-3xl text-primary mb-4 h-12 flex items-center">от 30 000 ₽</div>
                  <div className="text-sm text-muted-foreground">от 16 академических часов</div>
                </div>
                <Button className="w-full mt-4" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary/50 md:col-span-2 lg:col-span-1 flex flex-col" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <CardTitle className="text-xl text-primary uppercase">Карбокси</CardTitle>
                <CardDescription className="text-base uppercase font-medium">Преображение. Будь в тренде</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="text-3xl text-primary mb-4 h-12 flex items-center">7 500 ₽</div>
                  <div className="text-sm text-muted-foreground uppercase">Как увеличить свой доход и сохранить лояльность клиента</div>
                </div>
                <Button className="w-full mt-4" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary/50 md:col-span-2 lg:col-span-1 flex flex-col" style={{ animationDelay: '350ms' }}>
              <CardHeader>
                <CardTitle className="text-xl text-primary uppercase">Профилактика вросших волос</CardTitle>
                <CardDescription className="text-base uppercase font-medium">Предупрежден значит вооружен</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="text-3xl text-primary mb-4 h-12 flex items-center">7 500 ₽</div>
                  <div className="text-sm text-muted-foreground uppercase">Помоги своему клиенту стать обладателем красивой и здоровой кожи</div>
                </div>
                <Button className="w-full mt-4" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться
                </Button>
              </CardContent>
            </Card>
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

      <section id="teachers" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl text-primary mb-6 uppercase tracking-wide">Наши преподаватели</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto font-medium">
              КАЖДЫЙ ПРЕПОДАВАТЕЛЬ ИМЕЕТ ПРЕПОДАВАТЕЛЬСКИЙ СТАЖ ОТ 5 ЛЕТ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary/50">
              <CardHeader className="text-center">
                <div className="mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden bg-muted">
                  <img 
                    src="https://cdn.poehali.dev/files/noroot.png" 
                    alt="Ольга Ли"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-primary uppercase">Ольга Ли</CardTitle>
                <CardDescription className="text-base font-medium">СТАЖ 6 ЛЕТ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>• ОСНОВАТЕЛЬ И РЕКТОР НАПО</p>
                  <p>• КОСМЕТИК-ЭСТЕТИСТ</p>
                  <p>• ПРИЗЕР ПРОФЕССИОНАЛЬНЫХ СОРЕВНОВАНИЙ</p>
                  <p>• СУДЬЯ ПРОФЕССИОНАЛЬНЫХ СОРЕВНОВАНИЙ</p>
                  <p>• СПИКЕР НАУЧНО-ПРАКТИЧЕСКИХ КОНФЕРЕНЦИЙ</p>
                  <p>• ПРЕПОДАВАТЕЛЬ КОСМЕТОЛОГИИ/ШУГАРИНГУ/ВАКСИНГУ</p>
                  <p>• АВТОР КУРСОВ ПРОФЕССИОНАЛЬНОЙ ПЕРЕПОДГОТОВКИ СПЕЦИАЛИСТ ПО ПРЕДОСТАВЛЕНИЮ БЫТОВЫХ КОСМЕТИЧЕСКИХ УСЛУГ, ПРЕПОДАВАТЕЛЬ ДПО И ПО, МАСТЕР ПРОИЗВОДСТВЕННОГО ОБУЧЕНИЯ, КУРСОВ ПОВЫШЕНИЯ КВАЛИФИКАЦИИ МУЖСКАЯ КОСМЕТОЛОГИЯ, СУДЬЯ ПРОФЕССИОНАЛЬНЫХ СОРЕВНОВАНИЙ, ШКОЛА КОМИССАРОВ, ШКОЛА ВОЛОНТЕРОВ</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary/50" style={{ animationDelay: '100ms' }}>
              <CardHeader className="text-center">
                <div className="mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden bg-muted">
                  <img 
                    src="https://cdn.poehali.dev/projects/e97a4418-ecb4-4876-941d-008a483eeb9f/files/0e04dbd5-7e0b-4324-b5a4-d1ba9c1dfc88.jpg" 
                    alt="Алексей Виноградов"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-primary uppercase">Алексей Виноградов</CardTitle>
                <CardDescription className="text-base font-medium">СТАЖ 6 ЛЕТ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>• ХИМИК-ТЕХНОЛОГ</p>
                  <p>• КОСМЕТИК-ЭСТЕТИСТ</p>
                  <p>• ПРИЗЕР ПРОФЕССИОНАЛЬНЫХ СОРЕВНОВАНИЙ</p>
                  <p>• СПИКЕР</p>
                  <p>• СУДЬЯ ПРОФЕССИОНАЛЬНЫХ СОРЕВНОВАНИЙ</p>
                  <p>• ПРЕПОДАВАТЕЛЬ МУЖСКОГО ШУГАРИНГА И КОСМЕТИЧЕСКОЙ ХИМИИ</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary/50" style={{ animationDelay: '200ms' }}>
              <CardHeader className="text-center">
                <div className="mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden bg-muted">
                  <img 
                    src="https://cdn.poehali.dev/projects/e97a4418-ecb4-4876-941d-008a483eeb9f/files/0e04dbd5-7e0b-4324-b5a4-d1ba9c1dfc88.jpg" 
                    alt="Армен Погосов"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-primary uppercase">Армен Погосов</CardTitle>
                <CardDescription className="text-base font-medium">СТАЖ 3 ЛЕТ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>• КОСМЕТИК-ЭСТЕТИСТ</p>
                  <p>• ПРИЗЕР ПРОФЕССИОНАЛЬНЫХ СОРЕВНОВАНИЙ</p>
                  <p>• СУДЬЯ ПРОФЕССИОНАЛЬНЫХ СОРЕВНОВАНИЙ</p>
                  <p>• СПИКЕР</p>
                  <p>• ПРЕПОДАВАТЕЛЬ ПО МАССАЖУ</p>
                </div>
              </CardContent>
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

      <section id="why-us" className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl text-primary mb-6 uppercase tracking-wide">Почему выбирают нас</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed uppercase">
              Цель НАПО - сделать ваш процесс обучения интересным и доступным
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 animate-slide-up border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="text-center">
                <Icon name="CreditCard" className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl text-primary mb-4 uppercase">Оплата обучения в рассрочку</h3>
                <p className="text-base leading-relaxed mb-4 uppercase">
                  Учитесь уже сейчас! А платите по частям.
                </p>
                <div className="text-4xl text-primary mb-2 font-light">от 1500 ₽</div>
                <p className="text-sm text-muted-foreground uppercase">Первоначальный взнос</p>
              </div>
            </Card>

            <Card className="p-8 animate-slide-up border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl" style={{ animationDelay: '100ms' }}>
              <div className="text-center">
                <Icon name="FileCheck" className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl text-primary mb-4 uppercase">Документы установленного образца</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="uppercase">✓ Диплом о профессиональной переподготовке</p>
                  <p className="uppercase">✓ Удостоверение о повышении квалификации</p>
                  <p className="uppercase">✓ Свидетельство о рабочей профессии</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 animate-slide-up border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl md:col-span-2 lg:col-span-1" style={{ animationDelay: '200ms' }}>
              <div className="text-center">
                <Icon name="Database" className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl text-primary mb-4 uppercase">ФИС ФРДО</h3>
                <div className="space-y-4 text-base leading-relaxed">
                  <p className="uppercase">
                    Документы об обучении в установленном порядке заносятся в федеральный реестр документов об образовании.
                  </p>
                  <p className="uppercase">
                    Полная стоимость обучения указывается в договоре и вы можете вернуть НДФЛ в размере 13%
                  </p>
                </div>
              </div>
            </Card>
          </div>
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
              <img 
                src="https://cdn.poehali.dev/files/Logo_Li_2-01.png" 
                alt="НАПО лого"
                className="h-8 w-auto object-contain"
              />
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