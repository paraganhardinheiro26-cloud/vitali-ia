"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Activity, Brain, Moon, Utensils, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#333] selection:bg-[#7A9482] selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-[#7A9482] tracking-tighter">Vitali.IA</div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium text-gray-500">
          <a href="#metodo" className="hover:text-[#7A9482] transition">O Método</a>
          <a href="#planos" className="hover:text-[#7A9482] transition">Planos</a>
          <a href="#" className="hover:text-[#7A9482] transition">Blog</a>
        </div>
        <button className="bg-[#333] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-all shadow-xl shadow-gray-200">
          Começar Jornada
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span 
            {...fadeIn}
            className="inline-block px-4 py-1.5 rounded-full bg-[#E3F2FD] text-[#2C5282] text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            Inteligência a serviço do seu bem-estar
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8"
          >
            Saúde é uma <br /> 
            <span className="italic font-light text-[#7A9482]">evolução contínua.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Um ecossistema premium que une treinos personalizados por IA, 
            equilíbrio mental e rotinas reais para quem busca constância.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <button className="bg-[#7A9482] text-white px-10 py-5 rounded-2xl text-lg font-medium hover:bg-[#687d6e] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#7a94824d]">
              Criar meu plano personalizado
            </button>
          </motion.div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif mb-4 text-gray-900">Assinaturas Vitali</h2>
            <p className="text-gray-500 font-light">Escolha o nível de acompanhamento ideal para o seu momento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* PLANO FREE */}
            <div className="border border-gray-100 p-8 rounded-[2rem] bg-[#FAFAFA] flex flex-col justify-between hover:border-[#7A9482]/30 transition-colors">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-4">Essencial</h3>
                <div className="text-3xl font-serif mb-6">Grátis</div>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex gap-3"><Check size={16} className="text-[#7A9482]"/> Blog Educativo</li>
                  <li className="flex gap-3"><Check size={16} className="text-[#7A9482]"/> Conteúdo Básico</li>
                  <li className="flex gap-3 text-gray-300"><Check size={16}/> Com anúncios</li>
                </ul>
              </div>
              <button className="w-full mt-10 py-4 rounded-xl border border-gray-200 text-sm font-bold hover:bg-white transition-all">Começar</button>
            </div>

            {/* PLANO PLUS */}
            <div className="border border-gray-100 p-8 rounded-[2rem] bg-[#FAFAFA] flex flex-col justify-between">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-4">Plus</h3>
                <div className="text-3xl font-serif mb-1">R$ 9,90</div>
                <div className="text-[10px] text-gray-400 mb-6 uppercase tracking-tighter">por mês</div>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex gap-3"><Check size={16} className="text-[#7A9482]"/> Tudo do Free</li>
                  <li className="flex gap-3"><Check size={16} className="text-[#7A9482]"/> 2 Treinos IA / mês</li>
                  <li className="flex gap-3"><Check size={16} className="text-[#7A9482]"/> Sem anúncios</li>
                </ul>
              </div>
              <button className="w-full mt-10 py-4 rounded-xl border border-gray-200 text-sm font-bold hover:bg-white transition-all">Assinar</button>
            </div>

            {/* PLANO PREMIUM (DESTAQUE) */}
            <div className="relative border-2 border-[#7A9482] p-8 rounded-[2.5rem] bg-white shadow-2xl shadow-[#7a94822a] flex flex-col justify-between md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7A9482] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Recomendado
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-[#7A9482] mb-4">Premium</h3>
                <div className="text-4xl font-serif mb-1 text-[#7A9482]">R$ 39,90</div>
                <div className="text-[10px] text-gray-400 mb-6 uppercase tracking-tighter">por mês</div>
                <ul className="space-y-4 text-sm text-gray-700 font-medium">
                  <li className="flex gap-3"><Check size={18} className="text-[#7A9482]"/> Planner Completo</li>
                  <li className="flex gap-3"><Check size={18} className="text-[#7A9482]"/> Treinos IA Ilimitados</li>
                  <li className="flex gap-3"><Check size={18} className="text-[#7A9482]"/> Combinação Inteligente</li>
                  <li className="flex gap-3"><Check size={18} className="text-[#7A9482]"/> Guia de Sono e Rotina</li>
                  <li className="flex gap-3"><Check size={18} className="text-[#7A9482]"/> Sem anúncios</li>
                </ul>
              </div>
              <button className="w-full mt-10 py-5 rounded-2xl bg-[#7A9482] text-white text-sm font-bold hover:bg-[#687d6e] transition-all shadow-lg shadow-[#7a94824d]">Assinar Premium</button>
            </div>

            {/* PLANO PRO */}
            <div className="border border-gray-100 p-8 rounded-[2rem] bg-[#FAFAFA] flex flex-col justify-between">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-4">Pro</h3>
                <div className="text-3xl font-serif mb-1">R$ 19,90</div>
                <div className="text-[10px] text-gray-400 mb-6 uppercase tracking-tighter">por mês</div>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex gap-3"><Check size={16} className="text-[#7A9482]"/> Tudo do Plus</li>
                  <li className="flex gap-3"><Check size={16} className="text-[#7A9482]"/> Treinos Ilimitados</li>
                  <li className="flex gap-3"><Check size={16} className="text-[#7A9482]"/> Sugestões de descanso</li>
                </ul>
              </div>
              <button className="w-full mt-10 py-4 rounded-xl border border-gray-200 text-sm font-bold hover:bg-white transition-all">Assinar</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER AVISO */}
      <footer className="bg-white border-t border-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="mx-auto mb-6 text-gray-300" size={30} />
          <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed uppercase tracking-widest">
            Aviso Legal: O Vitali.IA é uma plataforma de conteúdo educativo. As sugestões geradas por inteligência artificial não substituem o diagnóstico médico ou acompanhamento profissional presencial. Consulte sempre seu médico ou profissional de saúde antes de iniciar atividades físicas.
          </p>
        </div>
      </footer>
    </div>
  );
                }
