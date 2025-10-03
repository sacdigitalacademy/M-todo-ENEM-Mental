import React from 'react';
import { Brain, Key, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-6 rounded-full">
              <Brain className="w-16 h-16 text-blue-900" />
              <Key className="w-8 h-8 text-blue-900 absolute -bottom-1 -right-1 bg-amber-400 rounded-full p-1" />
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          MÉTODO DESBLOQUEIO MENTAL ENEM <Zap className="inline w-12 h-12 text-amber-400" />
        </h1>

        {/* Subheadline */}
        <h2 className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-4xl mx-auto">
          O Primeiro Sistema de Reprogramação Neurológica Para Escrever Redações Nota 900+ de Forma <span className="text-amber-400 font-bold">INSTINTIVA</span>, Mesmo Com a Mente em Branco e Mãos Tremendo de Nervoso
        </h2>

        {/* Description */}
        <p className="text-lg mb-10 text-blue-100 max-w-4xl mx-auto leading-relaxed">
          Cronograma científico + Técnicas de fluxo mental + Protocolo anti-pânico + Arsenal de emergência = <span className="text-amber-400 font-semibold">Método testado para quem está atrasado e precisa de um milagre em 60 dias</span> (Sem Estudar 12h Por Dia)
        </p>

        {/* CTA Button */}
        <a 
          href="https://pay.cakto.com.br/3djtsu4_587462" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-12 py-4 rounded-full text-xl font-bold hover:from-amber-500 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg animate-bounce"
        >
          🔥 QUERO DESBLOQUEAR MINHA MENTE AGORA
        </a>
      </div>
    </section>
  );
};

export default Hero;