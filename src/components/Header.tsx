
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'O que fazemos', href: '#oque-fazemos' },
    { name: 'Como fazemos', href: '#como-fazemos' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-white/80 py-4'
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/8d6f81a7-2dae-45aa-9aef-02025c513329.png"
            alt="Logo Instituto Escafandristas" 
            className="h-12 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-lg font-serif font-bold text-primary-dark">Instituto</span>
            <span className="text-lg font-serif font-bold text-primary-dark">Escafandristas</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden flex items-center p-2 text-primary"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div 
          className={cn(
            'fixed inset-0 bg-white z-40 transform transition-transform duration-300 md:hidden',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex justify-end p-4">
            <button 
              onClick={toggleMenu}
              className="text-primary"
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 pt-12">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl text-gray-800 hover:text-primary font-medium"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
