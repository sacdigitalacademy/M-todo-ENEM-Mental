import React from 'react';
import { MessageCircle, Star, Users } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Consegui escrever minha primeira redação completa sem travar!",
      name: "Maria Silva",
      course: "Aprovada em Medicina"
    },
    {
      quote: "Eu estava desesperada com bloqueios, mas esse método salvou minha preparação.",
      name: "Ana Costa", 
      course: "Aprovada em Engenharia"
    },
    {
      quote: "É direto, sem enrolação. Funciona mesmo quando você está nervoso.",
      name: "João Santos",
      course: "Aprovado em Direito"
    },
    {
      quote: "Finalmente consegui controlar minha ansiedade na redação!",
      name: "Beatriz Lima",
      course: "Aprovada em Psicologia"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <MessageCircle className="inline w-10 h-10 text-amber-400 mr-3" />
          Veja o que nossos alunos estão falando:
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-700 p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold text-amber-400">{testimonial.name}</div>
                <div className="text-gray-300">{testimonial.course}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="text-center bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-2xl">
            <Users className="w-12 h-12 mx-auto mb-3 text-gray-800" />
            <div className="text-3xl font-bold text-gray-800">+1.500</div>
            <div className="text-gray-800 font-semibold">ALUNOS IMPACTADOS ✅</div>
          </div>
          <div className="text-center bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl">
            <Star className="w-12 h-12 mx-auto mb-3 text-white" />
            <div className="text-3xl font-bold text-white">9,7</div>
            <div className="text-white font-semibold">NOTA DE SATISFAÇÃO ✅</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;