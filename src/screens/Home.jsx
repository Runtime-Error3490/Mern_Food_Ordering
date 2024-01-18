import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from '../component/Carousel'
export default function home() {
  return (
    <div>
      <div> <Navbar /></div>
      <div><Carousel/></div>
      <div><Card/></div>
      <div><Footer /></div>
    </div>
  )
}
