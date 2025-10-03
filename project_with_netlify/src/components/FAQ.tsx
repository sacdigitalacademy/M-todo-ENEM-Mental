import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Eu tenho bloqueio total para escrever. Vai funcionar mesmo?",
      answer: "Sim! O método foi criado especificamente para quem trava. As técnicas funcionam mesmo com ansiedade extrema."
    },
    {
      question: "Tenho que estudar 12 horas por dia?",
      answer: "Não! O método ensina seu cérebro a funcionar automaticamente. 30 minutos de prática já geram resultados."
    },
    {
      question: "Como recebo o material?",
      answer: "Imediatamente após a compra, todo conteúdo chega no seu e-mail em formato PDF otimizado."
    },
    {
      question: "O método é atualizado?",
      answer: "Sim, sempre atualizamos baseado nos temas mais recentes do ENEM."
    },
    {
      question: "Funciona para quem já tenta há anos?",
      answer: "Especialmente! Quem já tentou várias vezes precisa de uma abordagem diferente, que é exatamente o que oferecemos."
    },
    {
      question: "E se eu não gostar?",
      answer: "Garantia total de 90 dias. Se não funcionar, devolvemos 100% do valor."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          <HelpCircle className="inline w-10 h-10 text-blue-600 mr-3" />
          DÚVIDAS MAIS FREQUENTES
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-800 pr-4">{faq.question}</h3>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-600 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;