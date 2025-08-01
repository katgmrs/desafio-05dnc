import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Livros from './views/ListarLivros';
import LivrosCadastro  from './views/CadastrarLivro';
import LivrosEdicao from './views/EditarLivro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Livros />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/cadastrar" element={<LivrosCadastro />} />
        <Route path="/editar/:id" element={<LivrosEdicao />} />
      </Routes>
    </Router>
  );
}

export default App;
