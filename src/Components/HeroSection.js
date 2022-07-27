import React from 'react'
import '../App.css'
import Button from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>CHOCOLATE COVERED TREATS GIFT SHOP</h1>
        <p>Same day gift delivery in Nairobi</p>
        <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--medium'>
            Shop now
        </Button>
        </div>
    </div>
  )
}

export default HeroSection
