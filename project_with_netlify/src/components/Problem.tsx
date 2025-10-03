import React from 'react';
import { BookOpen, CheckCircle, Star, Users, Shield, Clock } from 'lucide-react';

const Problem: React.FC = () => {
  const features = [
    "Técnicas de Reprogramação Mental",
    "Arsenal de Emergência com 47 conectivos", 
    "Protocolo Anti-Pânico de 30 segundos",
    "Sistema para aprender redação rápido e de forma instintiva em pouco tempo"
  ];

  const stats = [
    { icon: Users, value: "+1.500", label: "Alunos aprovados" },
    { icon: Star, value: "9,7", label: "NOTA DE SATISFAÇÃO" },
    { icon: Shield, value: "100%", label: "Digital e atualizado" },
    { icon: Clock, value: "24h", label: "Suporte disponível" }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            📚 Aprenda a Conquistar 900+ Pontos na Redação mesmo tendo estudado pouco ou sem ter estudado nada ainda.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Estudos da Universidade de Stanford mostrou que reprogramação mental e técnicas de fluxo são as abordagens mais eficazes para superar bloqueios em menos tempo.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              E foi com esse princípio que criamos o <span className="font-bold text-blue-900">Método Desbloqueio Mental ENEM:</span>
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-6 rounded-2xl border-l-4 border-amber-400">
              <p className="text-lg font-semibold text-gray-800">
                🎓 Mais de 1.500 Estudantes que estavam com bloqueio mental, aplicaram o Método, desbloquearam suas mentes e hoje estão na Faculdade.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center border border-blue-200">
                  <Icon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-blue-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;