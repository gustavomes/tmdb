import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Search from './pages/Search'
import Navbar from './components/Navbar'
import Movie from './pages/Movie'


function App() {
  
  return (
    <div className="App">
          <div className="container">
          
          <Routes>
            <Route exact path="/" element= {<Home />} />
            <Route path="/movie/:id" element= {<Movie />} /> {/* aqui teve erro */}
            <Route path="/search" element= {<Search />} />
          </Routes>
          </div>
          
    </div>
  )
}

export default App
