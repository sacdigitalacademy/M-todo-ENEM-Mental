import React from 'react';
import { CreditCard, Shield, Lock } from 'lucide-react';

const Pricing: React.FC = () => {
  const included = [
    "E-book 1: Reprogramação Mental Express",
    "E-book 2: Arsenal de Emergência",
    "E-book 3: Protocolo Anti-Pânico", 
    "BÔNUS 1: Conectivos de Ouro",
    "BÔNUS 2: 12 Introduções Matadoras",
    "BÔNUS 3: Manual SOS Redação"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          💰 OFERTA ESPECIAL
        </h2>

        <div className="bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              MÉTODO DESBLOQUEIO MENTAL ENEM COMPLETO
            </h3>
            <div className="flex items-center justify-center gap-4">
              <span className="text-xl text-blue-800 line-through">R$ 97,00</span>
              <span className="text-4xl md:text-5xl font-bold text-blue-900">R$ 19,90</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h4 className="text-xl font-bold mb-6 text-center">INCLUI:</h4>
            <div className="space-y-3 mb-8">
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a 
              href="https://pay.cakto.com.br/3djtsu4_587462"
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-6 px-8 rounded-2xl text-xl font-bold text-center hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              QUERO DESBLOQUEAR MINHA MENTE AGORA
            </a>

            {/* Guarantees */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-center gap-6 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>🛡️ GARANTIA TOTAL 90 DIAS</span>
                </div>
              </div>
              <p className="text-center text-gray-600">Não gostou? Devolvemos 100% do valor</p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Lock className="w-4 h-4" />
                <span>💳 Pagamento 100% seguro e criptografado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;