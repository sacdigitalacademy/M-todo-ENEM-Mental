import React from 'react';
import { Book, CheckCircle, Clock, Smartphone } from 'lucide-react';

const ProductDescription: React.FC = () => {
  const features = [
    "E-book 1: Reprogramação Mental Express (Guia Completo - 25 páginas)",
    "E-book 2: Arsenal de Emergência (Kit de Sobrevivência - 30 páginas)", 
    "E-book 3: Protocolo Anti-Pânico (Manual de Ação Rápida - 15 páginas)",
    "Tudo baseado em neurociência aplicada à escrita",
    "Sistema testado por mais de 500 alunos",
    "Entrega imediata",
    "Acesso vitalício"
  ];

  const steps = [
    { number: "1", title: "Comprar", description: "Clique no botão e finalize sua compra" },
    { number: "2", title: "Receber por E-mail", description: "Todo conteúdo chega direto no seu e-mail" },
    { number: "3", title: "Começar a Aplicar", description: "Acesse pelo celular, tablet ou computador" }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Product Description */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            📘 O que é o Método?
          </h2>
          
          <p className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            O Método Desbloqueio Mental ENEM é um sistema 100% digital com:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Passo a Passo Para Receber o Material:
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-400 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-800 p-6 rounded-xl">
            <div className="text-center mb-6">
              <Smartphone className="w-12 h-12 text-amber-400 mx-auto mb-3" />
              <h4 className="text-xl font-bold mb-4">📲 Comprou? Recebe na hora.</h4>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Todo o conteúdo chega direto no seu e-mail</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Você pode estudar pelo celular, tablet ou computador</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Sem precisar de internet depois de baixar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;