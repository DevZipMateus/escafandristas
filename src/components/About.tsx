
import { Check } from 'lucide-react';

const About = () => {
  const valores = [
    { 
      titulo: "Coragem", 
      descricao: "Enfrentar a ignorância exige disposição para buscar a verdade sem tréguas." 
    },
    { 
      titulo: "Liberdade", 
      descricao: "O pensamento crítico só se desenvolve sem amarras, sejam externas ou internas." 
    },
    { 
      titulo: "Profundidade", 
      descricao: "Compreender a realidade exige ir além da superfície." 
    },
    { 
      titulo: "Resiliência", 
      descricao: "O aprendizado exige esforço, disciplina e consistência." 
    },
    { 
      titulo: "Ousadia", 
      descricao: "Avançar intelectualmente é desafiar pressupostos, inclusive os próprios." 
    },
  ];

  return (
    <section id="sobre" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Sobre o Instituto</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              O Instituto Escafandristas é uma organização sem fins lucrativos dedicada à formação 
              da próxima geração de intelectuais liberais no Brasil. Criamos uma rede de autores, 
              pesquisadores, professores e entusiastas que avançam a discussão do liberalismo por 
              meio da produção e crítica bibliográfica.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2 font-serif">Missão</h3>
                <p className="text-gray-700">
                  Desenvolver e conectar a próxima geração de intelectuais pela liberdade no Brasil.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-primary mb-2 font-serif">Visão</h3>
                <p className="text-gray-700">
                  Criar uma rede de autores, pesquisadores, professores e entusiastas que avancem 
                  a discussão do liberalismo por meio da produção e crítica bibliográfica.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6 font-serif">Nossos Valores</h3>
            
            <div className="space-y-4">
              {valores.map((valor) => (
                <div key={valor.titulo} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{valor.titulo}</h4>
                    <p className="text-gray-600">{valor.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
