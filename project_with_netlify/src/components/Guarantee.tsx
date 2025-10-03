import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const Guarantee: React.FC = () => {
  const guarantees = [
    {
      title: "Garantia de Resultado",
      description: "Se não conseguir escrever uma redação completa em 7 dias, devolvemos seu dinheiro"
    },
    {
      title: "Garantia de Simplicidade", 
      description: "Se achar complicado demais, devolvemos seu dinheiro"
    },
    {
      title: "Garantia de Confiança",
      description: "Se não se sentir mais seguro para o ENEM, devolvemos seu dinheiro"
    }
  ];

  return (
    <section className="py-16 px-4 bg-green-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          <Shield className="inline w-10 h-10 text-green-600 mr-3" />
          NOSSA GARANTIA PARA VOCÊ
        </h2>

        <div className="space-y-6">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-green-200">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{guarantee.title}:</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{guarantee.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;