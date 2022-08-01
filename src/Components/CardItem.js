import React from 'react'
import { Link } from 'react-router-dom'



function CardItem(props) {

  

  console.log(props)
  return (
      <li className='cards__item'>
        <Link className='cards__item__link' to="/services">
          <figure className='cards__item__pic-wrap' data={props.label}>
            <img
              className='cards__item__img'
              src = "/images/img-2.jpg"
              alt='Travel Image'
              
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
  )
}

export default CardItem
