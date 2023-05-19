import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function Detail (){
    const { id } = useParams();
    const [ character, setCharacter ] = useState([]);

    const URL_BASE = 'https://rickandmortyapi.com/api'

    useEffect(() => {
        fetch(`${URL_BASE}/characters/${id}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            } 
          })
          .then(data => {
            setCharacter(data);
          })
      }, [id]);

    return (
        <div>
            ID: {id}
        </div>
    )
}