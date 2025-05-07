
import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="section bg-gradient-to-br from-primary/5 to-white">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium">Telefone</h4>
                    <p className="text-gray-600">(11) 96558-3397</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium">E-mail</h4>
                    <p className="text-gray-600 break-words">presidencia@escafandristas.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium">Endereço</h4>
                    <p className="text-gray-600">Rua dos Tapes, 57 – São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/instituto_escafandristas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Instagram do Instituto Escafandristas"
                >
                  <Instagram className="h-6 w-6 text-primary" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/instituto-escafandristas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn do Instituto Escafandristas"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
                <a 
                  href="https://www.youtube.com/@institutoescafandristas191/featured" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Canal do YouTube do Instituto Escafandristas"
                >
                  <Youtube className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">Responsável</h3>
              <p className="text-gray-700">João Martins</p>
              <p className="text-gray-600 text-sm">Presidente</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-6 font-serif">Envie uma mensagem</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Seu e-mail"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Escreva sua mensagem..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
