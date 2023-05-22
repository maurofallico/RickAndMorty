import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import {useState} from "react";
import {Route, Routes} from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';


function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      const URL_BASE = 'https://rickandmortyapi.com/api'

   fetch(`${URL_BASE}/character/${id}`)
   .then((response) => response.json())
   .then((data) => {
   if (data.name && !characters.find((char) => char.id === data.id)){
      setCharacters ((oldChars) => [...oldChars, data])
      }
      else if (characters.find((char) => char.id === data.id)){
         alert("El personaje ya se está mostrando.")
      }
      else{
      alert("El ID no es válido.")
      }
   })
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id))
   }

   return (
      <div className='App'>
         <Nav onSearch = {onSearch}/>
         <Routes>
            <Route path = "/" element = {<Form />} />
            <Route path = "/home" element = {<Cards characters={characters} onClose ={onClose} /> } />
            <Route path = "/about" element = {<About />} />
            <Route path = "/detail/:id" element = {<Detail characters={characters} />} />
         </Routes>
      </div>
   );
}

export default App;
