import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const targetPoints = [
    "Se sente perdida sem saber como começar a redação",
    "Tem pouco tempo e precisa de máxima eficiência",
    "Quer método comprovado, não \"achismos\"",
    "Sonha com universidade federal mas se sente atrasada",
    "Está cansada de travar na hora de escrever",
    "Precisa de sistema realista para 2 meses",
    "Quer redação acima de 850 pontos"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          <Target className="inline w-10 h-10 text-blue-600 mr-3" />
          ESTE MÉTODO É PERFEITO SE VOCÊ:
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="space-y-6 mb-8">
            {targetPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{point}</span>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-amber-400 to-amber-500 p-6 rounded-2xl">
            <p className="text-xl font-bold text-blue-900">
              SE VOCÊ SE IDENTIFICOU, este método foi feito pra você! 🎯
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;