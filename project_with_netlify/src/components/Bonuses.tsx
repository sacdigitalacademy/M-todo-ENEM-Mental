import React from 'react';
import { Gift, FileText, Brain, Target } from 'lucide-react';

const Bonuses: React.FC = () => {
  const bonuses = [
    {
      title: "BÔNUS 1: Conectivos de Ouro (PDF Exclusivo)",
      value: "R$ 27",
      icon: FileText,
      color: "from-yellow-400 to-yellow-500"
    },
    {
      title: "BÔNUS 2: 12 Introduções Matadoras (Template Pronto)", 
      value: "R$ 37",
      icon: Brain,
      color: "from-purple-400 to-purple-500"
    },
    {
      title: "BÔNUS 3: Manual SOS Redação (Guia de Emergência)",
      value: "R$ 27", 
      icon: Target,
      color: "from-red-400 to-red-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          <Gift className="inline w-10 h-10 text-amber-500 mr-3" />
          BÔNUS EXCLUSIVOS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className={`bg-gradient-to-r ${bonus.color} p-6 text-center`}>
                  <Icon className="w-12 h-12 text-white mx-auto mb-3" />
                  <div className="text-white">
                    <div className="text-sm opacity-90 line-through">Valor {bonus.value}</div>
                    <div className="text-xl font-bold">GRÁTIS hoje!</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 text-center leading-tight">
                    {bonus.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;