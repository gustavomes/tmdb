// Importa o componente StrictMode do React, que ativa verificações adicionais para identificar potenciais problemas.
// Isso é útil apenas em ambiente de desenvolvimento e não afeta a produção.
import { StrictMode } from 'react';

// Importa a função createRoot do React DOM. 
// Essa função é usada para criar o ponto de montagem inicial da aplicação React na DOM.
import { createRoot } from 'react-dom/client';

// Importa o BrowserRouter (apelidado como Router), Routes e Route do react-router-dom.
// Esses componentes são usados para configurar o sistema de roteamento da aplicação.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa os estilos globais da aplicação, definidos no arquivo index.css.
// Estes estilos são aplicados a todos os componentes da aplicação.
import './index.css';

// Importa o componente principal da aplicação (App), que geralmente contém as definições de rotas e layout geral.
import App from './App.jsx';

// Importa a página "Home" que será exibida quando o usuário acessar a rota principal (ou outra configurada para ela).
import Home from './pages/Home.jsx';

// Importa a página "Movies", que será exibida em uma rota específica para detalhes de filmes.
import Movies from './pages/Movie.jsx';

// Importa a página "Search", que será exibida em uma rota específica para funcionalidade de busca.
import Search from './pages/Search.jsx';

// Seleciona o elemento HTML com o ID 'root', que é o ponto de montagem onde a aplicação React será renderizada.
// O método createRoot é usado para criar um ponto de entrada para a renderização.
createRoot(document.getElementById('root')).render(
  // Envolve a aplicação no StrictMode para verificar erros e práticas obsoletas durante o desenvolvimento.
  <StrictMode>
    {/* Configura o roteamento da aplicação usando BrowserRouter (renomeado para Router). */}
    <Router>
      {/* Renderiza o componente App, que geralmente contém a definição de rotas e a estrutura principal da aplicação. */}
      <App />
    </Router>
  </StrictMode> // Finaliza o StrictMode, indicando que todas as verificações estão habilitadas para os elementos filhos.
);