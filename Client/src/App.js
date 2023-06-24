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
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
 
  /* function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario o Password incorrecto");
    }
  } */

 async function login(userData) {
  try {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    const  { data }  = await axios(URL + `?email=${email}&password=${password}`)
    const { access } = data
       setAccess(data);
       if (access){
        navigate('/home');
       }
       else{
        alert("Usuario o Password incorrecto")
       }
  } catch (error) {
    console.log(error)
  }
 }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const URL_BASE = "http://localhost:3001/rickandmorty";

    const { data } = await axios.get(`${URL_BASE}/character/${id}`) 
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else if (characters.find((char) => char.id === data.id)) {
          alert("El personaje ya se está mostrando.");
        } else {
          alert("El ID no es válido.");
        }
    } catch (error) {
      console.log(error)
    }
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
