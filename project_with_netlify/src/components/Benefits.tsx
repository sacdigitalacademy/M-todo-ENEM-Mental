import React from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    "Escrever automaticamente mesmo com ansiedade",
    "Ter um arsenal mental de frases e conectivos prontos",
    "Se sentir confiante na sua capacidade de redação", 
    "Saber exatamente como estruturar qualquer tema",
    "Conquistar mais de 850 pontos com técnicas comprovadas"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            <Sparkles className="inline w-10 h-10 text-amber-500 mr-3" />
            VOCÊ SERÁ CAPAZ DE:
          </h2>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-400">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;