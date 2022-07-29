import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';
//import CardItem from "../CardItem"

export default function Services() {
  const {id} = useParams()
  /*const [travel, setTravel] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3005/travel")
    .then((r) => r.json())
    .then((data) =>{
      setTravel(data)
    })
  }, [])*/
  return (
    <div>
  <h1 className='services'>SERVICES {id}</h1>;
  
</div>
)
}

/*{travel.map((trav)=> {
  return <CardItem key={trav.id}
  src={trav.image}
            text={trav.text}
            label={trav.category}/>
})}*/