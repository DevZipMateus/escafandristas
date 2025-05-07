
import { Instagram } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const GrupoEstudos = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <section className="container py-12">
          <h1 className="text-4xl font-serif font-bold mb-12">Grupo de Estudos</h1>
          
          <div className="space-y-12">
            {/* Sobre o Projeto */}
            <div>
              <h2 className="section-title">SOBRE O PROJETO</h2>
              <div className="mt-6 space-y-4 text-gray-700">
                <p>
                  Nossa origem como grupo de estudos se deu no ano de 2021, por conta de um crescente descontentamento com relação ao padrão que infelizmente passou a ser tão usual neste tipo de grupo no meio liberal. Isto é, há uma grande quantidade de grupos destinados a ajudar amantes da Liberdade em seus primeiros passos no mundo da leitura, mas praticamente nenhum destinado a oferecer-lhe um segundo ou terceiro passo neste meio.
                </p>
                <p>
                  Assim, nos abstivemos de buscar pelas leituras tradicionais como "As Seis Lições," ou "A Lei," que apesar da evidentemente merecida reverência dentro do liberalismo, fazem muito pouco pela cultura e robustez intelectual de qualquer liberal que já tenha ultrapassado a fase de ter seus primeiros contatos com as ideias de liberdade.
                </p>
                <p>
                  O Instituto Escafandristas, desde a sua origem como grupo de estudos, acredita na importância do desafio intelectual constante e, por isso, prefere optar por obras mais profundas. Aliás, por este motivo, nosso grupo não realiza "reuniões" sobre livros, mas sim mergulhos nas obras escolhidas. Nossas atividades se iniciaram pela leitura de "Ciência Econômica e o Método Austríaco," mas a esta altura já cobrimos títulos como "Fundamentação da Metafísica dos Costumes," "Objetivismo: introdução à Epistemologia e à teoria dos conceitos," e clássicos como "Princípios de Economia Política."
                </p>
                <p>
                  Tão fundamental quanto nossa insistência na abordagem de obras complexas e pouco exploradas, é o padrão de nossos mergulhos, que não se tratam de aulas ou palestras, mas sim discussões abertas e bastante plurais quanto às observações de cada escafandrista sobre a leitura.
                </p>
              </div>
            </div>
            
            {/* Mergulhos */}
            <div>
              <h2 className="section-title">Alguns de nossos mergulhos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <Card className="overflow-hidden border-primary/10 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-serif font-bold text-primary-dark">Princípios de Economia Política</h3>
                    <p className="text-gray-500 italic">(Carl Menger)</p>
                    <p className="text-gray-700">
                      A magnum opus do fundador da escola austríaca de economia, onde se encontram as origens de diversos conceitos fundamentais a esta tradição de pensamento, como a preferência temporal, o marginalismo, valor, bens, e tantos outros.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-primary/10 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-serif font-bold text-primary-dark">Fundamentação da Metafísica dos Costumes</h3>
                    <p className="text-gray-500 italic">(Immanuel Kant)</p>
                    <p className="text-gray-700">
                      Considerado o filósofo que simboliza o apogeu da idade moderna, nesta obra Kant delimita a sua perspectiva acerca dos fundamentos para a ação humana orientada a partir do dever-ser. Um livro indispensável aos amantes da Filosofia.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-primary/10 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-serif font-bold text-primary-dark">Objetivismo: Introdução à epistemologia e teoria dos conceitos</h3>
                    <p className="text-gray-500 italic">(Ayn Rand)</p>
                    <p className="text-gray-700">
                      Autora de um do segundo livro mais influente da história dos Estados Unidos, Ayn Rand e seu pensamento são símbolos de capitalismo e individualismo. Nesta obra, a autora aborda a teoria do conhecimento que sustenta suas teses.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-primary/5 p-8 rounded-lg text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-serif font-bold mb-4">Participe do nosso grupo de estudos</h3>
              <p className="mb-6">Para se juntar ao nosso grupo de estudos, envie uma mensagem direta para o nosso Instagram!</p>
              <a 
                href="https://www.instagram.com/instituto_escafandristas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                <Instagram className="h-5 w-5" />
                Contate-nos no Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GrupoEstudos;
