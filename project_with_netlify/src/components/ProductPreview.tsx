import React from 'react';
import { Book } from 'lucide-react';

const ProductPreview: React.FC = () => {
  const ebooks = [
    {
      title: "Reprogramação Mental Express",
      subtitle: "Guia Completo - 25 páginas",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Arsenal de Emergência", 
      subtitle: "Kit de Sobrevivência - 30 páginas",
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Protocolo Anti-Pânico",
      subtitle: "Manual de Ação Rápida - 15 páginas", 
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {ebooks.map((ebook, index) => (
            <div key={index} className="text-center group">
              <div className={`bg-gradient-to-br ${ebook.color} p-8 rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300`}>
                <Book className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">{ebook.title}</h3>
                <p className="text-white opacity-90 text-sm">{ebook.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Banner */}
        <div className="mt-16 text-center bg-white py-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">ESTUDANTES APROVADOS EM:</h3>
          <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-blue-900">
            <span>USP</span>
            <span>•</span>
            <span>UFRJ</span>
            <span>•</span>
            <span>UFPE</span>
            <span>•</span>
            <span>UNB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;