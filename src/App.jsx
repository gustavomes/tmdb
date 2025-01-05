// Importa o componente Link, além de Routes e Route, do react-router-dom.
// - Link: usado para criar links de navegação sem recarregar a página.
// - Routes: um contêiner para as rotas da aplicação.
// - Route: define cada rota individual e o componente que será renderizado.
import { Link, Routes, Route } from 'react-router-dom';

// Importa os estilos globais da aplicação, definidos no arquivo App.css.
import './App.css';

// Importa a página Home, que é exibida na rota inicial ("/").
import Home from './pages/Home';

// Importa a página Search, usada para a funcionalidade de busca, associada à rota "/search".
import Search from './pages/Search';

// Importa o componente Navbar, que geralmente contém links para navegação no site.
import Navbar from './components/Navbar';

// Importa a página Movie, que exibe detalhes de um filme específico, associada a uma rota dinâmica "/movie/:id".
import Movie from './pages/Movie';

// Define o componente principal App, que serve como o ponto inicial da aplicação.
function App() {
  return (
    // O contêiner principal da aplicação, com a classe "App" para aplicar estilos globais.
    <div className="App">
<<<<<<< HEAD
      {/* Um contêiner adicional para centralizar o conteúdo e aplicar layout. */}
      <div className="container">
        {/* Renderiza o componente Navbar, exibido em todas as páginas. */}
        <Navbar />
        {/* Define as rotas da aplicação usando o componente Routes. */}
        <Routes>
          {/* Define a rota inicial ("/"), que renderiza o componente Home. */}
          <Route exact path="/" element={<Home />} />
          {/* Define a rota dinâmica "/movie/:id", que renderiza o componente Movie. */}
          <Route path="/movie/:id" element={<Movie />} /> {/* aqui teve erro */}
          {/* Define a rota "/search", que renderiza o componente Search. */}
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
=======
          <div className="container">
          <Navbar /> {/* coment */}
          <Routes>
            <Route exact path="/" element= {<Home />} />
            <Route path="/movie/:id" element= {<Movie />} /> {/* aqui teve erro */}
            <Route path="/search" element= {<Search />} />
          </Routes>
          </div>
          
>>>>>>> Dev
    </div>
  );
}

export default App;