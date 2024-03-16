// App.tsx
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";

const App = () => {
  return (
    <Router>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalogo" aria-current="page">
                  Catálogo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/novo" aria-current="page">
                  Novo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<LivroLista />} />
        <Route path="/catalogo" element={<LivroLista />} />
        <Route path="/novo" element={<LivroDados />} />
      </Routes>
    </Router>
  );
};


export default App;
