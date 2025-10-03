import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const Urgency: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-bounce" />
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <Clock className="inline w-12 h-12 mr-3" />
          FALTAM MENOS DE 60 DIAS PARA O ENEM 2024
        </h2>
        
        <p className="text-2xl md:text-3xl font-bold">
          É agora ou esperar mais um ano inteiro. NÃO DESISTA!
        </p>

        <div className="mt-8">
          <a 
            href="https://pay.cakto.com.br/3djtsu4_587462"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-red-900 px-12 py-4 rounded-full text-xl font-bold hover:from-amber-500 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg animate-pulse"
          >
            🚨 GARANTA SEU MÉTODO AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Urgency;