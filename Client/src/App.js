import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import React from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "maurofallico@gmail.com";
  const PASSWORD = "123456";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario o Password incorrecto");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty";

    fetch(`${URL_BASE}/characters/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else if (characters.find((char) => char.id === data.id)) {
          alert("El personaje ya se está mostrando.");
        } else {
          alert("El ID no es válido.");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Form login={login} />}  />
        
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />

        <Route path="/about" element={<About />} />
        
        <Route path="/detail/:id" element={<Detail characters={characters} />} />
        
        <Route path="/favorites" element={<Favorites characters={characters} onClose={onClose} />}
        />  
      </Routes>
    </div>
  );
}

export default App;
