import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Ainda tem dúvidas? Fale conosco:</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <a 
            href="https://wa.me/5511441232326"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 p-6 rounded-2xl transition-colors"
          >
            <MessageCircle className="w-8 h-8" />
            <div className="text-left">
              <div className="font-bold">WhatsApp:</div>
              <div>(11) 4412-3226</div>
            </div>
          </a>

          <a 
            href="mailto:sacdigitalacademy@outlook.com"
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 p-6 rounded-2xl transition-colors"
          >
            <Mail className="w-8 h-8" />
            <div className="text-left">
              <div className="font-bold">E-mail:</div>
              <div className="text-sm">sacdigitalacademy@outlook.com</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;