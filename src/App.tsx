
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GrupoEstudos from "./pages/GrupoEstudos";

const queryClient = new QueryClient();

// Componente para gerenciar o título da página e metadados
const SEOProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Configurações padrão para SEO
    document.title = "Instituto Escafandristas - Fomentando o Liberalismo Intelectual";

    // Adicionar descrição para SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "O Instituto Escafandristas é uma organização sem fins lucrativos dedicada à formação da próxima geração de intelectuais liberais no Brasil.");
    }

    // Adicionar language e direção para acessibilidade
    document.documentElement.lang = "pt-BR";
    document.documentElement.dir = "ltr";

    // Garantir que existe um anúncio para leitores de tela sobre o conteúdo principal
    const main = document.querySelector("main");
    if (main) {
      main.setAttribute("role", "main");
      main.setAttribute("id", "conteudo-principal");
    }

  }, []);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SEOProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/grupo-estudos" element={<GrupoEstudos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SEOProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
