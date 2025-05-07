
import { BookOpen, Users, BookMarked } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatWeDo = () => {
  const initiatives = [
    {
      icon: BookOpen,
      title: "Fomentar a produção intelectual",
      description: "Incentivamos a produção intelectual e acadêmica criteriosa e inovadora, baseada na razão, liberdade de pensamento e honestidade intelectual."
    },
    {
      icon: Users,
      title: "Criar espaços de debate",
      description: "Desenvolvemos espaços de debate profundo e rigoroso, sem amarras ideológicas, estimulando integração entre intelectuais."
    },
    {
      icon: BookMarked,
      title: "Desenvolver pesquisadores liberais",
      description: "Formamos pesquisadores liberais com rigor teórico, compromisso intelectual e apoiamos a difusão do liberalismo no meio acadêmico."
    }
  ];

  return (
    <section id="oque-fazemos" className="section bg-gradient-to-br from-primary/5 to-white">
      <div className="container">
        <h2 className="section-title">O Que Fazemos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div 
                key={initiative.title}
                className={cn(
                  "bg-white p-6 rounded-lg shadow-sm border border-gray-100",
                  "transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                )}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-3 font-serif">Visão Geral</h3>
          <p className="text-gray-700">
            O Instituto se posiciona como um "hub intelectual no meio liberal", promovendo a 
            liberdade individual, política e econômica como princípios fundamentais para o 
            desenvolvimento humano e social. Além disso, valoriza a originalidade, profundidade 
            e autonomia na produção de conhecimento, incentivando novas ideias e perspectivas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
