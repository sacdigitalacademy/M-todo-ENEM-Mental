import React from 'react';
import { Frown } from 'lucide-react';

const PainPoints: React.FC = () => {
  const pains = [
    "Ficar com branco total na hora de escrever",
    "Se comparar com outros que escrevem melhor", 
    "Travar de ansiedade e não conseguir desenvolver ideias",
    "Se sentir perdida e frustrada porque não sabe por onde começar",
    "Sentir que todo mundo é capaz de escrever bem menos você"
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            🥺 SE VOCÊ NÃO AGUENTA MAIS:
          </h2>
          
          <div className="space-y-6">
            {pains.map((pain, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                <Frown className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{pain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;