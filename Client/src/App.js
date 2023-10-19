import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import Paginated from "./components/Paginated/Paginated.jsx"
import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function App() {

  const characters = useSelector((state) => state.allCharacters);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

 async function login(userData) {
  try {
    const { email, password } = userData;
    /* const URL = 'http://localhost:3001/rickandmorty/login';
    const  { data }  = await axios(URL + `?email=${email}&password=${password}`)
    const { access } = data
       setAccess(data); */
       if (email === "admin@rick.com" && password === "Pickle123"){
        setAccess(true)
        navigate('/home');
       }
       else{
        alert("Usuario o Password incorrecto")
       }
  } catch (error) {
    alert("Incorrect username or password.")
    console.log(error)
  }
 }


  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);



  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Form login={login} />}  />
        
        <Route path="/home" 
        element={<Paginated />} />

        <Route path="/about" element={<About />} />
        
        <Route path="/detail/:id" element={<Detail characters={characters} />} />
        
        <Route path="/favorites" element={<Favorites characters={characters} />}
        />  
      </Routes>
    </div>
  );
}

export default App;
