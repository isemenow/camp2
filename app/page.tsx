'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Shield, MapPin, Clock, Calendar } from "lucide-react";

// Декоративный фон
function GlassDecoration({ className }: { className?: string }) {
  return (
    <div
      className={`hidden sm:block pointer-events-none -z-10 absolute rounded-full bg-gradient-to-br from-red-500/25 via-gray-200/40 to-white/30 backdrop-blur-xl ${className}`}
      aria-hidden
    />
  );
}

export default function Page() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      <GlassDecoration className="top-[-10rem] left-[-10rem] w-[30rem] h-[30rem]" />
      <GlassDecoration className="top-[20rem] right-[-12rem] w-[25rem] h-[25rem]" />
      <GlassDecoration className="bottom-[-12rem] left-[20%] w-[20rem] h-[20rem]" />

      <main className="max-w-4xl mx-auto p-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold leading-tight"
        >
          MOEX CAMP CONNECT
          <span className="block text-red-600 mt-2">БУДУЩЕЕ УЖЕ ЗДЕСЬ!</span>
        </motion.h1>

        <p className="mt-5 text-lg text-gray-600">
          Самое ожидаемое событие осени — день в полном коннекте: с технологиями,
          ценностями, командой и близкими.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2"><Calendar className="h-4 w-4"/> 20 сентября</div>
          <div className="flex items-center gap-2"><Clock className="h-4 w-4"/> 11:00–18:00</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Останкино 2.0</div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="bg-red-600 hover:bg-red-700">Записаться</Button>
          <Button size="lg" variant="outline">Орг. информация</Button>
        </div>

        <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2"><Shield className="h-4 w-4"/> Вход по рабочему пропуску</div>
          <div className="flex items-center gap-2"><Star className="h-4 w-4"/> Отличный день гарантирован</div>
        </div>
      </main>
    </div>
  );
}
