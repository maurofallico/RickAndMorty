import Card from '../Card/Card.jsx';
import styled from './Cards.module.css';

export default function Cards({characters, onClose}) {
   return (
      <div className = {styled.container}>
      {characters.map(({id, name, species, gender, image, status, origin}) => {
         return (
            <div className = {styled.card}>
            <Card
               key={id}
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               status={status}
               origin={origin}
               onClose={onClose}
            />
            </div>
         )
         })}
   </div>
   )
}
