import { cn } from '@/lib/utils';
const Hero = () => {
  return <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-br from-white to-primary/5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight">
              Ouse saber.
              <span className="block text-primary italic mt-2">Ouse saber</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              O Instituto Escafandristas é uma organização sem fins lucrativos dedicada à formação 
              da próxima geração de intelectuais liberais no Brasil.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#oque-fazemos" className="btn-primary">
                Conheça Nosso Trabalho
              </a>
              <a href="#contato" className="btn-outline">
                Entre em Contato
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 flex justify-center">
              <img src="/lovable-uploads/8d6f81a7-2dae-45aa-9aef-02025c513329.png" alt="Instituto Escafandristas" className="max-w-sm w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-16">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
          <div className="text-center px-4">
            <div className="text-3xl font-bold text-primary">6+</div>
            <div className="text-sm text-gray-600">Livros Publicados</div>
          </div>
          <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
          <div className="text-center px-4">
            <div className="text-3xl font-bold text-primary">20+</div>
            <div className="text-sm text-gray-600">Obras Estudadas</div>
          </div>
          <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
          <div className="text-center px-4">
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="text-sm text-gray-600">Bolsistas Ativos</div>
          </div>
          <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
          <div className="text-center px-4">
            <div className="text-3xl font-bold text-primary">2.500+</div>
            <div className="text-sm text-gray-600">Exemplares Vendidos</div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;