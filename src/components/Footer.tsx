
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { title: 'Início', href: '#inicio' },
    { title: 'Sobre', href: '#sobre' },
    { title: 'O que fazemos', href: '#oque-fazemos' },
    { title: 'Como fazemos', href: '#como-fazemos' },
    { title: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/8d6f81a7-2dae-45aa-9aef-02025c513329.png"
                alt="Logo Instituto Escafandristas" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-serif font-bold">Instituto<br/>Escafandristas</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Uma organização sem fins lucrativos dedicada à formação da próxima geração de 
              intelectuais liberais no Brasil.
            </p>
            <p className="text-primary text-lg font-serif italic">
              Ouse saber.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/instituto_escafandristas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram do Instituto Escafandristas"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/instituto-escafandristas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn do Instituto Escafandristas"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <h3 className="text-lg font-bold mt-6 mb-2">Contato</h3>
            <p className="text-gray-400">presidencia@escafandristas.org</p>
            <p className="text-gray-400">(11) 96558-3397</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Instituto Escafandristas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
