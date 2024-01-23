import React ,{useEffect,useState}from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from '../component/Carousel'
export default function Home() {
  const [food_category,setFood_category]=useState([]);
  const [food_items,setFood_items]=useState([]);
  const loadData=async()=>{
    let response=await fetch('http://localhost:5000/api/foodData',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      }
    });
    response=await response.json();
    setFood_category(response[1]);
    setFood_items(response[0]);
    
  }
  useEffect(()=>{loadData()},[]);
  return (
    <div>
      <div> <Navbar /></div>
      <div><Carousel/></div>
      <div className='m-3'><Card/></div>
      <div><Footer /></div>
    </div>
  )
}
//object kae andar for in and [] mei map