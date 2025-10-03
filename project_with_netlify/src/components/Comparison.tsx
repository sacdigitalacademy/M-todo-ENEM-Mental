import React from 'react';
import { X, CheckCircle, Rocket } from 'lucide-react';

const Comparison: React.FC = () => {
  const comparisons = [
    { youtube: "Conteúdo desencontrado", method: "Conteúdo direcionado" },
    { youtube: "Perda de tempo", method: "Economia de tempo" },
    { youtube: "Sem foco no ENEM", method: "100% focado no ENEM" },
    { youtube: "Sem organização", method: "Totalmente organizado" }
  ];

  const benefits = [
    "Desbloqueie bloqueios mentais em 30 segundos",
    "Economize 3x mais tempo",
    "Escreva automaticamente com técnicas de fluxo", 
    "Comece hoje, sem depender de inspiração",
    "Esteja confiante na hora da prova"
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          <Rocket className="inline w-10 h-10 text-blue-600 mr-3" />
          Benefícios
        </h2>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            {/* YouTube Column */}
            <div className="bg-red-50 p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">YouTube aleatório ❌</h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{item.youtube}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Method Column */}
            <div className="bg-green-50 p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">Método Desbloqueio Mental ✅</h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item.method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Com o Método você vai:</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-blue-800 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;