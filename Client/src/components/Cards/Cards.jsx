import Card from '../Card/Card.jsx';
import styled from './Cards.module.css';

export default function Cards({characters}) {
   return (
      <div className = {styled.container}>
      {characters.map(({id, name, species, gender, image, status, origin}) => {
         return (
            <div className={styled.card} key={id}>
            <Card
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               status={status}
               origin={origin}
            />
            </div>
         )
         })}
   </div>
   )
}
