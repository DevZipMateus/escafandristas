
import { Book, Award, BookOpen, CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';

const HowWeDo = () => {
  const initiatives = [
    {
      icon: Book,
      title: "Editora Escafandristas",
      description: "Dedicada à curadoria, edição e distribuição de obras originais que avançam a liberdade. Selecionamos trabalhos de qualidade que, em outras circunstâncias, permaneceriam engavetados pela ausência de espaço no meio acadêmico e editorial tradicional.",
      stats: "6 livros originais lançados, mais de 2.500 exemplares vendidos."
    },
    {
      icon: Award,
      title: "Bolsa de Pesquisa",
      description: "Oferecemos bolsas de pesquisa para incentivar a produção acadêmica de caráter liberal, conectando estudantes e professores liberais por todo o Brasil.",
      stats: "Atualmente 4 bolsistas ativos (R$ 700/mês cada – equivalente à CAPES)."
    },
    {
      icon: BookOpen,
      title: "Grupo de Estudos",
      description: "Desde nossa origem, promovemos grupos de estudos que se dedicam à leitura e discussão de obras clássicas e contemporâneas da literatura liberal.",
      stats: "Discussões aprofundadas de mais de 20 obras (clássicas e novas)."
    },
    {
      icon: CalendarDays,
      title: "Eventos",
      description: "Organizamos eventos como a Conferência Escafandristas, que reúne pensadores, acadêmicos e entusiastas para discutir temas relevantes ao pensamento liberal.",
      stats: "Conferência Escafandristas: +100 participantes, evento referência."
    }
  ];

  return (
    <section id="como-fazemos" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Como Fazemos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div 
                key={initiative.title}
                className={cn(
                  "bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100",
                  "transition-all duration-300 hover:shadow-md"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-serif">{initiative.title}</h3>
                    <p className="text-gray-700 mb-4">{initiative.description}</p>
                    <div className="p-3 bg-primary/10 rounded text-sm text-gray-800">
                      <strong>Resultados:</strong> {initiative.stats}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
