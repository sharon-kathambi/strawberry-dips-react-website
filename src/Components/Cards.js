import React, {useState, useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  const [travel, setTravel] = useState([]);

  useEffect(() => {
    //fetch("http://localhost:3005/travel")
    fetch(`${process.env.REACT_APP_API_URL}/travel`)
    .then((r) => r.json())
    .then((data) => setTravel(data))
  },[])

  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {travel.map((trav, index)=> {
              return <CardItem key={index}
              src={trav.image}
              text={trav.text}
              label={trav.category}
              path='/services'
              id={trav.id}
            />
            })}
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;