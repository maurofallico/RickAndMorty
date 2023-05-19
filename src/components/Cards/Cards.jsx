import Card from '../Card/Card.jsx';
import styled from './Cards.module.css';

export default function Cards({characters, onClose}) {
   return (
      <div className = {styled.container}>
      {characters.map(({id, name, species, gender, image}) => {
         return (
            <Card
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={onClose}
            />
         )
         })}
   </div>
   )
}
