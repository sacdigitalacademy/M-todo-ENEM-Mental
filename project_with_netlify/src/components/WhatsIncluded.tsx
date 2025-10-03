import React from 'react';
import { Package, Brain, Shield, Target } from 'lucide-react';

const WhatsIncluded: React.FC = () => {
  const ebooks = [
    {
      title: "E-book 1: Reprogramação Mental Express (25 páginas)",
      items: [
        "Manual para \"hackear\" seu cérebro e escrever no piloto automático",
        "7 técnicas de \"Gatilhos de Fluxo\" usadas por escritores profissionais",
        "Exercícios práticos de reprogramação mental"
      ],
      icon: Brain,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "E-book 2: Arsenal de Emergência (30 páginas)",
      items: [
        "Lista com 47 conectivos que salvam QUALQUER redação",
        "Banco com 25 frases de impacto que impressionam qualquer corretor", 
        "Método \"Guarda-Chuva\" para não fugir do tema NUNCA"
      ],
      icon: Shield,
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "E-book 3: Protocolo Anti-Pânico (15 páginas)",
      items: [
        "Protocolo anti-pânico de 30 segundos (testado por mais de 500 alunos)",
        "Simulação completa: roteiro para usar tudo na hora H",
        "Checklist de emergência para consulta rápida na prova"
      ],
      icon: Target,
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          📦 O que você vai receber
        </h2>

        <div className="space-y-8">
          {ebooks.map((ebook, index) => {
            const Icon = ebook.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${ebook.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <Icon className="w-10 h-10 text-white" />
                    <h3 className="text-xl md:text-2xl font-bold text-white">{ebook.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {ebook.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;