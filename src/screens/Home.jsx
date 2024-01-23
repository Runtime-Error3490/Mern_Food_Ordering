import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../component/Carousel'
export default function Home() {
  const [food_category, setFood_category] = useState([]);
  const [food_items, setFood_items] = useState([]);
  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFood_category(response[1]);
    setFood_items(response[0]);

  }
  useEffect(() => { loadData() }, []);
  return (
    <div>
      <div> <Navbar /></div>
      <div><Carousel /></div>
      <div className='container'>
        {food_category.length > 0
          ? food_category.map((data) => (
            <div key={data.id}> 
              <div className='row mb-3'>
                <div className="fs-3 m-3 col-12">
                  {data.CategoryName}
                </div>
              </div>
              <div className='row'>
                {food_items.length > 0
                  ? food_items.filter((item) => item.CategoryName === data.CategoryName)
                    .map((filterItems) => (
                      <div className='col-12 col-md-6 col-lg-3' key={filterItems.id}>
                        <Card></Card>
                      </div>
                    ))
                  : <div className='col-12'>No Data Found</div> 
                }
              </div>

              <hr /> 
            </div>
          ))
          : null 
        }
      </div>

      <div><Footer /></div>
    </div>
  )
}
//object kae andar for in and [] mei map