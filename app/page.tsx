
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Star, Shield, MapPin, Clock, Calendar, Phone, Bot, MapPinned } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const LINKS = {
  bot: 'express://chat/Bot_MOEX_Camp_Connect',
  expressProgram: 'express://space/moex-camp-connect/program',
  expressRegister: 'express://space/moex-camp-connect/register',
  googleMap: 'https://www.google.com/maps?q=55.818510,37.616556',
  googleMapEmbed: 'https://www.google.com/maps?q=55.818510,37.616556&hl=ru&z=16&output=embed',
  yandexMap: 'https://yandex.ru/maps/?pt=37.616556,55.818510&z=17&l=map',
  appleMap: 'http://maps.apple.com/?ll=55.818510,37.616556&q=%D0%9E%D1%81%D1%82%D0%B0%D0%BD%D0%BA%D0%B8%D0%BD%D0%BE%202.0',
}

function GlassDecoration({ className }: { className?: string }) {
  return <div className={`pointer-events-none -z-10 absolute rounded-full bg-gradient-to-br from-red-500/25 via-gray-200/40 to-white/30 backdrop-blur-xl ${className}`} aria-hidden />
}

function HeroGlassIllustration() {
  return (
    <svg viewBox="0 0 1200 900" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="gGray" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <filter id="glass" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        </filter>
        <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur stdDeviation="6" result="glow" />
          <feComposite in="glow" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 0.2  0 0 0 0 0.2  0 0 0 0.6 0" />
          <feBlend mode="lighten" in2="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(140,120)">
        <rect x="0" y="0" rx="28" ry="28" width="520" height="340" fill="url(#gGray)" opacity="0.85" stroke="#e5e7eb" />
        <rect x="40" y="40" rx="24" ry="24" width="520" height="340" fill="#ffffff" opacity="0.7" stroke="#f3f4f6" filter="url(#innerGlow)" />
        <rect x="80" y="80" rx="20" ry="20" width="520" height="340" fill="#ffffff" opacity="0.6" stroke="#e5e7eb" />
      </g>
      <g transform="translate(720,140)">
        <rect x="0" y="0" width="20" height="620" fill="url(#gRed)" />
        <circle cx="10" cy="120" r="6" fill="#ef4444" />
        <circle cx="10" cy="420" r="6" fill="#ef4444" />
      </g>
      <g filter="url(#glass)">
        <circle cx="900" cy="620" r="110" fill="url(#gGray)" opacity="0.8" stroke="#e5e7eb" />
        <circle cx="980" cy="660" r="36" fill="#ffffff" opacity="0.6" />
        <circle cx="320" cy="640" r="68" fill="#ffffff" opacity="0.6" />
      </g>
      <g stroke="#e5e7eb">
        <path d="M120 780 H1080" strokeWidth="1" />
        <path d="M120 820 H1080" strokeWidth="1" />
      </g>
      <polyline points="140,500 300,460 420,520 560,480 760,540 980,500" fill="none" stroke="#ef4444" strokeWidth="3" />
    </svg>
  )
}

function GlassFeatureCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="border-gray-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <span className="inline-block w-10 h-[3px] rounded bg-red-600" />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-700 space-y-1">{children}</CardContent>
    </Card>
  )
}

function GlassStepCard({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <Card className="border-gray-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="text-red-600">{n}.</span> {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 text-sm">{children}</CardContent>
    </Card>
  )
}

export default function Page() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      <GlassDecoration className="top-[-10rem] left-[-10rem] w-[30rem] h-[30rem]" />
      <GlassDecoration className="top-[20rem] right-[-12rem] w-[25rem] h-[25rem]" />
      <GlassDecoration className="bottom-[-12rem] left-[20%] w-[20rem] h-[20rem]" />

      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-red-600" aria-hidden />
            <span className="font-semibold tracking-tight">MOEX Camp Connect</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-red-600" href="#info">Инфо</a>
            <a className="hover:text-red-600" href="#program">Программа</a>
            <a className="hover:text-red-600" href="#route">Маршрут & розыгрыш</a>
            <a className="hover:text-red-600" href="#ar">AR‑Connect</a>
            <a className="hover:text-red-600" href="#contacts">Контакты</a>
          </nav>
          <div className="flex gap-3">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <a href={LINKS.expressRegister} rel="noopener">Записаться</a>
            </Button>
            <Button asChild variant="outline" className="border-gray-300">
              <a href={LINKS.expressProgram} rel="noopener">Программа</a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-10%] top-[-20%] w-[520px] h-[520px] rounded-full bg-gradient-to-b from-red-50 to-white opacity-60 blur-2xl" />
          <div className="absolute left-[-8%] bottom-[-15%] w-[420px] h-[420px] rounded-full bg-gradient-to-b from-gray-50 to-white opacity-70 blur-2xl" />
        </div>
        <div className="max-w-6xl mx-auto px-5 pt-16 pb-14 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-semibold leading-tight">
              MOEX CAMP CONNECT
              <span className="block text-red-600 mt-2">БУДУЩЕЕ УЖЕ ЗДЕСЬ!</span>
            </motion.h1>
            <p className="mt-5 text-lg text-gray-600">Самое ожидаемое событие осени — день в полном коннекте: с технологиями, ценностями, командой и близкими.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 20 сентября</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> 11:00–18:00</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Останкино 2.0, Ак. Королёва 15к1</div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild><a href={LINKS.expressRegister} rel="noopener">Записаться</a></Button>
              <Button size="lg" variant="outline" className="border-gray-300" asChild><a href="#info">Орг. информация</a></Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> Вход по рабочему пропуску</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4" /> Отличный день гарантирован</div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl border border-gray-100 grid place-items-center overflow-hidden">
              <HeroGlassIllustration />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="info" className="py-12 border-y border-gray-100 relative">
        <GlassDecoration className="right-[-8%] top-[-4rem] w-[18rem] h-[18rem]" />
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">Дата и место</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li className="flex gap-2"><Calendar className="h-4 w-4 mt-0.5" /> 20 сентября</li>
              <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5" /> 11:00–18:00 (регистрация 11:00–17:00)</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Останкино 2.0 (Москва, СВАО), Ак. Королёва 15к1</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Координаты: 55.818510, 37.616556</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Как добраться</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>Ближайшее метро: ВДНХ, Владыкино, Бутырская, Фонвизинская</li>
              <li>МЦД‑3: станция Останкино</li>
              <li>Парковка: не предусмотрена</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Правила и допуск</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>Мероприятие для штатных сотрудников Группы</li>
              <li>Вход по рабочему пропуску</li>
              <li>Дресс‑код: удобная одежда и обувь для активного дня</li>
              <li>Нельзя проносить: продукты (кроме детского питания), воду, аэрозоли</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-5 mt-8 grid md:grid-cols-2 gap-6 items-start">
          <div className="w-full overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
            <iframe title="Карта — Останкино 2.0" src={LINKS.googleMapEmbed} width="100%" height="360" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2"><MapPinned className="h-5 w-5 text-red-600" /> Открыть в навигаторе</h4>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-red-600 hover:bg-red-700"><a href={LINKS.googleMap} target="_blank" rel="noopener">Google Maps</a></Button>
              <Button asChild variant="outline" className="border-gray-300"><a href={LINKS.yandexMap} target="_blank" rel="noopener">Яндекс.Карты</a></Button>
              <Button asChild variant="outline" className="border-gray-300"><a href={LINKS.appleMap} target="_blank" rel="noopener">Apple Maps</a></Button>
            </div>
            <p className="text-xs text-gray-500">Координаты: <code>55.818510, 37.616556</code></p>
          </div>
        </div>
      </section>

      <section id="program" className="py-16 relative">
        <GlassDecoration className="left-[-6%] top-[-2rem] w-[16rem] h-[16rem]" />
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold">Что вас ждёт</h2>
            <div className="hidden md:block w-48 h-16"><MiniGlassAccent /></div>
          </div>
          <p className="mt-3 text-gray-600 max-w-3xl">Спортивные турниры и активные зоны, творческие мастер‑классы, VR и кибер‑развлечения, роботы, интеллектуальные игры, чилл‑пространства, фотозоны, детские зоны и AR‑квест.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <GlassFeatureCard title="MOEX CONNECT">
                <div>12:00–17:00 — интерактивы (14–18+, 18+)</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Поэтический CONNECT (создание стихотворения с AI)</li>
                  <li>Парфюмерный CONNECT (создание своего аромата)*</li>
                  <li>Арт‑CONNECT (создание портрета роботом)</li>
                  <li>AR‑CONNECT — уникальный AR‑квест по территории фестиваля (6–14, 14–18, 18+)</li>
                </ul>
              </GlassFeatureCard>
              <GlassFeatureCard title="MOEX MASTER">
                <div>11:00–18:00 — мастер‑классы (6–14, 14–18, 18+)</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Кастомизация обвесов*</li>
                  <li>Роспись шоперов*</li>
                </ul>
              </GlassFeatureCard>
              <GlassFeatureCard title="MOEX GAMING">
                <div>11:00–18:00 — VR и кибер‑зона (6–13, 14–18, 18+)</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>FIFA</li><li>Gran Turismo</li><li>VR</li><li>Гонки на робошарах</li>
                </ul>
              </GlassFeatureCard>
            </div>
            <div className="space-y-6">
              <GlassFeatureCard title="MOEX NETWORK">
                <div>13:00–15:40 — AI‑воркшоп (6–14, 14–18, 18+)</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Промпт‑баттл*</li><li>AI‑стикер фабрика*</li><li>Робо‑арт и создание анимированных персонажей*</li>
                </ul>
                <div className="pt-2">16:00–17:00 — мастер‑класс по вокалу*; 17:00–18:00 — караоке (18+)</div>
              </GlassFeatureCard>
              <GlassFeatureCard title="MOEX SPORT">
                <div>11:30–13:00 — йога‑практика* (14–18, 18+)</div>
                <div>12:00–17:00 — спортивные турниры (18+)</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Волейбол*</li><li>Настольный теннис*</li><li>Хоккей на траве*</li><li>Шахматы*</li>
                </ul>
                <div className="pt-2">Активности для 14–18: аэро‑хоккей, баскетбольное кольцо</div>
              </GlassFeatureCard>
              <GlassFeatureCard title="MOEX KIDS">
                <div>11:00–18:00 — детские зоны</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Baby land (0–5)</li><li>Детский «Форт Боярд» (6–13)</li><li>Мастер‑класс по созданию роботов (6–13, 14–18)*</li>
                </ul>
              </GlassFeatureCard>
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-500">*Активности со звёздочкой требуют предварительной записи через бота.</div>
        </div>
      </section>

      <section className="py-12 bg-gray-50/50 border-y border-gray-100 relative">
        <GlassDecoration className="right-[-6%] bottom-[-2rem] w-[14rem] h-[14rem]" />
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Тайминг</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>11:00 — старт фестиваля</li>
              <li>11:00–17:00 — регистрация гостей (можно прибыть в течение дня)</li>
              <li>17:00–18:00 — награждение победителей и розыгрыши призов в CONNECTотроне</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Спортивные турниры</h3>
            <p className="text-sm text-gray-700">Победители и призёры каждого турнира получат призы во время церемонии награждения.</p>
          </div>
          <div id="register">
            <h3 className="font-semibold text-lg mb-2">Запись на активности</h3>
            <p className="text-sm text-gray-700">Через Bot_MOEX Camp Connect на платформе Express.</p>
            <div className="mt-3 flex gap-3">
              <Button className="bg-red-600 hover:bg-red-700" asChild><a href={LINKS.bot} rel="noopener">Открыть бота</a></Button>
              <Button variant="outline" className="border-gray-300" asChild><a href={LINKS.expressProgram} rel="noopener">Смотреть программу</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="route" className="py-16 relative">
        <GlassDecoration className="left-[-10%] top-[-3rem] w-[18rem] h-[18rem]" />
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold">Как пройти маршрут и участвовать в розыгрыше</h2>
            <div className="hidden md:block w-48 h-16"><MiniGlassAccent /></div>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[{n:'01',t:'Получите лотерейный билет',d:'При входе предъявите рабочий пропуск и возьмите уникальный билет.'},{n:'02',t:'Пройдите минимум 4 активности',d:'Соберите штампы в зоне: FIFA, Gran Turismo, VR, йога, художественный/парфюмерный/поэтический CONNECT, AI‑воркшоп, вокал, кастом‑обвесы, роспись шоперов, гонки на робошарах, AR‑квест.'},{n:'03',t:'Сдайте билет в CONNECTотрон',d:'Опустите билет у Главной сцены и участвуйте в розыгрыше призов.'}].map((s,i)=> (
"
"              <GlassStepCard key={i} n={s.n} title={s.t}>{s.d}</GlassStepCard>
"
"            ))}
"
"          </div>
"
"          <p className="mt-6 text-sm text-gray-700">Под занавес мероприятия разыграем три технологичных приза!</p>
"
"        </div>
"
"      </section>
"
"
"
"      <section id="ar" className="py-16 bg-gray-50/50 border-y border-gray-100 relative">
"
"        <GlassDecoration className="right-[-8%] top-[-2rem] w-[16rem] h-[16rem]" />
"
"        <div className="max-w-6xl mx-auto px-5">
"
"          <div className="flex items-end justify-between gap-6">
"
"            <h2 className="text-3xl font-semibold">AR‑CONNECT: правила игры</h2>
"
"            <div className="hidden md:block w-48 h-16"><MiniGlassAccent /></div>
"
"          </div>
"
"          <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
"
"            <li>Отыщи 10 QR‑кодов на площадке MOEX Camp Connect</li>
"
"            <li>Отсканируй каждый и запусти квест AR‑Connect</li>
"
"            <li>Найди и приручи 10 мопсов</li>
"
"            <li>После прохождения подойди к администратору в инфо‑шатёр для начисления корпоративной валюты mops’ов*</li>
"
"          </ul>
"
"          <p className="mt-4 text-xs text-gray-500">*Начисление mops’ов производится по итогам прохождения игры.</p>
"
"        </div>
"
"      </section>
"
"
"
"      <section id="bot" className="py-16 relative">
"
"        <GlassDecoration className="left-[-8%] bottom-[-2rem] w-[14rem] h-[14rem]" />
"
"        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-8 items-center">
"
"          <div>
"
"            <h2 className="text-3xl font-semibold">Bot_MOEX Camp Connect</h2>
"
"            <p className="mt-3 text-gray-700">Твой гид по самому технологичному мероприятию осени: описание активностей, время проведения, запись на командные турниры или индивидуальный отдых. Если появятся вопросы — поддержка в боте.</p>
"
"            <div className="mt-6 flex gap-3">
"
"              <Button className="bg-red-600 hover:bg-red-700" asChild><a href={LINKS.bot} rel="noopener">Открыть бота</a></Button>
"
"              <Button variant="outline" className="border-gray-300" asChild><a href="#contacts">Связаться с оргкомитетом</a></Button>
"
"            </div>
"
"          </div>
"
"          <div className="aspect-[4/3] rounded-3xl border border-gray-100 grid place-items-center overflow-hidden">
"
"            <div className="text-center p-8">
"
"              <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-red-100/60 backdrop-blur grid place-items-center">
"
"                <Bot className="text-red-600" />
"
"              </div>
"
"              <p className="text-sm text-gray-500">Запись на активности со звёздочкой осуществляется через Bot_MOEX Camp Connect на платформе Express.</p>
"
"            </div>
"
"          </div>
"
"        </div>
"
"      </section>
"
"
"
"      <section id="contacts" className="py-16 border-t border-gray-100 relative">
"
"        <GlassDecoration className="right-[-10%] top-[-2rem] w-[18rem] h-[18rem]" />
"
"        <div className="max-w-6xl mx-auto px-5">
"
"          <h2 className="text-3xl font-semibold">Контакты</h2>
"
"          <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
"
"            {[{name:'Гаврикова Юлия',role:'Руководитель группы развития корпоративной культуры и внутренних коммуникаций',phone:'+7 (929) 973‑72‑36'},{name:'Мунаева Елена',role:'Менеджер по внутренним коммуникациям',phone:'+7 (966) 337‑87‑93'},{name:'Восторгина Александра',role:'Руководитель группы внутренних мероприятий',phone:'+7 (906) 704‑95‑94'}].map((c,i)=> (
"
"              <Card key={i} className="border-gray-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
"
"                <CardHeader><CardTitle className="text-base">{c.name}</CardTitle></CardHeader>
"
"                <CardContent><p className="text-gray-700">{c.role}</p><div className="flex items-center gap-2 mt-2 text-gray-900 font-medium"><Phone className="h-4 w-4"/> {c.phone}</div></CardContent>
"
"              </Card>
"
"            ))}
"
"          </div>
"
"        </div>
"
"      </section>
"
"
"
"      <footer className="py-10 border-t border-gray-100">
"
"        <div className="max-w-6xl mx-auto px-5 text-sm text-gray-500">
"
"          <div>© MOEX Camp Connect. Информация собрана из официального материала мероприятия. Активности, отмеченные *, требуют предварительной записи через бота.</div>
"
"        </div>
"
"      </footer>
"
"    </div>
"
"  )
"
"}
"
"
