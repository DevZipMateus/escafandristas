
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-white">
      <div className="text-center px-4">
        <div className="mb-6 text-primary">
          <img
            src="/lovable-uploads/8d6f81a7-2dae-45aa-9aef-02025c513329.png"
            alt="Logo Instituto Escafandristas"
            className="h-24 w-auto mx-auto mb-4"
          />
        </div>
        <h1 className="text-4xl font-bold font-serif mb-2">Página não encontrada</h1>
        <p className="text-xl text-gray-600 mb-8">
          Desculpe, a página que você está procurando não existe.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
