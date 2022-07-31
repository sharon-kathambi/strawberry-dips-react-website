import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection';
//import CardItem from "../CardItem"

export default function Services() {
  //const {id} = useParams()
  
  return (
    <>
  <HeroSection />
  <Cards />
  <Footer />
  
</>
)
}